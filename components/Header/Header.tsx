"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./Header.module.css"

interface HeaderProps {
  language: Language
  onLanguageChange: (lang: Language) => void
}

export const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className={`${css.nav} ${isScrolled ? css.scrolled : ""}`}>
      <div className={css.container}>
        <div className={css.navContainer}>
          <a href="#" className={`${css.logo} ${isScrolled ? css.logoScrolled : ""}`}>
            {/* <img className={`${css.logoImage} ${isScrolled ? css.logoImageScrolled : ""}`} src={isScrolled ? '/bg-scroll.png' : '/logo.png'}></img> */}
            {/* {TEXTS.siteTitle[language]} */}
          </a>

          <div className={`${css.navLinks} ${isMenuOpen ? css.active : ""}`} id="navLinks">
            <button onClick={() => scrollToSection("services")}>{TEXTS.services[language]}</button>
            <button onClick={() => scrollToSection("team")}>{TEXTS.team[language]}</button>
            <button onClick={() => scrollToSection("reviews")}>{TEXTS.reviews[language]}</button>
            <button onClick={() => scrollToSection("contact")}>{TEXTS.contact[language]}</button>

            <div className={css.languageSwitch}>
              <button
                className={`${css.langBtn} ${language === "ru" ? css.active : ""}`}
                onClick={() => onLanguageChange("ru")}
              >
                RU
              </button>
              <button
                className={`${css.langBtn} ${language === "en" ? css.active : ""}`}
                onClick={() => onLanguageChange("en")}
              >
                EN
              </button>
            </div>

            <button className={css.bookBtn}>{TEXTS.booking[language]}</button>
          </div>

          <div
            className={`${css.hamburger} ${isMenuOpen ? css.active : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}
