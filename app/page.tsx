"use client"

import { useLanguage } from "../hooks/useLanguage"
import { useScrollReveal } from "../hooks/useScrollReveal"
import { Preloader } from "../components/Preloader/Preloader"
import { Header } from "../components/Header/Header"
import { Hero } from "../components/Hero/Hero"
import { Services } from "../components/Services/Services"
import { Contact } from "../components/Contact/Contact"
import { FloatingButtons } from "../components/FloatingButtons/FloatingButtons"
import { Reviews } from "../components/Reviews/Reviews"
import CookieConsent from "react-cookie-consent";

export default function HomePage() {
  const { language, changeLanguage } = useLanguage()
  useScrollReveal()

  return (
    <div>

      <Preloader />
      <Header language={language} onLanguageChange={changeLanguage} />
      <Hero language={language} />
      <Services language={language} />
      <Reviews language={language} />
      <Contact language={language} />
      <FloatingButtons language={language} />
    </div>
  )
}
