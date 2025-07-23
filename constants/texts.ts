import type { TextContent, ServiceCategory } from "../types"

export const TEXTS: Record<string, TextContent> = {

  selectCategory: {
    en: "Select category",
    ru: "Выберете категорию"
  },

  categoryList: {
    en: 'Categories list',
    ru: 'Список категорий'
  },

  closeText: {
    ru: 'Закрыть форму бронирования, вернуться на сайт',
    en: 'Close booking form and back to site'
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
    ru: 'Услуг',
    en: "Services"
  },
  backToCategories: {
    ru: "",
    en: ""
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
    ru: "Центр красоты и здоровья",
    en: "Beauty & Healthcare Center",
  },
  heroDescription: {
    ru: "Профессиональный уход за телом и лицом в Orihuela Costa",
    en: "Professional body and face care in Orihuela Costa",
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
    ru: "Где мы находимсч",
    en: "Find us quick",
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
    ru: "Пн-Пт: 10:00 - 19:00, Сб 10:00 - 15:00",
    en: "Mon-Fri: 10:00 - 19:00 Satturday 10:00 - 15:00",
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
    "id": "massage",
    "name": {
      "ru": "МАССАЖ",
      "en": "MASSAGE"
    },
    "description": {
      "ru": "Терапевтический, расслабляющий и лимфодренажный массаж от опытных специалистов",
      "en": "Therapeutic, relaxing and lymphatic drainage massage from experienced specialists"
    },
    "icon": "fas fa-spa",
    "subcategories": [
      {
        "id": "therapeutic",
        "name": {
          "ru": "Терапевтический",
          "en": "Therapeutic"
        },
        "description": {
          "ru": "Терапевтический массаж — это эффективный метод лечения и профилактики различных заболеваний опорно-двигательного аппарата, нервной и мышечной систем. В отличие от расслабляющего массажа, терапевтический направлен на устранение болевых синдромов, улучшение кровообращения, снятие мышечных спазмов и восстановление подвижности.",
          "en": "Therapeutic massage is a specialized technique focused on treating musculoskeletal issues, relieving chronic pain, and improving mobility. Using targeted pressure and medical knowledge, it helps rehabilitate injuries, reduce inflammation, and restore normal function to affected areas."
        },
        "videos": [
          "/video/terapeutic_massage1.mp4"
        ]
      },
      {
        "id": "vacuum",
        "name": {
          "ru": "Вакуумный массаж",
          "en": "Vacuum Massage"
        },
        "description": {
          "ru": "Вакуумный массаж — это эффективная методика, направленная на улучшение лимфо- и кровообращения, ускорение обменных процессов и выведение шлаков. Он помогает в борьбе с целлюлитом, улучшает тонус кожи, снижает отёчность и способствует общему оздоровлению организма.",
          "en": "Vacuum massage is an effective technique aimed at improving lymphatic and blood circulation, speeding up metabolism, and detoxifying the body. It helps fight cellulite, improves skin tone, reduces swelling, and promotes overall health."
        },
        "videos": [
          "/video/vacuum_massage1.mp4"
        ]
      },
      {
        "id": "relaxing",
        "name": {
          "ru": "Расслабляющий массаж",
          "en": "Relaxing massage"
        },
        "description": {
          "ru": "Расслабляющий массаж снимает физическое и эмоциональное напряжение, улучшает качество сна и общее самочувствие. Техника включает плавные поглаживающие движения, мягкое разминание мышц и ароматерапию для глубокой релаксации.",
          "en": "A soothing full-body treatment that melts away stress and tension using long, flowing strokes and gentle kneading. Promotes deep relaxation, improves sleep quality, and creates overall sense of wellbeing with optional aromatherapy enhancements."
        },
        "videos": [
          "/video/relaxing_massage1.mp4",
          "/video/relaxing_massage2.mp4"
        ]
      },
      {
        "id": "lymphatic",
        "name": {
          "ru": "Лимфодренажный",
          "en": "Lymphatic Drainage"
        },
        "description": {
          "ru": "Лимфодренажный массаж стимулирует циркуляцию лимфы, ускоряет выведение токсинов и избыточной жидкости из тканей. Особенно эффективен при отёках, после операций, для укрепления иммунитета и детоксикации организма.",
          "en": "Gentle rhythmic technique that stimulates lymph flow to eliminate toxins, reduce swelling, and boost immune function. Ideal for post-surgical recovery, edema management, and detoxification programs."
        }
      },
      {
        "id": "anticellulite",
        "name": {
          "ru": "Антицеллюлитный",
          "en": "Anti-cellulite"
        },
        "description": {
          "ru": "Интенсивный массаж, разрушающий жировые отложения и улучшающий микроциркуляцию в проблемных зонах. Комбинация глубокого разминания, вакуумных и роликовых техник для уменьшения «апельсиновой корки» и коррекции контуров тела.",
          "en": "Deep tissue technique targeting cellulite deposits through specialized kneading, vacuum, and rolling methods. Improves skin texture, breaks down fat clusters, and enhances blood flow to problem areas for visible contouring results."
        }
      },
      {
        "id": "sports",
        "name": {
          "ru": "Спортивный",
          "en": "Sports"
        },
        "description": {
          "ru": "Специализированный массаж для спортсменов: повышает выносливость перед тренировкой, ускоряет восстановление после нагрузок, предотвращает травмы. Фокусируется на проработке мышц, участвующих в конкретном виде спорта.",
          "en": "Performance-focused treatment that prepares muscles for activity, prevents injuries, and enhances recovery. Incorporates dynamic stretching, deep tissue work, and targeted techniques adapted to specific sports disciplines."
        }
      },
      {
        "id": "back",
        "name": {
          "ru": "Спина",
          "en": "Back"
        },
        "description": {
          "ru": "Глубокая проработка мышц спины для снятия напряжения в позвоночнике, устранения болей в пояснице и между лопатками. Включает техники миофасциального релиза и работу с триггерными точками.",
          "en": "Concentrated treatment for the back muscles, relieving spinal tension and targeting common pain areas like lower back and shoulder blades. Uses myofascial release and trigger point therapy for lasting relief."
        }
      },
      {
        "id": "back-legs",
        "name": {
          "ru": "Спина и ноги",
          "en": "Back and Legs"
        },
        "description": {
          "ru": "Комплексная проработка спины и ног для снятия усталости, улучшения осанки и уменьшения отёчности нижних конечностей. Особенно рекомендован при сидячем образе жизни и повышенных нагрузках на ноги.",
          "en": "Combination therapy addressing back strain and leg fatigue simultaneously. Ideal for desk workers and active individuals, it improves posture, reduces swelling in lower extremities, and enhances mobility."
        }
      },
      {
        "id": "legs",
        "name": {
          "ru": "Ноги",
          "en": "Legs"
        },
        "description": {
          "ru": "Специализированный массаж для снятия тяжести в ногах, улучшения венозного оттока и профилактики варикоза. Включает дренажные техники, проработку икроножных мышц и стоп.",
          "en": "Targeted treatment for tired, heavy legs that improves venous circulation and reduces swelling. Includes specialized techniques for calves, thighs, and feet to combat fatigue and prevent varicose veins."
        }
      }
    ]
  },
  {
    "id": "hardware-cosmetology",
    "name": {
      "ru": "АППАРАТНЫЕ ПРОЦЕДУРЫ ДЛЯ ТЕЛА",
      "en": "HARDWARE COSMETOLOGY"
    },
    "description": {
      "ru": "Современные аппаратные процедуры для омоложения и коррекции",
      "en": "Modern hardware procedures for rejuvenation and correction"
    },
    "icon": "fas fa-leaf",
    "subcategories": [
      {
        "id": "hifu",
        "name": {
          "ru": "HifuSmasLifting",
          "en": "HifuSmasLifting"
        },
        "description": {
          "ru": "Безинвазивный лифтинг с двойным действием: HIFU воздействует на поверхностные слои кожи, а SMAS-технология подтягивает глубокие мышечные структуры. Результат — выраженный омолаживающий эффект без реабилитации.",
          "en": "Non-surgical facelift combining HIFU for skin tightening and SMAS technology for deep structural lifting. Stimulates collagen production for natural-looking rejuvenation with zero downtime."
        },
        "videos": [
          "/video/HifuSmasLifting1.mp4"
        ]
      },
      {
        "id": "photorejuvenation",
        "name": {
          "ru": "Фотоомоложение",
          "en": "Photorejuvenation"
        },
        "description": {
          "ru": "Лечение IPL-светом устраняет пигментацию, сосудистые сеточки и признаки фотостарения. Активизирует синтез коллагена, выравнивает тон и текстуру кожи. Без повреждения поверхностного слоя.",
          "en": "IPL technology targets pigmentation, broken capillaries, and sun damage while stimulating collagen. Improves skin tone and texture with minimal discomfort and no surface damage."
        }
      },
      {
        "id": "pigmentation",
        "name": {
          "ru": "Профилактика гиперпигментации",
          "en": "Hyperpigmentation Prevention"
        },
        "description": {
          "ru": "Программа предупреждения появления пигментных пятен с помощью лазерных технологий и депигментирующих препаратов. Осветляет существующие пятна, защищает от УФ-повреждений.",
          "en": "Proactive approach to prevent dark spots using laser treatments and depigmenting agents. Targets existing discoloration while providing UV protection for future prevention."
        }
      },
      {
        "id": "carbon-peeling",
        "name": {
          "ru": "Карбоновый пилинг",
          "en": "Carbon Peeling"
        },
        "description": {
          "ru": "Бесконтактная лазерная процедура: углеродная маска поглощает лазерное излучение, удаляя загрязнения и омертвевшие клетки. Сужает поры, осветляет тон кожи, устраняет акне.",
          "en": "Revolutionary laser treatment where carbon lotion absorbs laser energy to exfoliate deeply. Minimizes pores, treats acne, and brightens complexion with no downtime."
        },
        "videos": [
          "/video/1.mp4",
          "/video/carbon_peeling.mp4",
          "/video/carbon_peel_interview.mp4"
        ]
      },
      {
        "id": "radiofrequency",
        "name": {
          "ru": "Радиочастота",
          "en": "Radiofrequency"
        },
        "description": {
          "ru": "Глубокий прогрев тканей радиочастотами стимулирует неоколлагенез и липолиза. Подтягивает овал лица, уменьшает морщины, корректирует контуры тела и локальные жировые отложения.",
          "en": "Safe thermal energy tightens skin by stimulating collagen and elastin production. Effective for facial contouring, wrinkle reduction, and body sculpting through controlled tissue heating."
        }
      },
      {
        "id": "cavitation",
        "name": {
          "ru": "Ультразвуковая кавитация",
          "en": "Ultrasonic Cavitation"
        },
        "description": {
          "ru": "Безоперационная коррекция фигуры за счёт разрушения жировых клеток низкочастотным ультразвуком. Особенно эффективна для живота, бёдер, зоны «галифе». Требуется курс процедур.",
          "en": "Non-invasive fat reduction using ultrasonic waves to disrupt fat cell membranes. Targets stubborn areas like abdomen and thighs, with results improving over multiple sessions."
        },
        "videos": [
          "/video/ultrasonic_cavitation1.mp4"
        ]
      }
    ]
  },

  {
    "id": "hardware-cosmetology-face",
    "name": {
      "ru": "АППАРАТНАЯ ОМОЛАЖИВАЮЩАЯ КОСМЕТОЛОГИЯ",
      "en": "ANTI-AGE HARDWARE COSMETOLOGY"
    },
    "description": {
      "ru": "Современные аппаратные процедуры для омоложения и коррекции",
      "en": "Modern hardware procedures for rejuvenation and correction"
    },
    "icon": "fas fa-leaf",
    "subcategories": [
      {
        "id": "hifu-face",
        "name": {
          "ru": "HifuSmasLifting",
          "en": "HifuSmasLifting"
        },
        "description": {
          "ru": "Безинвазивный лифтинг с двойным действием: HIFU воздействует на поверхностные слои кожи, а SMAS-технология подтягивает глубокие мышечные структуры. Результат — выраженный омолаживающий эффект без реабилитации.",
          "en": "Non-surgical facelift combining HIFU for skin tightening and SMAS technology for deep structural lifting. Stimulates collagen production for natural-looking rejuvenation with zero downtime."
        },
        "videos": [
          "/video/HifuSmasLifting1.mp4"
        ]
      },
      {
        "id": "photorejuvenation",
        "name": {
          "ru": "Фотоомоложение",
          "en": "Photorejuvenation"
        },
        "description": {
          "ru": "Лечение IPL-светом устраняет пигментацию, сосудистые сеточки и признаки фотостарения. Активизирует синтез коллагена, выравнивает тон и текстуру кожи. Без повреждения поверхностного слоя.",
          "en": "IPL technology targets pigmentation, broken capillaries, and sun damage while stimulating collagen. Improves skin tone and texture with minimal discomfort and no surface damage."
        }
      },
      {
        "id": "couperose",
        "name": {
          "ru": "Профилактика купероза",
          "en": "Couperose Prevention"
        },
        "description": {
          "ru": "Комплекс процедур для укрепления сосудистых стенок и снижения риска появления сосудистых звёздочек. Включает лазерную коагуляцию, криотерапию и специализированный уход.",
          "en": "Specialized program to strengthen capillary walls and reduce redness. Combines laser treatments, cryotherapy, and vascular-strengthening products for resilient, even-toned skin."
        },
        "videos": [
          "/video/cuperose_prevention1.mp4"
        ]
      },
      {
        "id": "pigmentation",
        "name": {
          "ru": "Профилактика гиперпигментации",
          "en": "Hyperpigmentation Prevention"
        },
        "description": {
          "ru": "Программа предупреждения появления пигментных пятен с помощью лазерных технологий и депигментирующих препаратов. Осветляет существующие пятна, защищает от УФ-повреждений.",
          "en": "Proactive approach to prevent dark spots using laser treatments and depigmenting agents. Targets existing discoloration while providing UV protection for future prevention."
        }
      },
      {
        "id": "carbon-peeling",
        "name": {
          "ru": "Карбоновый пилинг",
          "en": "Carbon Peeling"
        },
        "description": {
          "ru": "Бесконтактная лазерная процедура: углеродная маска поглощает лазерное излучение, удаляя загрязнения и омертвевшие клетки. Сужает поры, осветляет тон кожи, устраняет акне.",
          "en": "Revolutionary laser treatment where carbon lotion absorbs laser energy to exfoliate deeply. Minimizes pores, treats acne, and brightens complexion with no downtime."
        },
        "videos": [
          "/video/1.mp4",
          "/video/carbon_peeling.mp4",
          "/video/carbon_peel_interview.mp4"
        ]
      },
      {
        "id": "radiofrequency",
        "name": {
          "ru": "Радиочастота",
          "en": "Radiofrequency"
        },
        "description": {
          "ru": "Глубокий прогрев тканей радиочастотами стимулирует неоколлагенез и липолиза. Подтягивает овал лица, уменьшает морщины, корректирует контуры тела и локальные жировые отложения.",
          "en": "Safe thermal energy tightens skin by stimulating collagen and elastin production. Effective for facial contouring, wrinkle reduction, and body sculpting through controlled tissue heating."
        }
      },
      {
        "id": "cavitation",
        "name": {
          "ru": "Ультразвуковая кавитация",
          "en": "Ultrasonic Cavitation"
        },
        "description": {
          "ru": "Безоперационная коррекция фигуры за счёт разрушения жировых клеток низкочастотным ультразвуком. Особенно эффективна для живота, бёдер, зоны «галифе». Требуется курс процедур.",
          "en": "Non-invasive fat reduction using ultrasonic waves to disrupt fat cell membranes. Targets stubborn areas like abdomen and thighs, with results improving over multiple sessions."
        },
        "videos": [
          "/video/ultrasonic_cavitation1.mp4"
        ]
      }
    ]
  },
  {
    "id": "skincare-cosmetology",
    "name": {
      "ru": "УХОДОВАЯ КОСМЕТОЛОГИЯ",
      "en": "SKINCARE COSMETOLOGY"
    },
    "description": {
      "ru": "Профессиональный уход за лицом для всех типов кожи",
      "en": "Professional facial care for all skin types"
    },
    "icon": "fas fa-hand-sparkles",
    "subcategories": [
      {
        "id": "dermapen",
        "name": {
          "ru": "Дермапен",
          "en": "Dermapen"
        },
        "description": {
          "ru": "Микроигольчатый RF-лифтинг создаёт тысячи микроскопических каналов для усиленного проникновения активных веществ. Запускает процессы регенерации, борется с рубцами и стриями.",
          "en": "Microneedling device creates controlled micro-injuries to trigger skin regeneration. Enhances product absorption, reduces scars, and improves texture with minimal downtime."
        },
        "videos": [
          "/video/dermapen1.mp4",
          "/video/dermapen2.mp4"
        ]
      },
      {
        "id": "chemical-peels",
        "name": {
          "ru": "Химические пилинги",
          "en": "Chemical Peels"
        },
        "description": {
          "ru": "Контролируемое повреждение кожи кислотами для удаления ороговевшего слоя. Решает проблемы акне, гиперпигментации, постакне. Индивидуальный подбор кислот по типу кожи.",
          "en": "Application of carefully selected acids to exfoliate skin layers. Customized formulas address acne, pigmentation, and aging concerns for renewed, radiant complexion."
        },
        "videos": [
          "/video/chem_peeling1.mp4"
        ]
      },
      {
        "id": "facial-cleansing",
        "name": {
          "ru": "Чистка лица",
          "en": "Facial Cleansing"
        },
        "description": {
          "ru": "Профессиональная чистка лица: комбинирует механическое удаление комедонов, ультразвуковую обработку и ферментный пилинг. Завершается успокаивающей маской и специализированным уходом.",
          "en": "Deep pore cleansing combining extraction, ultrasonic exfoliation, and enzymatic treatments. Removes impurities, blackheads, and dead cells for clear, balanced skin."
        },
        "videos": [
          "/video/face_cleansing.mp4"
        ]
      },
      {
        "id": "kobido-massage",
        "name": {
          "ru": "Массаж лица Кобидо",
          "en": "Kobido Face Massage"
        },
        "description": {
          "ru": "Японская техника «быстрого массажа» с лимфодренажным эффектом. Устраняет отёчность, моделирует овал лица, разглаживает мимические морщины за счёт интенсивных ритмичных движений.",
          "en": "Ancient Japanese technique featuring rapid percussive movements. Lifts facial contours, reduces puffiness, and smooths wrinkles through intensive muscle stimulation."
        },
        "videos": [
          "/video/kobido_massage1.MP4",
          "/video/kobido_massage2.mp4",
          "/video/kobido_massage3.mp4"
        ]
      },
      {
        "id": "spirulina-mask",
        "name": {
          "ru": "Увлажняющая маска Spirulina",
          "en": "Spirulina Hydrating Mask"
        },
        "description": {
          "ru": "Увлажняющая маска на основе спирулины глубоко питает кожу, восстанавливает водный баланс, улучшает цвет лица и придаёт свежесть. Идеально подходит для тусклой, обезвоженной и уставшей кожи. Благодаря высокому содержанию антиоксидантов и витаминов спирулина способствует регенерации кожи и замедляет процессы старения.",
          "en": "The Spirulina Hydrating Mask deeply nourishes the skin, restores moisture balance, improves complexion, and brings a refreshed look. Perfect for dull, dehydrated, and tired skin. Rich in antioxidants and vitamins, spirulina supports skin regeneration and slows down aging processes."
        },
        "videos": [
          "/video/spirulina_mask1.mp4"
        ]
      },
      {
        "id": "lymphatic-face",
        "name": {
          "ru": "Массаж лица лимфодренажный",
          "en": "Lymphatic Face Massage"
        },
        "description": {
          "ru": "Мягкая техника стимуляции лимфотока для уменьшения отёчности и детоксикации кожи. Улучшает контуры лица, уменьшает «мешки» под глазами, придаёт сияние.",
          "en": "Gentle technique that activates lymphatic circulation to de-puff and detoxify. Reduces facial swelling, refines contours, and enhances natural radiance."
        }
      },
      {
        "id": "thalgo-treatments",
        "name": {
          "ru": "Процедуры на косметике Thalgo",
          "en": "Thalgo Cosmetic Treatments"
        },
        "description": {
          "ru": "Морская биотерапия с использованием концентратов водорослей и морских минералов. Индивидуальные программы для омоложения, увлажнения, лифтинга и решения специфических проблем кожи.",
          "en": "Marine-based therapies harnessing algae and seawater minerals. Customized programs target hydration, firming, brightening, and anti-aging using premium French skincare."
        },
        "videos": [
          "/video/thalgo_nutrient.mp4",
          "/video/thaigo_whiting1.mp4",
          "/video/thalgo_hidratation.mp4"
        ]
      }
    ]
  },
  {
    "id": "body-hardware",
    "name": {
      "ru": "АППАРАТНЫЕ ПРОЦЕДУРЫ ДЛЯ ТЕЛА",
      "en": "HARDWARE BODY TREATMENTS"
    },
    "description": {
      "ru": "Современные технологии коррекции фигуры и омоложения тела",
      "en": "Modern technologies for body contouring and rejuvenation"
    },
    "icon": "fas fa-dumbbell",
    "subcategories": [
      {
        "id": "body-hifu",
        "name": {
          "ru": "HifuSmasLifting",
          "en": "HifuSmasLifting"
        },
        "description": {
          "ru": "Ультразвуковой лифтинг для тела: подтягивает кожу на животе, бёдрах, руках. Укрепляет соединительную ткань, стимулирует неоколлагенез. Результат — более упругая и подтянутая кожа.",
          "en": "Ultrasound technology tightens loose skin on body areas like abdomen and arms. Stimulates collagen in deeper layers for improved firmness without surgery."
        }
      },
      {
        "id": "cavitation-vacuum",
        "name": {
          "ru": "Кавитация + вакуумный массаж",
          "en": "Cavitation + Vacuum Massage"
        },
        "description": {
          "ru": "Комбинированная процедура: ультразвук разрушает жировые клетки, а вакуумный массаж ускоряет выведение продуктов распада и моделирует контуры тела. Усиливает эффект на 40%.",
          "en": "Powerful combination: cavitation breaks down fat cells while vacuum massage enhances lymphatic drainage. Synergistic approach for optimal body sculpting results."
        }
      },
      {
        "id": "amplipulse",
        "name": {
          "ru": "Амплипульс терапия",
          "en": "Amplipulse Therapy"
        },
        "description": {
          "ru": "Физиотерапевтическая методика с применением синусоидальных токов. Снимает боли в спине и суставах, уменьшает воспаление, улучшает трофику тканей. Безболезненна и безопасна.",
          "en": "Electrotherapy using modulated currents to relieve pain, reduce inflammation, and improve tissue nutrition. Effective for musculoskeletal rehabilitation without medication."
        },
        "videos": [
          "/video/amplipulse_therapy1.mp4"
        ]
      },
      {
        "id": "electrophoresis",
        "name": {
          "ru": "Электрофорез",
          "en": "Electrophoresis"
        },
        "description": {
          "ru": "Безинъекционное введение лечебных препаратов через кожу с помощью гальванического тока. Усиливает действие лекарств, снимает отёки, ускоряет восстановление после травм.",
          "en": "Non-invasive drug delivery technique using electric current. Enhances absorption of therapeutic substances for targeted treatment of inflammation and pain."
        }
      }
    ]
  },
  {
    "id": "hair-removal",
    "name": {
      "ru": "ЭПИЛЯЦИЯ И ДЕПИЛЯЦИЯ",
      "en": "HAIR REMOVAL"
    },
    "description": {
      "ru": "Лазерная эпиляция и депиляция воском для всех зон",
      "en": "Laser hair removal and wax depilation for all areas"
    },
    "icon": "fas fa-magic",
    "subcategories": [
      {
        "id": "laser-removal",
        "name": {
          "ru": "Лазерная эпиляция",
          "en": "Laser Hair Removal"
        },
        "description": {
          "ru": "Диодный лазер разрушает волосяные фолликулы без повреждения кожи. Навсегда уменьшает рост волос на лице и теле. Эффективен для всех фототипов кожи.",
          "en": "Diode laser targets hair follicles for permanent reduction. Safe for all skin types, with sessions adapted to hair growth cycles for optimal results."
        },
        "videos": [
          "/video/laser_legs1.mp4",
          "/video/laser_legs2.mp4"
        ]
      },
      {
        "id": "wax-removal",
        "name": {
          "ru": "Депиляция воском",
          "en": "Wax Depilation"
        },
        "description": {
          "ru": "Традиционная восковая эпиляция с использованием гипоаллергенных составов. Обеспечивает гладкость кожи до 4 недель. Доступны горячий и холодный воск для разных зон.",
          "en": "Professional hair removal with hypoallergenic waxes for smooth skin lasting weeks. Customized hot/cold wax techniques for sensitive areas and hair types."
        }
      },
      {
        "id": "face-epil",
        "name": {
          "en": "Face depilation",
          "ru": "Эпиляция волос на лице"
        },
        "description": {
          "ru": "Точное удаление нежелательных волос на лице: надгубная зона, подбородок, бакенбарды. Используются щадящие методики, минимизирующие раздражение.",
          "en": "Precise removal of facial hair on upper lip, chin, and sideburns. Gentle techniques minimize irritation while ensuring smooth, hair-free skin."
        },
        "videos": [
          "/video/face_epil1.mp4",
          "/video/face_epil2.mp4"
        ]
      }
    ]
  },
  {
    "id": "hairdressing",
    "name": {
      "ru": "ПАРИКМАХЕРСКИЕ УСЛУГИ",
      "en": "HAIRDRESSING SERVICES"
    },
    "description": {
      "ru": "Стрижки, окрашивание и уходовые процедуры для волос",
      "en": "Haircuts, coloring and hair care treatments"
    },
    "icon": "fas fa-cut",
    "images": [
      "/placeholder.svg?height=300&width=400"
    ],
    "subcategories": [
      {
        "id": "hair-coloring",
        "name": {
          "ru": "Окрашивание волос",
          "en": "Hair Coloring"
        },
        "description": {
          "ru": "Профессиональное окрашивание с индивидуальным подбором оттенка и техники: однотонное, мелирование, колорирование, блондирование. Используются безаммиачные краски премиальных марок.",
          "en": "Custom color services including full coverage, highlights, balayage, and blonding. Premium ammonia-free products protect hair integrity while delivering vibrant results."
        },
        "videos": [
          "/video/hair_coloring1.mp4",
          "/video/total_bloond_review.mp4",
          "/video/center_coloring.mp4"
        ]
      },
      {
        "id": "highlighting",
        "name": {
          "ru": "Мелирование",
          "en": "Highlighting"
        },
        "description": {
          "ru": "Создание естественных переливов цвета с помощью фольги или безаппликаторных техник. Добавляет объём, игру света и глубину натуральному тону волос.",
          "en": "Strategic lightening techniques create sun-kissed dimension. Foil, balayage, and babylights options for natural-looking brightness and movement."
        },
        "videos": [
          "/video/highlighting.mp4"
        ]
      },
      {
        "id": "haircut",
        "name": {
          "ru": "Стрижка",
          "en": "Haircut"
        },
        "description": {
          "ru": "Точные женские и мужские стрижки с учётом структуры волос, формы лица и стиля жизни. От классических каре до креативных асимметричных форм.",
          "en": "Precision cuts tailored to face shape, hair texture, and lifestyle. From classic bobs to modern layered styles, executed with professional techniques."
        },
        "videos": [
          "/video/haircut_woman1.mp4",
          "/video/haircut_woman2.mp4",
          "/video/haircut_man.mp4",
          "/video/haircut_man1.mp4"
        ]
      },
      {
        "id": "styling",
        "name": {
          "ru": "Укладка",
          "en": "Styling"
        },
        "description": {
          "ru": "Создание идеальных локонов, гладких укладок или текстурных причёсок для особых случаев. С использованием профессиональных термоинструментов и стайлинговых продуктов.",
          "en": "Special occasion or everyday styling: voluminous blowouts, sleek straight looks, or textured waves. Professional tools and products ensure long-lasting perfection."
        },
        "videos": [
          "/video/hair-styling1.mp4",
          "/video/hair_styling2.mp4",
          "/video/hair_styling3.mp4"
        ]
      },
      {
        "id": "hair-treatment",
        "name": {
          "ru": "Лечение волос Dr.Sorbi",
          "en": "Dr.Sorbi Hair Treatment"
        },
        "description": {
          "ru": "Интенсивное восстановление повреждённых волос кератиновыми и белковыми комплексами. Устраняет ломкость, секущиеся кончики, возвращает эластичность и блеск.",
          "en": "Medical-grade treatments repair damage from coloring and heat. Keratin and protein infusions restore strength, shine, and manageability to compromised hair."
        },
        "videos": [
          "/video/hair_healing1.mp4",
          "/video/hair_healing2.mp4"
        ]
      }
    ]
  },
  {
    "id": "nail-service",
    "name": {
      "ru": "НОГТЕВОЙ СЕРВИС",
      "en": "NAIL SERVICE"
    },
    "description": {
      "ru": "Маникюр и педикюр с покрытием и дизайном",
      "en": "Manicure, pedicure and nail design"
    },
    "icon": "fas fa-hand-sparkles",
    "subcategories": [
      {
        "id": "manicure-polish",
        "name": {
          "ru": "Маникюр + Polish",
          "en": "Manicure + Polish"
        },
        "description": {
          "ru": "Аппаратный или комбинированный маникюр с покрытием обычным лаком. Включает обработку кутикулы, придание формы ногтям, массаж рук и базовый дизайн.",
          "en": "Cuticle care, nail shaping, hand massage, and application of regular polish. Classic treatment for natural nails with optional simple nail art."
        }
      },
      {
        "id": "manicure-gel",
        "name": {
          "ru": "Маникюр + Gel",
          "en": "Manicure + Gel"
        },
        "description": {
          "ru": "Гигиеническая обработка ногтей с нанесением стойкого гель-лака. Покрытие держится до 3 недель, сохраняя безупречный вид. Доступны все виды дизайна.",
          "en": "Long-lasting gel polish manicure with chip-free wear up to 3 weeks. Includes cuticle work, nail prep, and creative design options."
        }
      },
      {
        "id": "nail-extension",
        "name": {
          "ru": "Наращивание",
          "en": "Nail Extension"
        },
        "description": {
          "ru": "Создание идеальной длины и формы с помощью акрила, геля или полигеля. Коррекция каждые 3-4 недели. Возможность выбора формы: миндаль, квадрат, кофеин.",
          "en": "Creating length and shape with acrylic, hard gel, or polygel. Custom shapes (almond, square, coffin) with fills every 3-4 weeks for maintenance."
        }
      },
      {
        "id": "manicure-strengthening",
        "name": {
          "ru": "Маникюр с укреплением",
          "en": "Manicure with Strengthening"
        },
        "description": {
          "ru": "Процедура для ломких ногтей с использованием кератиновых пропиток и биогеля. Восстанавливает структуру ногтевой пластины, предотвращает расслоение.",
          "en": "Therapeutic treatment for weak nails featuring keratin infusions and biogel overlay. Strengthens natural nails while providing protective shine."
        }
      },
      {
        "id": "pedicure-polish",
        "name": {
          "ru": "Педикюр + Polish",
          "en": "Pedicure + Polish"
        },
        "description": {
          "ru": "Комплексный уход за стопами: удаление огрубевшей кожи, обработка кутикулы, массаж с кремом и покрытие лаком. Особое внимание зонам пяток и пальцев.",
          "en": "Medical-grade foot care: callus removal, cuticle treatment, exfoliation, massage, and polish application. Focus on heel and nail health."
        },
        "videos": [
          "/video/pedicure1.mp4"
        ]
      },
      {
        "id": "pedicure-gel",
        "name": {
          "ru": "Педикюр + Gel",
          "en": "Pedicure + Gel"
        },
        "description": {
          "ru": "SPA-педикюр с долговременным гель-покрытием. Включает ванночку, аппаратную обработку, парафинотерапию и массаж. Результат — ухоженные стопы на 4 недели.",
          "en": "Luxury pedicure featuring gel polish that lasts weeks. Includes soak, exfoliation, callus removal, mask, massage, and paraffin treatment."
        },
      }
    ]
  },
  {
    "id": "brows-lashes",
    "name": {
      "ru": "БРОВИ И РЕСНИЦЫ",
      "en": "BROWS & LASHES"
    },
    "description": {
      "ru": "Окрашивание и ламинирование бровей и ресниц",
      "en": "Brow and lash tinting and lamination"
    },
    "icon": "fas fa-eye",
    "subcategories": [
      {
        "id": "brow-lash-tinting",
        "name": {
          "ru": "Окрашивание бровей и ресниц",
          "en": "Brow and Lash Tinting"
        },
        "description": {
          "ru": "Придание насыщенного оттенка бровям и ресницам с помощью гипоаллергенной краски. Эффект до 6 недель: визуально гуще, ярче, выразительнее.",
          "en": "Semi-permanent color enhances definition of brows and lashes. Lasts 4-6 weeks, creating fuller appearance without daily makeup."
        }
      },
      {
        "id": "brow-lash-lamination",
        "name": {
          "ru": "Ламинирование бровей и ресниц",
          "en": "Brow and Lash Lamination"
        },
        "description": {
          "ru": "«Химическая укладка»: придаёт бровям идеальную форму на 6-8 недель, а ресницам — эффект завивки. Плюс питательный уход и окрашивание.",
          "en": "Perming treatment for brows/lashes: sets shape for weeks. Brows stay groomed, lashes gain curl and length. Includes nourishing boost."
        },
        "images": [
          "/img/lamination1.jpg"
        ],
        "videos": [
          "/video/lamination.mp4"
        ]
      },
      {
        "id": "lashes-extension",
        "name": {
          "en": "Lashes extension",
          "ru": "Наращивание ресниц"
        },
        "description": {
          "ru": "Объёмное, поресничное или гибридное наращивание ресниц из искусственного шелка. Индивидуальный подбор длины, изгиба и густоты. Держится 3-4 недели.",
          "en": "Custom lash extensions applied individually. Choose volume, length, and curl for natural or dramatic effect. Refills every 3-4 weeks."
        },
        "videos": [
          "/video/ext_lashes1.mp4"
        ]
      }
    ]
  },
  {
    "id": "permanent-makeup",
    "name": {
      "ru": "ПЕРМАНЕНТНЫЙ МАКИЯЖ",
      "en": "PERMANENT MAKEUP"
    },
    "description": {
      "ru": "Татуаж бровей, губ и межресничного пространства",
      "en": "Eyebrow, lip and eyeliner tattooing"
    },
    "icon": "fas fa-paint-brush",
    "subcategories": [
      {
        "id": "permanent-brows",
        "name": {
          "ru": "Брови",
          "en": "Eyebrows"
        },
        "description": {
          "ru": "Коррекция формы и густоты бровей методом микропигментации. Техники: волосковая, пудровая, комбинированная. Естественный результат до 2 лет.",
          "en": "Microblading, powder, or combo techniques create perfectly shaped brows. Natural hair strokes or soft shading last 1-2 years with touch-ups."
        },
        "videos": [
          "/video/brows_permanent1.mp4",
          "/video/brows_permanent2.mp4"
        ]
      },
      {
        "id": "permanent-eyeliner",
        "name": {
          "ru": "Межресничка",
          "en": "Eyeliner"
        },
        "description": {
          "ru": "Татуаж по линии роста ресниц для эффекта «от природы густых ресниц». Может быть тонким (0.5-1 мм) или с лёгким стрелочным удлинением.",
          "en": "Subtle pigment between lash roots enhances eye definition. Options range from natural lash line enhancement to classic winged liner."
        },
        "videos": [
          "/video/eyeliner1.mp4"
        ]
      },
      {
        "id": "permanent-lips",
        "name": {
          "ru": "Губы",
          "en": "Lips"
        },
        "description": {
          "ru": "Коррекция контура, увеличение объёма, насыщение цветом. Техники: акварель (нежное растушёвывание), контур, полное заполнение. Держится 2-3 года.",
          "en": "Lip blushing adds natural color and definition. Techniques include full color, contour correction, and ombre effect. Lasts 2-3 years."
        },
        "videos": [
          "/video/permanent_lips1.mp4"
        ]
      },
      {
        "id": "tattoo-removal",
        "name": {
          "ru": "Удаление татуажа и татуировок",
          "en": "Tattoo Removal"
        },
        "description": {
          "ru": "Лазерное удаление некачественного татуажа и татуировок. Q-switched лазер разрушает пигмент без повреждения кожи. Требуется 3-10 сеансов.",
          "en": "Laser removal of unwanted PMU or tattoos. Q-switched technology targets ink particles safely. Multiple sessions for complete clearance."
        },
        "videos": [
          "/video/tattoo_remove1.mp4",
          "/video/permanent_brow_remove1.mp4",
          "/video/tattoo_remove2.mp4"
        ]
      }
    ]
  }
]
