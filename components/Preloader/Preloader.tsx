"use client"

import type React from "react"
import { useState, useEffect } from "react"
import css from "./Preloader.module.css"

export const Preloader: React.FC = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${css.preloader} ${loaded ? css.loaded : ""}`}>
      <img className={css.image} src={'/logo.png'}></img>
      {/* <div className={css.preloaderText}>ValeryCenter</div> */}
    </div>
  )
}
