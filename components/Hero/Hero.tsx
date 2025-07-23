"use client"

import type React from "react"
import type { Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./Hero.module.css"
import { useState } from "react"
import BookModal from "../BookModal/BookModal"

interface HeroProps {
  language: Language
}

export const Hero: React.FC<HeroProps> = ({ language }) => {

  const [bookingModal, showBookModal] = useState(false)

  const scrollToServices = () => {
    const element = document.getElementById("services")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className={css.hero}>

      <div className={css.heroBg}></div>
      {bookingModal && <BookModal closeCaption={TEXTS.closeText[language]} cb={() => { showBookModal(false) }} />}
      <div className={css.floatingElements}>
        <div className={css.floatElement}></div>
        <div className={css.floatElement}></div>
        <div className={css.floatElement}></div>
      </div>
      <div className={css.heroContent}>

        <p className={css.heroSubtitle}>{TEXTS.tagline[language]}</p>
        <h1>
          <img className={css.logoImage} src={'/logo.png'}></img>
          {/* <span>{TEXTS.siteTitle[language]}</span> */}
        </h1>
        <p className={css.heroDescription}>{TEXTS.heroDescription[language]}</p>
        <div className={css.heroCta}>
          <button className={css.btnPrimary} onClick={scrollToServices}>
            {TEXTS.ourServices[language]}
          </button>
          <button className={css.ctaSecondary} onClick={() => showBookModal(true)}>
            {TEXTS.bookService[language]}
          </button>
        </div>
      </div>
    </section>
  )
}
