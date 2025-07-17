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
      }, 3000)
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
    <section className={`${css.services} section`} id="services">
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
                  {images.map((image, index) => (
                    <img
                      key={`${image}-${index}`}
                      src={image}
                      alt=""
                      className={`${css.carouselImage} ${index === currentImageIndex ? css.active : ''}`}
                    />
                  ))}
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
                  <div className={css.placeholderContent}>
                    <i className="fas fa-spa"></i>
                    <p>{TEXTS.selectCategory[language]}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Content Section */}
          <div className={css.contentSection}>
            {!selectedCategory ? (
              // Categories List
              <div className={css.categoriesList}>
                <h3 className={css.listTitle}>{TEXTS.selectCategory[language]}</h3>
                {SERVICES_DATA.map((category) => (
                  <div
                    key={category.id}
                    className={css.categoryItem}
                    onClick={() => handleCategorySelect(category)}
                    onMouseEnter={() => setHoveredCategory(category)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    <div className={css.categoryItemContent}>
                      <i className={category.icon}></i>
                      <div className={css.categoryInfo}>
                        <h4>{category.name[language]}</h4>
                        <span>{category.subcategories.length} {TEXTS.servicesCount[language]}</span>
                      </div>
                    </div>
                    <i className="fas fa-arrow-right"></i>
                  </div>
                ))}
              </div>
            ) : (
              // Services List
              <div className={css.servicesList}>
                <button className={css.backButton} onClick={handleBackToCategories}>
                  <i className="fas fa-arrow-left"></i>
                  {TEXTS.backToCategories[language]}
                </button>

                <h3 className={css.listTitle}>{selectedCategory.name[language]}</h3>

                <div className={css.servicesGrid}>
                  {selectedCategory.subcategories.map((service) => (
                    <div
                      key={service.id}
                      className={`${css.serviceItem} ${selectedService?.id === service.id ? css.active : ''}`}
                      onClick={() => handleServiceSelect(service)}
                      onMouseEnter={() => setHoveredService(service)}
                      onMouseLeave={() => setHoveredService(null)}
                    >
                      <h4>{service.name[language]}</h4>
                      <i className="fas fa-arrow-right"></i>
                    </div>
                  ))}
                </div>

                {selectedService && (
                  <div className={css.serviceDetails}>
                    <div className={css.serviceDetailHeader}>
                      <h4>{TEXTS.serviceDescription[language]}</h4>
                    </div>
                    <h5>{selectedService.name[language]}</h5>
                    {selectedService.description && (
                      <p>{selectedService.description[language]}</p>
                    )}
                    <button className={css.bookButton} onClick={handleBooking}>
                      <span>{TEXTS.bookNow[language]}</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}