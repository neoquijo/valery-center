// components/Services/Services.tsx
"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import type { Language, ServiceCategory, ServiceSubcategory } from "../../types"
import { TEXTS, SERVICES_DATA } from "../../constants/texts"
import css from "./Services.module.css"

interface ServicesProps {
  language: Language
}

interface MediaItem {
  type: 'image' | 'video'
  src: string
  thumbnail?: string
  duration?: string
  source?: ServiceCategory | ServiceSubcategory
  loaded?: boolean
}

// Intersection Observer для ленивой загрузки
const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
    }, options)

    observer.observe(element)
    return () => observer.unobserve(element)
  }, [ref, options])

  return isIntersecting
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)
  const [selectedService, setSelectedService] = useState<ServiceSubcategory | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<ServiceCategory | null>(null)
  const [hoveredService, setHoveredService] = useState<ServiceSubcategory | null>(null)
  const [lockedCategory, setLockedCategory] = useState<ServiceCategory | null>(null)
  const [lockedService, setLockedService] = useState<ServiceSubcategory | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [currentVideoSrc, setCurrentVideoSrc] = useState<string>('')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isVideoMuted, setIsVideoMuted] = useState(true)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [videoThumbnails, setVideoThumbnails] = useState<Record<string, string>>({})
  const [loadedVideos, setLoadedVideos] = useState<Set<string>>(new Set())
  const [pendingThumbnails, setPendingThumbnails] = useState<Set<string>>(new Set())

  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const touchStartX = useRef<number>(0)
  const thumbnailQueue = useRef<string[]>([])
  const isGeneratingThumbnail = useRef<boolean>(false)

  // Intersection Observer для секции
  //@ts-ignore
  const isVisible = useIntersectionObserver(servicesRef, { threshold: 0.1 })

  // Ленивая генерация thumbnail'ов с очередью
  const generateVideoThumbnailLazy = useCallback(async (videoSrc: string) => {
    if (videoThumbnails[videoSrc] || pendingThumbnails.has(videoSrc)) return

    setPendingThumbnails(prev => new Set(prev).add(videoSrc))

    return new Promise<void>((resolve) => {
      const video = document.createElement('video')
      video.src = videoSrc
      video.muted = true
      video.playsInline = true
      video.preload = 'metadata'
      video.crossOrigin = 'anonymous'

      const cleanup = () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata)
        video.removeEventListener('seeked', handleSeeked)
        video.removeEventListener('error', handleError)
        video.src = ''
        setPendingThumbnails(prev => {
          const newSet = new Set(prev)
          newSet.delete(videoSrc)
          return newSet
        })
        resolve()
      }

      const handleLoadedMetadata = () => {
        video.currentTime = Math.min(1, video.duration * 0.1)
      }

      const handleSeeked = () => {
        const canvas = document.createElement('canvas')
        const aspectRatio = video.videoWidth / video.videoHeight

        canvas.width = 300
        canvas.height = 300 / aspectRatio

        const ctx = canvas.getContext('2d')

        if (ctx) {
          try {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
            const thumbnail = canvas.toDataURL('image/jpeg', 0.6)
            setVideoThumbnails(prev => ({ ...prev, [videoSrc]: thumbnail }))
          } catch (error) {
            console.warn('Thumbnail generation failed:', videoSrc)
          }
        }
        cleanup()
      }

      const handleError = () => {
        console.warn('Video loading failed for thumbnail:', videoSrc)
        cleanup()
      }

      video.addEventListener('loadedmetadata', handleLoadedMetadata)
      video.addEventListener('seeked', handleSeeked)
      video.addEventListener('error', handleError)

      // Timeout для очистки зависших запросов
      setTimeout(() => {
        if (pendingThumbnails.has(videoSrc)) {
          cleanup()
        }
      }, 5000)

      video.load()
    })
  }, [videoThumbnails, pendingThumbnails])

  // Процессор очереди thumbnail'ов
  const processThumbnailQueue = useCallback(async () => {
    if (isGeneratingThumbnail.current || thumbnailQueue.current.length === 0) return

    isGeneratingThumbnail.current = true

    while (thumbnailQueue.current.length > 0) {
      const videoSrc = thumbnailQueue.current.shift()
      if (videoSrc && !videoThumbnails[videoSrc]) {
        await generateVideoThumbnailLazy(videoSrc)
        // Небольшая задержка между генерациями
        await new Promise(resolve => setTimeout(resolve, 100))
      }
    }

    isGeneratingThumbnail.current = false
  }, [generateVideoThumbnailLazy, videoThumbnails])

  // Добавление видео в очередь только при необходимости
  const queueVideoThumbnail = useCallback((videoSrc: string) => {
    if (!videoThumbnails[videoSrc] && !pendingThumbnails.has(videoSrc)) {
      if (!thumbnailQueue.current.includes(videoSrc)) {
        thumbnailQueue.current.push(videoSrc)
      }
      // Запускаем процессор с небольшой задержкой
      setTimeout(processThumbnailQueue, 50)
    }
  }, [videoThumbnails, pendingThumbnails, processThumbnailQueue])

  const getMediaItems = (): MediaItem[] => {
    let items: MediaItem[] = []
    let currentSource: ServiceCategory | ServiceSubcategory | null = null

    const addMedia = (source: ServiceCategory | ServiceSubcategory | null, isSubcategory: boolean = false) => {
      if (!source) return

      if (!currentSource || isSubcategory) {
        currentSource = source
      }

      // Добавляем изображения (они грузятся быстро)
      if (source.images) {
        items.push(...source.images.map(src => ({
          type: 'image' as const,
          src,
          source: currentSource || undefined,
          loaded: true
        })))
      }

      // Добавляем видео только если секция видна
      if (source.videos && isVisible) {
        source.videos.forEach(src => {
          items.push({
            type: 'video' as const,
            src,
            thumbnail: videoThumbnails[src] || undefined,
            source: currentSource || undefined,
            loaded: loadedVideos.has(src)
          })

          // Добавляем в очередь только активные видео
          queueVideoThumbnail(src)
        })
      }
    }

    const addCategoryWithSubcategories = (category: ServiceCategory) => {
      addMedia(category, false)
      category.subcategories.forEach(subcategory => {
        addMedia(subcategory, true)
      })
    }

    // Приоритетный порядок загрузки
    if (selectedService) {
      addMedia(selectedService, true)
      if (items.length === 0) {
        items.push({
          type: 'image' as const,
          src: '/logo.png',
          source: selectedService,
          loaded: true
        })
      }
    } else if (lockedService || hoveredService) {
      const service = lockedService || hoveredService
      addMedia(service, true)
      if (items.length === 0 && service) {
        items.push({
          type: 'image' as const,
          src: '/logo.png',
          source: service,
          loaded: true
        })
      }
    } else if (selectedCategory) {
      addCategoryWithSubcategories(selectedCategory)
    } else if (lockedCategory || hoveredCategory) {
      const category = lockedCategory || hoveredCategory
      if (category) {
        addCategoryWithSubcategories(category)
      }
    }

    return items
  }

  const mediaItems = getMediaItems()

  const videoItems = useMemo(() => {
    return mediaItems.filter(item => item.type === 'video')
  }, [mediaItems])

  // Предзагрузка только текущего и следующего видео в карусели
  useEffect(() => {
    if (mediaItems.length > 0 && isVisible) {
      const currentItem = mediaItems[currentMediaIndex]
      const nextIndex = (currentMediaIndex + 1) % mediaItems.length
      const nextItem = mediaItems[nextIndex]

      // Загружаем текущее видео
      if (currentItem?.type === 'video' && !loadedVideos.has(currentItem.src)) {
        setLoadedVideos(prev => new Set(prev).add(currentItem.src))
      }

      // Предзагружаем следующее видео
      if (nextItem?.type === 'video' && !loadedVideos.has(nextItem.src)) {
        setTimeout(() => {
          setLoadedVideos(prev => new Set(prev).add(nextItem.src))
        }, 1000)
      }
    }
  }, [currentMediaIndex, mediaItems, isVisible, loadedVideos])

  // Фильтрация категорий
  const filteredCategories = SERVICES_DATA.filter(category =>
    category.name[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.subcategories.some(service =>
      service.name[language].toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  // Автовоспроизведение карусели
  useEffect(() => {
    if (mediaItems.length > 1 && isAutoPlaying && !showVideoModal && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
      }, 4000)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [mediaItems.length, isAutoPlaying, showVideoModal, isVisible])

  // Сброс индекса при изменении выбора
  useEffect(() => {
    setCurrentMediaIndex(0)
  }, [selectedCategory, selectedService, hoveredCategory, hoveredService, lockedCategory, lockedService])

  // Клавиатурная навигация
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showVideoModal) {
        switch (e.key) {
          case 'Escape':
            closeVideoModal()
            break
          case 'ArrowLeft':
            handlePrevVideo()
            break
          case 'ArrowRight':
            handleNextVideo()
            break
          case ' ':
            e.preventDefault()
            toggleVideoPlayback()
            break
        }
      } else if (mediaItems.length > 1) {
        switch (e.key) {
          case 'ArrowLeft':
            handlePrevMedia()
            break
          case 'ArrowRight':
            handleNextMedia()
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [showVideoModal, mediaItems.length])

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNextVideo()
      } else {
        handlePrevVideo()
      }
    }
  }

  // Обработчики событий
  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category)
    setSelectedService(null)
    setHoveredService(null)
    setLockedCategory(null)
    setLockedService(null)
    setSearchQuery("")
  }

  const handleServiceSelect = (service: ServiceSubcategory) => {
    setSelectedService(service)
    setLockedService(null)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setSelectedService(null)
    setHoveredCategory(null)
    setHoveredService(null)
    setLockedCategory(null)
    setLockedService(null)
  }

  const handleSelectAnotherService = () => {
    setSelectedService(null)
    setLockedService(null)
  }

  const handlePrevMedia = () => {
    setIsAutoPlaying(false)
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length)
  }

  const handleNextMedia = () => {
    setIsAutoPlaying(false)
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length)
  }

  const openVideoModal = (videoSrc: string) => {
    setCurrentVideoSrc(videoSrc)
    setShowVideoModal(true)
    setIsVideoPlaying(true)
  }

  const closeVideoModal = () => {
    setShowVideoModal(false)
    setIsVideoPlaying(false)
    if (videoRef.current) {
      videoRef.current.pause()
    }
  }

  const handlePrevVideo = () => {
    if (videoItems.length > 1) {
      const currentIndex = videoItems.findIndex(v => v.src === currentVideoSrc)
      const prevIndex = (currentIndex - 1 + videoItems.length) % videoItems.length
      setCurrentVideoSrc(videoItems[prevIndex].src)
    }
  }

  const handleNextVideo = () => {
    if (videoItems.length > 1) {
      const currentIndex = videoItems.findIndex(v => v.src === currentVideoSrc)
      const nextIndex = (currentIndex + 1) % videoItems.length
      setCurrentVideoSrc(videoItems[nextIndex].src)
    }
  }

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const toggleVideoMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted
      setIsVideoMuted(!isVideoMuted)
    }
  }

  const handleBooking = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const shouldShowSearch = filteredCategories.length > 8

  // Ленивый рендер видео thumbnail'а
  const renderVideoThumbnail = (item: MediaItem, index: number) => {
    const isActive = index === currentMediaIndex
    const shouldLoad = isActive || loadedVideos.has(item.src)
    const hasGeneratedThumbnail = item.thumbnail && item.thumbnail !== item.src

    return (
      <div
        className={css.videoThumbnail}
        style={{
          pointerEvents: isActive ? 'auto' : 'none'
        }}
        onClick={(e) => {
          e.stopPropagation()
          openVideoModal(item.src)
        }}
      >
        {hasGeneratedThumbnail ? (
          <img
            src={item.thumbnail}
            alt=""
            className={css.carouselImage}
            loading="lazy"
          />
        ) : shouldLoad ? (
          <video
            src={item.src}
            className={css.carouselImage}
            muted
            playsInline
            preload="metadata"
            //@ts-ignore
            loading="lazy"
          />
        ) : (
          <div className={css.videoPlaceholder}>
            <div className={css.loadingSpinner}></div>
          </div>
        )}

        <button
          className={css.playButton}
          onClick={(e) => {
            e.stopPropagation()
            openVideoModal(item.src)
          }}
        >
          <i className="fas fa-play"></i>
        </button>

        {item.duration && (
          <span className={css.videoDuration}>{item.duration}</span>
        )}
      </div>
    )
  }

  return (
    <section ref={servicesRef} className={`${css.services} section`} id="services">
      <div className={css.backgroundDecoration}>
        <div className={css.bgCircle1}></div>
        <div className={css.bgCircle2}></div>
        <div className={css.bgCircle3}></div>
      </div>

      <div className={css.container}>
        {/* <div className={css.header}>
          <p className={css.sectionSubtitle}>{TEXTS.services[language]}</p>
          <h2 className={css.sectionTitle}>{TEXTS.exclusiveTreatments[language]}</h2>
        </div> */}

        <div className={css.splitLayout}>
          {/* Left Side - Media Section */}
          <div className={css.mediaSection}>
            <div className={css.mediaCarousel}>
              {mediaItems.length > 0 ? (
                <>
                  <div className={css.mediaContainer}>
                    {mediaItems.map((item: MediaItem, index: number) => (
                      <div
                        key={`${item.src}-${index}`}
                        className={`${css.mediaItem} ${index === currentMediaIndex ? css.active : ''}`}
                        style={{
                          zIndex: index === currentMediaIndex ? 2 : 1
                        }}
                      >
                        {item.type === 'image' ? (
                          <img
                            src={item.src}
                            alt=""
                            className={css.carouselImage}
                            loading={index === currentMediaIndex ? "eager" : "lazy"}
                          />
                        ) : (
                          renderVideoThumbnail(item, index)
                        )}
                      </div>
                    ))}
                  </div>

                  {mediaItems.length > 1 && (
                    <>
                      <button
                        className={`${css.carouselButton} ${css.prev}`}
                        onClick={handlePrevMedia}
                        aria-label="Previous media"
                        style={{ zIndex: 20 }}
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        className={`${css.carouselButton} ${css.next}`}
                        onClick={handleNextMedia}
                        aria-label="Next media"
                        style={{ zIndex: 20 }}
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                      <div className={css.carouselIndicators} style={{ zIndex: 20 }}>
                        {mediaItems.map((item: MediaItem, index: number) => (
                          <button
                            key={index}
                            className={`${css.indicator} ${index === currentMediaIndex ? css.active : ''} ${item.type === 'video' ? css.videoIndicator : ''}`}
                            onClick={() => {
                              setCurrentMediaIndex(index)
                              setIsAutoPlaying(false)
                            }}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className={css.placeholderImage}>
                  <div className={css.placeholderPattern}></div>
                  <div className={css.placeholderContent}>
                    <div className={css.logoText}>{TEXTS.selectCategory[language]}</div>

                  </div>
                </div>
              )}

              {/* Category/Service info overlay */}
              {/* {mediaItems.length > 0 && mediaItems[currentMediaIndex]?.source && (
                <div className={css.imageOverlay} style={{ zIndex: 15 }}>
                  <h3>{mediaItems[currentMediaIndex].source.name[language]}</h3>
                  <p>{mediaItems[currentMediaIndex].source.description?.[language]}</p>
                </div>
              )} */}
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className={css.contentSection}>
            {!selectedCategory ? (
              // Categories List
              <div className={css.categoriesList}>
                <h3 className={css.listTitle}>

                  <span className={css.titleAccent}>{TEXTS.categoryList[language]}</span>
                </h3>

                {/* {shouldShowSearch && (
                  <div className={css.searchContainer}>
                    <input
                      type="text"
                      className={css.searchInput}
                      placeholder={TEXTS.searchServices?.[language] || 'Search services...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="fas fa-search"></i>
                  </div>
                )} */}

                <div className={css.categoriesContainer}>
                  <div className={css.categoriesGrid}>
                    {filteredCategories.map((category, index) => (
                      <div
                        key={category.id}
                        className={css.categoryCard}
                        onClick={() => handleCategorySelect(category)}
                        onMouseEnter={() => {
                          setHoveredCategory(category)
                          setLockedCategory(category)
                        }}
                        onMouseLeave={() => setHoveredCategory(null)}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className={css.categoryCardInner}>
                          <div className={css.categoryContent}>
                            <h4>{category.name[language]}</h4>
                            <span className={css.serviceCount}>
                              {category.subcategories.length} {TEXTS.servicesCount[language]}
                            </span>
                          </div>
                          <div className={css.categoryArrow}>
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                        <div className={css.categoryHoverBg}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : !selectedService ? (
              // Services List
              <div className={css.servicesList}>
                <div className={css.servicesHeader}>
                  <button className={css.backButton} onClick={handleBackToCategories}>
                    <i className="fas fa-arrow-left"></i>
                    <span>{TEXTS.backToCategories[language]}</span>
                  </button>

                  <div className={css.categoryHeader}>
                    <h3 className={css.categoryName}>{selectedCategory.name[language]}</h3>
                    {selectedCategory.description && (
                      <p className={css.categoryDescription}>{selectedCategory.description[language]}</p>
                    )}
                  </div>
                </div>

                <div className={css.servicesContainer}>
                  <div className={css.servicesGrid}>
                    {selectedCategory.subcategories.map((service, index) => (
                      <div
                        key={service.id}
                        className={css.serviceCard}
                        onClick={() => handleServiceSelect(service)}
                        onMouseEnter={() => {
                          setHoveredService(service)
                          setLockedService(service)
                        }}
                        onMouseLeave={() => setHoveredService(null)}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className={css.serviceCardContent}>
                          <h4>{service.name[language]}</h4>
                          <div className={css.serviceArrow}>
                            <i className="fas fa-arrow-right"></i>
                          </div>
                        </div>
                        <div className={css.serviceCardBg}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              // Service Details
              <div className={css.serviceDetails}>
                <button className={css.changeServiceButton} onClick={handleSelectAnotherService}>
                  <i className="fas fa-exchange-alt"></i>
                  <span>{TEXTS.selectAnotherService[language]}</span>
                </button>

                <div className={css.serviceDetailContent}>
                  <h3 className={css.serviceTitle}>{selectedService.name[language]}</h3>

                  {selectedService.description && (
                    <p className={css.serviceDescription}>{selectedService.description[language]}</p>
                  )}

                  {selectedService.price && (
                    <div className={css.servicePrice}>
                      <span className={css.priceLabel}>{TEXTS.priceFrom[language]}</span>
                      <span className={css.priceValue}>{selectedService.price[language]}</span>
                    </div>
                  )}

                  <button className={css.bookButton} onClick={handleBooking}>
                    <span>{TEXTS.bookNow[language]}</span>
                    <div className={css.buttonGlow}></div>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideoModal && videoItems.length > 0 && (
        <div className={css.videoModal} onClick={closeVideoModal}>
          <div
            className={css.videoModalContent}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className={css.closeButton} onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className={css.videoWrapper}>
              {currentVideoSrc && (
                <video
                  ref={videoRef}
                  key={`video-${currentVideoSrc}`}
                  src={currentVideoSrc}
                  className={css.modalVideo}
                  autoPlay
                  muted={isVideoMuted}
                  playsInline
                  onClick={toggleVideoPlayback}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
              )}
            </div>

            <div className={css.videoControls}>
              {videoItems.length > 1 && (
                <button className={css.controlButton} onClick={handlePrevVideo}>
                  <i className="fas fa-chevron-left"></i>
                </button>
              )}

              <button className={css.controlButton} onClick={toggleVideoPlayback}>
                <i className={`fas fa-${isVideoPlaying ? 'pause' : 'play'}`}></i>
              </button>

              {videoItems.length > 1 && (
                <button className={css.controlButton} onClick={handleNextVideo}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              )}

              <button className={css.controlButton} onClick={toggleVideoMute}>
                <i className={`fas fa-volume-${isVideoMuted ? 'mute' : 'up'}`}></i>
              </button>
            </div>

            {videoItems.length > 1 && (
              <div className={css.videoIndicators}>
                {videoItems.map((video: MediaItem, index: number) => (
                  <span
                    key={index}
                    className={`${css.videoIndicator} ${video.src === currentVideoSrc ? css.active : ''}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}