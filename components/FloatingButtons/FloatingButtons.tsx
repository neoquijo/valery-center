"use client"

import type React from "react"
import type { Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./FloatingButtons.module.css"

interface FloatingButtonsProps {
  language: Language
}

export const FloatingButtons: React.FC<FloatingButtonsProps> = ({ language }) => {
  const handleCall = () => {
    window.location.href = "tel:+34602489061"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/34602489061", "_blank")
  }

  return (
    <div className={css.floatingButtons}>
      <button className={css.callBtn} onClick={handleCall} title={TEXTS.callNow[language]}>
        <i className="fas fa-phone-alt"></i>
      </button>

      <button className={css.whatsappBtn} onClick={handleWhatsApp} title={TEXTS.whatsapp[language]}>
        <i className="fab fa-whatsapp"></i>
      </button>
    </div>
  )
}
