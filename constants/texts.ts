import type { TextContent, ServiceCategory } from "../types"

export const TEXTS: Record<string, TextContent> = {

  selectCategory: {
    en: "Select category",
    ru: "Выберете категорию"
  },

  selectAnotherService: {
    en: "Select another service",
    "ru": "Выбрать другую услугу"
  },

  serviceDescription: {
    en: 'Service description',
    ru: 'Описание сервиса'
  },

  servicesCount: {
    ru: 'servicesCount',
    en: "servicesCount"
  },
  backToCategories: {
    ru: "backToCategories",
    en: "backToCategories"
  },
  selectedServiceLabel: {
    ru: "selectedServiceLabel",
    en: "selectedServiceLabel"
  },
  bookNow: {
    ru: "Запись на приём",
    en: "Book now"
  },
  // Header
  siteTitle: {
    ru: "ValeryCenter",
    en: "ValeryCenter",
  },
  tagline: {
    ru: "Премиальный центр красоты и велнеса",
    en: "Premium Beauty & Wellness Center",
  },
  heroDescription: {
    ru: "Эксклюзивные спа-процедуры, профессиональный уход за телом и лицом в самом сердце города",
    en: "Exclusive spa treatments, professional body and face care in the heart of the city",
  },

  // Navigation
  services: {
    ru: "Услуги",
    en: "Services",
  },
  team: {
    ru: "Специалисты",
    en: "Specialists",
  },
  reviews: {
    ru: "Отзывы",
    en: "Reviews",
  },
  contact: {
    ru: "Контакты",
    en: "Contact",
  },
  booking: {
    ru: "Записаться",
    en: "Book Now",
  },

  // Buttons
  callNow: {
    ru: "Позвонить",
    en: "Call Now",
  },
  whatsapp: {
    ru: "WhatsApp",
    en: "WhatsApp",
  },
  viewMore: {
    ru: "Подробнее",
    en: "Learn More",
  },
  bookService: {
    ru: "Записаться онлайн",
    en: "Book Online",
  },
  ourServices: {
    ru: "Наши услуги",
    en: "Our Services",
  },

  // Sections
  exclusiveTreatments: {
    ru: "Эксклюзивные процедуры",
    en: "Exclusive Treatments",
  },
  beautyProfessionals: {
    ru: "Профессионалы красоты",
    en: "Beauty Professionals",
  },
  clientReviews: {
    ru: "Что говорят наши клиенты",
    en: "What Our Clients Say",
  },
  bookAppointment: {
    ru: "Запишитесь на прием",
    en: "Book an Appointment",
  },

  // Contact
  ourSalon: {
    ru: "Наш центр",
    en: "Our Center",
  },
  phone: {
    ru: "Телефон",
    en: "Phone",
  },
  email: {
    ru: "Email",
    en: "Email",
  },
  address: {
    ru: "Адрес",
    en: "Address",
  },
  workingHours: {
    ru: "Часы работы",
    en: "Working Hours",
  },
  parking: {
    ru: "Бесплатная парковка у центра",
    en: "Free parking at the center",
  },
  schedule: {
    ru: "Пн-Сб: 10:00 - 20:00",
    en: "Mon-Sat: 10:00 - 20:00",
  },

  // Form
  yourName: {
    ru: "Ваше имя",
    en: "Your Name",
  },
  yourPhone: {
    ru: "Телефон",
    en: "Phone",
  },
  yourEmail: {
    ru: "Email",
    en: "Email",
  },
  selectService: {
    ru: "Выберите услугу",
    en: "Select Service",
  },
  message: {
    ru: "Сообщение",
    en: "Message",
  },
  sendRequest: {
    ru: "Отправить заявку",
    en: "Send Request",
  },
}

export const SERVICES_DATA: ServiceCategory[] = [
  {
    id: "massage",
    name: {
      ru: "МАССАЖ",
      en: "MASSAGE",
    },
    description: {
      ru: "Терапевтический, расслабляющий и лимфодренажный массаж от опытных специалистов",
      en: "Therapeutic, relaxing and lymphatic drainage massage from experienced specialists",
    },
    icon: "fas fa-spa",
    images: ["https://i.ytimg.com/vi/OrrLSXofG5M/maxresdefault.jpg", "https://www.spacethespa.com/wp-content/uploads/revslider/Indiranagar%20Slider/Banner-16.jpg"],
    videos: ['/video/1.mp4'],
    subcategories: [
      {
        id: "therapeutic",
        name: { ru: "Терапевтический", en: "Therapeutic" },
        images: ["https://www.zastavki.com/pictures/1920x1080/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_23.jpg"],
      },
      {
        id: "lymphatic",
        name: { ru: "Лимфодренажный", en: "Lymphatic Drainage" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "anticellulite",
        name: { ru: "Антицеллюлитный", en: "Anti-cellulite" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "sports",
        name: { ru: "Спортивный", en: "Sports" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "back",
        name: { ru: "Спина", en: "Back" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "back-legs",
        name: { ru: "Спина и ноги", en: "Back and Legs" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "legs",
        name: { ru: "Ноги", en: "Legs" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "hardware-cosmetology",
    name: {
      ru: "АППАРАТНАЯ КОСМЕТОЛОГИЯ",
      en: "HARDWARE COSMETOLOGY",
    },
    description: {
      ru: "Современные аппаратные процедуры для омоложения и коррекции",
      en: "Modern hardware procedures for rejuvenation and correction",
    },
    icon: "fas fa-leaf",
    images: ["https://www.zastavki.com/pictures/1920x1080/2018Animals___Cats_Large_gray_cat_with_a_surprised_look_123712_23.jpg"],
    subcategories: [
      {
        id: "hifu",
        name: { ru: "HifuSmasLifting", en: "HifuSmasLifting" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "photorejuvenation",
        name: { ru: "Фотоомоложение", en: "Photorejuvenation" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "couperose",
        name: { ru: "Профилактика купероза", en: "Couperose Prevention" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "pigmentation",
        name: { ru: "Профилактика гиперпигментации", en: "Hyperpigmentation Prevention" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "carbon-peeling",
        name: { ru: "Карбоновый пилинг", en: "Carbon Peeling" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "radiofrequency",
        name: { ru: "Радиочастота", en: "Radiofrequency" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "cavitation",
        name: { ru: "Ультразвуковая кавитация", en: "Ultrasonic Cavitation" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "skincare-cosmetology",
    name: {
      ru: "УХОДОВАЯ КОСМЕТОЛОГИЯ",
      en: "SKINCARE COSMETOLOGY",
    },
    description: {
      ru: "Профессиональный уход за лицом для всех типов кожи",
      en: "Professional facial care for all skin types",
    },
    icon: "fas fa-hand-sparkles",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "dermapen",
        name: { ru: "Дермапен", en: "Dermapen" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "chemical-peels",
        name: { ru: "Химические пилинги", en: "Chemical Peels" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "facial-cleansing",
        name: { ru: "Чистка лица", en: "Facial Cleansing" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "kobido-massage",
        name: { ru: "Массаж лица Кобидо", en: "Kobido Face Massage" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "lymphatic-face",
        name: { ru: "Массаж лица лимфодренажный", en: "Lymphatic Face Massage" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "thalgo-treatments",
        name: {
          ru: "Процедуры на косметике Thalgo",
          en: "Thalgo Cosmetic Treatments",
        },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "body-hardware",
    name: {
      ru: "АППАРАТНЫЕ ПРОЦЕДУРЫ ДЛЯ ТЕЛА",
      en: "HARDWARE BODY TREATMENTS",
    },
    description: {
      ru: "Современные технологии коррекции фигуры и омоложения тела",
      en: "Modern technologies for body contouring and rejuvenation",
    },
    icon: "fas fa-dumbbell",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "body-hifu",
        name: { ru: "HifuSmasLifting", en: "HifuSmasLifting" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "cavitation-vacuum",
        name: { ru: "Кавитация + вакуумный массаж", en: "Cavitation + Vacuum Massage" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "amplipulse",
        name: { ru: "Амплипульс терапия", en: "Amplipulse Therapy" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "electrophoresis",
        name: { ru: "Электрофорез", en: "Electrophoresis" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "hair-removal",
    name: {
      ru: "ЭПИЛЯЦИЯ И ДЕПИЛЯЦИЯ",
      en: "HAIR REMOVAL",
    },
    description: {
      ru: "Лазерная эпиляция и депиляция воском для всех зон",
      en: "Laser hair removal and wax depilation for all areas",
    },
    icon: "fas fa-magic",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "laser-removal",
        name: { ru: "Лазерная эпиляция", en: "Laser Hair Removal" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "wax-removal",
        name: { ru: "Депиляция воском", en: "Wax Depilation" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "hairdressing",
    name: {
      ru: "ПАРИКМАХЕРСКИЕ УСЛУГИ",
      en: "HAIRDRESSING SERVICES",
    },
    description: {
      ru: "Стрижки, окрашивание и уходовые процедуры для волос",
      en: "Haircuts, coloring and hair care treatments",
    },
    icon: "fas fa-cut",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "hair-coloring",
        name: { ru: "Окрашивание волос", en: "Hair Coloring" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "highlighting",
        name: { ru: "Мелирование", en: "Highlighting" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "haircut",
        name: { ru: "Стрижка", en: "Haircut" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "styling",
        name: { ru: "Укладка", en: "Styling" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "hair-treatment",
        name: { ru: "Лечение волос Dr.Sorbi", en: "Dr.Sorbi Hair Treatment" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "nail-service",
    name: {
      ru: "НОГТЕВОЙ СЕРВИС",
      en: "NAIL SERVICE",
    },
    description: {
      ru: "Маникюр, педикюр и дизайн ногтей",
      en: "Manicure, pedicure and nail design",
    },
    icon: "fas fa-hand-sparkles",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "manicure-polish",
        name: { ru: "Маникюр + Polish", en: "Manicure + Polish" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "manicure-gel",
        name: { ru: "Маникюр + Gel", en: "Manicure + Gel" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "nail-extension",
        name: { ru: "Наращивание", en: "Nail Extension" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "manicure-strengthening",
        name: { ru: "Маникюр с укреплением", en: "Manicure with Strengthening" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "pedicure-polish",
        name: { ru: "Педикюр + Polish", en: "Pedicure + Polish" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "pedicure-gel",
        name: { ru: "Педикюр + Gel", en: "Pedicure + Gel" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "brows-lashes",
    name: {
      ru: "БРОВИ И РЕСНИЦЫ",
      en: "BROWS & LASHES",
    },
    description: {
      ru: "Окрашивание и ламинирование бровей и ресниц",
      en: "Brow and lash tinting and lamination",
    },
    icon: "fas fa-eye",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "brow-lash-tinting",
        name: { ru: "Окрашивание бровей и ресниц", en: "Brow and Lash Tinting" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "brow-lash-lamination",
        name: { ru: "Ламинирование бровей и ресниц", en: "Brow and Lash Lamination" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
  {
    id: "permanent-makeup",
    name: {
      ru: "ПЕРМАНЕНТНЫЙ МАКИЯЖ",
      en: "PERMANENT MAKEUP",
    },
    description: {
      ru: "Татуаж бровей, губ и межресничного пространства",
      en: "Eyebrow, lip and eyeliner tattooing",
    },
    icon: "fas fa-paint-brush",
    images: ["/placeholder.svg?height=300&width=400"],
    subcategories: [
      {
        id: "permanent-brows",
        name: { ru: "Брови", en: "Eyebrows" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "permanent-eyeliner",
        name: { ru: "Межресничка", en: "Eyeliner" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "permanent-lips",
        name: { ru: "Губы", en: "Lips" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
      {
        id: "tattoo-removal",
        name: { ru: "Удаление татуажа", en: "Tattoo Removal" },
        images: ["/placeholder.svg?height=300&width=400"],
      },
    ],
  },
]
