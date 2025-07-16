"use client"

import type React from "react"
import { useState } from "react"
import type { ServiceCategory, Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./ServiceCard.module.css"

interface ServiceCardProps {
  service: ServiceCategory
  language: Language
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, language }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`${css.serviceCard} reveal`}>
      <div className={css.serviceImage}>
        <div className={css.serviceIcon}>
          <i className={service.icon}></i>
        </div>
      </div>
      <div className={css.serviceContent}>
        <h3>{service.name[language]}</h3>
        <p>{service.description?.[language]}</p>
        <div className={css.serviceActions}>
          <button className={css.serviceLink} onClick={() => setIsExpanded(!isExpanded)}>
            {TEXTS.viewMore[language]} <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>

      {isExpanded && service.subcategories && (
        <div className={css.subcategories}>
          {service.subcategories.map((subcategory) => (
            <div key={subcategory.id} className={css.subcategoryItem}>
              <h4>{subcategory.name[language]}</h4>
              {subcategory.description && <p>{subcategory.description[language]}</p>}
              {subcategory.price && <span className={css.price}>{subcategory.price[language]}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
