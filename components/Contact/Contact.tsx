"use client"
import type React from "react"
import type { Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./Contact.module.css"
import BookModal from "../BookModal/BookModal"
import { useState } from "react"
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"

interface ContactProps {
  language: Language
}

export const Contact: React.FC<ContactProps> = ({ language }) => {

  const [privacy, showPrivacy] = useState(false)

  return (
    <section className={`${css.contact} section`} id="contact">
      {privacy && <PrivacyPolicy lang={language} cb={() => showPrivacy(false)} />}
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
              <span>📍 C. Novela 2, Local 7, Orihuela Costa</span>
            </div>
            <div className={css.contactItem}>
              <div className={css.contactIcon}>
                <i className="fas fa-phone-alt"></i>
              </div>
              <span>📞 +34 744 720 006</span>
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
                <i className="fa fa-legal"></i>
              </div>
              <span onClick={() => showPrivacy(true)}>{language == 'en' ? 'Privacy policy' : 'Политика конфиденциальности'}</span>
            </div>
          </div>
          <div className={css.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.234567!2d-0.7433516!3d37.909612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63071a5eb96951%3A0x2cf942ed0c68cd79!2sC.%20Sector%20y-1%20Campoa-Sector%20Nort%2C%204M%2C%2003189%20Dehesa%20de%20Campoamor%2C%20Alicante!5e0!3m2!1sen!2ses!4v1234567890123"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Valery Center Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}