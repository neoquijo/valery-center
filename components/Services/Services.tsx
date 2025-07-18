// components/Services/Services.tsx
"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import type { Language, ServiceCategory, ServiceSubcategory } from "../../types"
import { TEXTS, SERVICES_DATA } from "../../constants/texts"
import css from "./Services.module.css"

interface ServicesProps {
  language: Language
}

export const Services: React.FC<ServicesProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null)
  const [selectedService, setSelectedService] = useState<ServiceSubcategory | null>(null)
  const [hoveredCategory, setHoveredCategory] = useState<ServiceCategory | null>(null)
  const [hoveredService, setHoveredService] = useState<ServiceSubcategory | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const servicesRef = useRef<HTMLElement>(null)

  // Get current images to display
  const getCurrentImages = () => {
    if (selectedService && selectedService.images) {
      return selectedService.images
    }
    if (hoveredService && hoveredService.images) {
      return hoveredService.images
    }
    if (selectedCategory && selectedCategory.images) {
      return selectedCategory.images
    }
    if (hoveredCategory && hoveredCategory.images) {
      return hoveredCategory.images
    }
    return []
  }

  const images = getCurrentImages()

  // Auto-play carousel
  useEffect(() => {
    if (images.length > 1 && isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length)
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
  }, [images.length, isAutoPlaying])

  // Reset image index when changing selection
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [selectedCategory, selectedService, hoveredCategory, hoveredService])

  // Scroll to top on mobile when service is selected
  useEffect(() => {
    if (selectedService && window.innerWidth <= 768 && servicesRef.current) {
      servicesRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [selectedService])

  const handleCategorySelect = (category: ServiceCategory) => {
    setSelectedCategory(category)
    setSelectedService(null)
    setHoveredService(null)
  }

  const handleServiceSelect = (service: ServiceSubcategory) => {
    setSelectedService(service)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
    setSelectedService(null)
    setHoveredCategory(null)
    setHoveredService(null)
  }

  const handleSelectAnotherService = () => {
    setSelectedService(null)
  }

  const handlePrevImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNextImage = () => {
    setIsAutoPlaying(false)
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handleBooking = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section ref={servicesRef} className={`${css.services} section`} id="services">
      <div className={css.backgroundDecoration}>
        <div className={css.bgCircle1}></div>
        <div className={css.bgCircle2}></div>
        <div className={css.bgCircle3}></div>
      </div>

      <div className={css.container}>
        <div className={css.header}>
          <p className={css.sectionSubtitle}>{TEXTS.services[language]}</p>
          <h2 className={css.sectionTitle}>{TEXTS.exclusiveTreatments[language]}</h2>
        </div>

        <div className={css.splitLayout}>
          {/* Left Side - Media Section */}
          <div className={css.mediaSection}>

            <div className={css.imageCarousel}>
              {images.length > 0 ? (
                <>
                  <div className={css.imageContainer}>
                    {images.map((image, index) => (
                      <img
                        key={`${image}-${index}`}
                        src={image}
                        alt=""
                        className={`${css.carouselImage} ${index === currentImageIndex ? css.active : ''}`}
                      />
                    ))}
                  </div>
                  {images.length > 1 && (
                    <>
                      <button
                        className={`${css.carouselButton} ${css.prev}`}
                        onClick={handlePrevImage}
                        aria-label="Previous image"
                      >
                        <i className="fas fa-chevron-left"></i>
                      </button>
                      <button
                        className={`${css.carouselButton} ${css.next}`}
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <i className="fas fa-chevron-right"></i>
                      </button>
                      <div className={css.carouselIndicators}>
                        {images.map((_, index) => (
                          <button
                            key={index}
                            className={`${css.indicator} ${index === currentImageIndex ? css.active : ''}`}
                            onClick={() => {
                              setCurrentImageIndex(index)
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
                    <div className={css.logoText}>BEAUTY</div>
                    <p>{TEXTS.selectCategory[language]}</p>
                  </div>
                </div>
              )}

              {/* Category/Service info overlay */}
              {(selectedCategory || hoveredCategory) && !selectedService && (
                <div className={css.imageOverlay}>
                  <h3>{(hoveredCategory || selectedCategory)?.name[language]}</h3>
                  <p>{(hoveredCategory || selectedCategory)?.description?.[language]}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className={css.contentSection}>
            {!selectedCategory ? (
              // Categories List
              <div className={css.categoriesList}>
                <h3 className={css.listTitle}>
                  <span className={css.titleAccent}>{TEXTS.selectCategory[language]}</span>
                </h3>
                <div className={css.categoriesContainer}>
                  <div className={css.categoriesGrid}>
                    {SERVICES_DATA.map((category, index) => (
                      <div
                        key={category.id}
                        className={css.categoryCard}
                        onClick={() => handleCategorySelect(category)}
                        onMouseEnter={() => setHoveredCategory(category)}
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
                        onMouseEnter={() => setHoveredService(service)}
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
    </section>
  )
}