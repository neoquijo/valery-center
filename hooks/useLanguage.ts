"use client"

import { useState, useEffect } from "react"
import type { Language } from "../types"

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    const detectedLang: Language = browserLang.startsWith("en") ? "en" : "ru"
    const savedLang = localStorage.getItem("valery-center-lang") as Language

    if (savedLang && (savedLang === "ru" || savedLang === "en")) {
      setLanguage(savedLang)
    } else {
      setLanguage(detectedLang)
      localStorage.setItem("valery-center-lang", detectedLang)
    }
  }, [])

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang)
    localStorage.setItem("valery-center-lang", newLang)
  }

  return { language, changeLanguage }
}
