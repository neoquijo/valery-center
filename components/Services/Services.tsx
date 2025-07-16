// components/Services/Services.tsx
"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import type { Language, ServiceCategory, ServiceSubcategory } from "../../types"
import { TEXTS, SERVICES_DATA } from "../../constants/texts"
import css from "./Services.module.css"

interface ServicesProps {
  language: Language
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)
  const [selectedService, setSelectedService] = useState<ServiceSubcategory | null>(null)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)
  const [mediaType, setMediaType] = useState<'images' | 'videos'>('images')
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Get current media array (category or service)
  const getCurrentMedia = () => {
    if (selectedService) {
      return mediaType === 'images' ? selectedService.images : selectedService.videos
    } else if (selectedCategory) {
      return mediaType === 'images' ? selectedCategory.images : selectedCategory.videos
    }
    return []
  }

  const hasImages = () => {
    if (selectedService) {
      return selectedService.images && selectedService.images.length > 0
    } else if (selectedCategory) {
      return selectedCategory.images && selectedCategory.images.length > 0
    }
    return false
  }

  const hasVideos = () => {
    if (selectedService) {
      return selectedService.videos && selectedService.videos.length > 0
    } else if (selectedCategory) {
      return selectedCategory.videos && selectedCategory.videos.length > 0
    }
    return false
  }

  useEffect(() => {
    // Reset media when changing selection
    setCurrentMediaIndex(0)
    setIsVideoPlaying(false)
    if (hasImages()) {
      setMediaType('images')
    } else if (hasVideos()) {
      setMediaType('videos')
    }
  }, [selectedService, selectedCategory])

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category)
    setSelectedService(null)
  }

  const handleServiceSelect = (service: ServiceSubcategory) => {
    setSelectedService(service)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setSelectedService(null)
  }

  const handlePrevMedia = () => {
    const media = getCurrentMedia()
    if (media && media.length > 0) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? media.length - 1 : prev - 1
      )
      setIsVideoPlaying(false)
    }
  }

  const handleNextMedia = () => {
    const media = getCurrentMedia()
    if (media && media.length > 0) {
      setCurrentMediaIndex((prev) =>
        prev === media.length - 1 ? 0 : prev + 1
      )
      setIsVideoPlaying(false)
    }
  }

  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  const handleBooking = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const renderMediaSection = () => {
    const media = getCurrentMedia()
    const showTabs = hasImages() && hasVideos()

    return (
      <div className={css.mediaSection}>
        {showTabs && (
          <div className={css.mediaTabs}>
            <button
              className={`${css.mediaTab} ${mediaType === 'images' ? css.active : ''}`}
              onClick={() => {
                setMediaType('images')
                setCurrentMediaIndex(0)
                setIsVideoPlaying(false)
              }}
            >
              <i className="fas fa-image"></i>
              {TEXTS.galleryTab[language]}
            </button>
            <button
              className={`${css.mediaTab} ${mediaType === 'videos' ? css.active : ''}`}
              onClick={() => {
                setMediaType('videos')
                setCurrentMediaIndex(0)
                setIsVideoPlaying(false)
              }}
            >
              <i className="fas fa-video"></i>
              {TEXTS.videosTab[language]}
            </button>
          </div>
        )}

        <div className={css.carousel}>
          {media && media.length > 0 ? (
            <>
              {mediaType === 'images' ? (
                media.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={selectedService?.name[language] || selectedCategory?.name[language]}
                    className={`${css.carouselImage} ${index === currentMediaIndex ? css.active : ''}`}
                  />
                ))
              ) : (
                media.map((video, index) => (
                  <div
                    key={index}
                    className={`${css.videoWrapper} ${index === currentMediaIndex ? css.active : ''}`}
                  >
                    <video
                      ref={index === currentMediaIndex ? videoRef : null}
                      src={video}
                      className={css.carouselVideo}
                      onClick={toggleVideoPlay}
                    />
                    {index === currentMediaIndex && (
                      <button
                        className={css.playButton}
                        onClick={toggleVideoPlay}
                        aria-label={isVideoPlaying ? TEXTS.pauseVideo[language] : TEXTS.playVideo[language]}
                      >
                        <i className={`fas ${isVideoPlaying ? 'fa-pause' : 'fa-play'}`}></i>
                      </button>
                    )}
                  </div>
                ))
              )}

              {media.length > 1 && (
                <>
                  <div className={css.carouselNav}>
                    <button
                      className={css.carouselButton}
                      onClick={handlePrevMedia}
                      aria-label={TEXTS.previousImage[language]}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    <button
                      className={css.carouselButton}
                      onClick={handleNextMedia}
                      aria-label={TEXTS.nextImage[language]}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                  <div className={css.carouselIndicators}>
                    {media.map((_, index) => (
                      <button
                        key={index}
                        className={`${css.indicator} ${index === currentMediaIndex ? css.active : ''}`}
                        onClick={() => {
                          setCurrentMediaIndex(index)
                          setIsVideoPlaying(false)
                        }}
                        aria-label={`${mediaType === 'images' ? 'Image' : 'Video'} ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={css.carouselPlaceholder}>
              <i className={selectedCategory?.icon}></i>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <section className={`${css.services} section`} id="services">
      <div className={css.container}>
        <div className={css.header}>
          <p className={css.sectionSubtitle}>{TEXTS.services[language]}</p>
          <h2 className={css.sectionTitle}>{TEXTS.exclusiveTreatments[language]}</h2>
        </div>

        {!selectedCategory ? (
          // Categories Grid View
          <div className={css.categoriesGrid}>
            {SERVICES_DATA.map((category, index) => (
              <div
                key={category.id}
                className={css.categoryCard}
                style={{ "--index": index } as React.CSSProperties}
                onClick={() => handleCategorySelect(category)}
              >
                <img src={category.images[0]} />
                <div className={css.categoryIcon}>
                  <i className={category.icon}></i>
                </div>
                <div className={css.categoryContent}>
                  <h3>{category.name[language]}</h3>
                  <span className={css.serviceCount}>
                    {category.subcategories.length} {TEXTS.servicesCount[language]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Service Selection View
          <>
            <div className={css.breadcrumb}>
              <button className={css.backButton} onClick={handleBackToCategories}>
                <i className="fas fa-arrow-left"></i>
                {TEXTS.backToCategories[language]}
              </button>
              <span className={css.breadcrumbSeparator}>/</span>
              <span className={css.currentCategory}>{selectedCategory.name[language]}</span>
            </div>

            <div className={css.serviceSelection}>
              {/* Media Section */}
              {renderMediaSection()}

              {/* Services List Section */}
              <div className={css.servicesSection}>
                <h3 className={css.categoryTitle}>{TEXTS.selectService[language]}</h3>
                <div className={css.servicesList}>
                  {selectedCategory.subcategories.map((service) => (
                    <div
                      key={service.id}
                      className={`${css.serviceItem} ${selectedService?.id === service.id ? css.active : ''}`}
                      onClick={() => handleServiceSelect(service)}
                    >
                      <div className={css.serviceHeader}>
                        <h4>{service.name[language]}</h4>
                        <i className={`fas fa-arrow-right ${css.serviceArrow}`}></i>
                      </div>
                    </div>
                  ))}
                </div>

                {selectedService && (
                  <div className={css.bookingSection}>
                    <div className={css.selectedService}>
                      <p>{TEXTS.selectedServiceLabel[language]}</p>
                      <h5>{selectedService.name[language]}</h5>
                    </div>
                    <button className={css.bookButton} onClick={handleBooking}>
                      <span>{TEXTS.bookNow[language]}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  )
}