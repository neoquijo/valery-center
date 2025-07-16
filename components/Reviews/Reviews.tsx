"use client"

import type React from "react"
import type { Language } from "../../types"
import { TEXTS } from "../../constants/texts"
import css from "./Reviews.module.css"

interface ReviewsProps {
  language: Language
}

interface Review {
  id: string
  name: {
    ru: string
    en: string
  }
  text: {
    ru: string
    en: string
  }
  rating: number
  date: {
    ru: string
    en: string
  }
  avatar: string
}

const REVIEWS_DATA: Review[] = [
  {
    id: "1",
    name: {
      ru: "Лана Лана",
      en: "Lana Lana",
    },
    text: {
      ru: "Валерий профессионал с большой буквы. Врач, массажист. Огромное количество клиентов. Громадный опыт работы в разных странах, академическое образование. Помог решить проблему с протрузиями межпозвоночных дисков шейного отдела.",
      en: "Valery is a professional with a capital P. Doctor, masseur. Huge number of clients. Enormous work experience in different countries, academic education. Helped solve the problem with cervical disc protrusions.",
    },
    rating: 5,
    date: {
      ru: "11 месяцев назад",
      en: "11 months ago",
    },
    avatar: "LL",
  },
  {
    id: "2",
    name: {
      ru: "Галина Бондаренко",
      en: "Galina Bondarenko",
    },
    text: {
      ru: "Я рада что нашла этот салон и Валерия. Обращалась по поводу боли в спине. Помощь была оказана быстро и качественно. Так же очень понравилась процедура гидромассажа. Сотрудники салона создали комфортную атмосферу, приятно там находится.",
      en: "I'm glad I found this salon and Valery. I came about back pain. Help was provided quickly and efficiently. I also really liked the hydromassage procedure. The salon staff created a comfortable atmosphere, it's pleasant to be there.",
    },
    rating: 5,
    date: {
      ru: "год назад",
      en: "a year ago",
    },
    avatar: "GB",
  },
  {
    id: "3",
    name: {
      ru: "Анаир Каррильо",
      en: "Anair Carrillo",
    },
    text: {
      ru: "Отличный опыт. Я сделала процедуру для лица и осталась очень довольна. Процедура была очень приятной. Обязательно вернусь. Спасибо за такую заботу о моей коже!",
      en: "Excellent experience. I had a facial treatment and was very satisfied. The procedure was very pleasant. I will definitely return. Thank you for taking such good care of my skin!",
    },
    rating: 5,
    date: {
      ru: "3 дня назад",
      en: "3 days ago",
    },
    avatar: "AC",
  },
  {
    id: "4",
    name: {
      ru: "Каффи Джой",
      en: "Kaffie Joy",
    },
    text: {
      ru: "Был самый потрясающий уход за лицом со спирулиной. Отличное внимание к деталям, нежное и очень расслабляющее. Также мне подправили брови и покрасили ресницы, тоже отличный сервис, очень доволен результатом.",
      en: "Had the most amazing spirulina facial. Excellent attention to detail, gentle and very relaxing. Also had my eyebrows shaped and eyelashes tinted, also excellent service, very happy with the result.",
    },
    rating: 5,
    date: {
      ru: "8 месяцев назад",
      en: "8 months ago",
    },
    avatar: "KJ",
  },
]

export const Reviews: React.FC<ReviewsProps> = ({ language }) => {
  return (
    <section className={`${css.reviews} section`} id="reviews">
      <div className={css.container}>
        <div className={css.textCenter}>
          <p className={css.sectionSubtitle}>{TEXTS.reviews[language]}</p>
          <h2 className={css.sectionTitle}>{TEXTS.clientReviews[language]}</h2>
        </div>
        <div className={css.reviewsContainer}>
          {REVIEWS_DATA.map((review) => (
            <div key={review.id} className={`${css.reviewCard} reveal`}>
              <div className={css.reviewContent}>
                <div className={css.reviewText}>{review.text[language]}</div>
                <div className={css.reviewerInfo}>
                  <div className={css.reviewerAvatar}>{review.avatar}</div>
                  <div className={css.reviewerDetails}>
                    <h4>{review.name[language]}</h4>
                    <div className={css.reviewMeta}>
                      <div className={css.stars}>
                        {Array.from({ length: review.rating }, (_, i) => (
                          <i key={i} className="fas fa-star"></i>
                        ))}
                      </div>
                      <span>{review.date[language]}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
