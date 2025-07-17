export type Language = "ru" | "en"

export interface ServiceSubcategory {
  id: string
  name: {
    ru: string
    en: string
  }
  description?: {
    ru: string
    en: string
  }
  price?: {
    ru: string
    en: string
  }
  images?: string[]
  videos?: string[]
}

export interface ServiceCategory {
  id: string
  name: {
    ru: string
    en: string
  }
  description?: {
    ru: string
    en: string
  }
  icon: string
  images?: string[]
  videos?: string[]
  subcategories: ServiceSubcategory[]
}

export interface TextContent {
  ru: string
  en: string
}