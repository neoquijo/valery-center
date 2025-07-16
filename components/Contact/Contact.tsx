"use client"

import type React from "react"
import type { Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./Contact.module.css"

interface ContactProps {
  language: Language
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className={`${css.contact} section`} id="contact">
      <div className={css.container}>
        <div className={css.textCenter}>
          <p className={css.sectionSubtitle}>{TEXTS.contact[language]}</p>
          <h2 className={css.sectionTitle}>{TEXTS.bookAppointment[language]}</h2>
        </div>
        <div className={css.contactContainer}>
          <div className={css.contactInfo}>
            <h3>{TEXTS.ourSalon[language]}</h3>
            <div className={css.contactItem}>
              <div className={css.contactIcon}>
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <span>📍 Торревьеха, Испания</span>
            </div>
            <div className={css.contactItem}>
              <div className={css.contactIcon}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <span>📞 +34 602 489 061</span>
            </div>
            <div className={css.contactItem}>
              <div className={css.contactIcon}>
                <i className="fas fa-envelope"></i>
              </div>
              <span>✉️ info@valerycenter.com</span>
            </div>
            <div className={css.contactItem}>
              <div className={css.contactIcon}>
                <i className="fas fa-clock"></i>
              </div>
              <span>🕐 {TEXTS.schedule[language]}</span>
            </div>
            <div className={css.contactItem}>
              <div className={css.contactIcon}>
                <i className="fas fa-parking"></i>
              </div>
              <span>🚗 {TEXTS.parking[language]}</span>
            </div>
          </div>
          <form className={css.contactForm} onSubmit={handleSubmit}>
            <div className={css.formGroup}>
              <input type="text" id="name" required placeholder=" " />
              <label htmlFor="name">{TEXTS.yourName[language]}</label>
            </div>
            <div className={css.formGroup}>
              <input type="tel" id="phone" required placeholder=" " />
              <label htmlFor="phone">{TEXTS.yourPhone[language]}</label>
            </div>
            <div className={css.formGroup}>
              <input type="email" id="email" required placeholder=" " />
              <label htmlFor="email">{TEXTS.yourEmail[language]}</label>
            </div>
            <div className={css.formGroup}>
              <select required defaultValue="">
                <option value="" disabled>
                  {TEXTS.selectService[language]}
                </option>
                <option value="massage">Массаж / Massage</option>
                <option value="cosmetology">Косметология / Cosmetology</option>
                <option value="nails">Ногтевой сервис / Nail Service</option>
                <option value="hair">Парикмахерские услуги / Hair Services</option>
              </select>
            </div>
            <div className={css.formGroup}>
              <textarea id="message" rows={4} placeholder=" "></textarea>
              <label htmlFor="message">{TEXTS.message[language]}</label>
            </div>
            <button type="submit" className={css.btnPrimary}>
              {TEXTS.sendRequest[language]}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
