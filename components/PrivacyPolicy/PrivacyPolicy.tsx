import React from "react";
import css from "./PrivacyPolicy.module.css";

type Props = {
  lang?: "ru" | "en";
  cb: () => void;
};

const PrivacyPolicy: React.FC<Props> = ({ lang = "ru", cb }) => {
  const t = translations[lang];

  return (
    <div className={css.wrapper}>
      <div onClick={cb} className={css.closeModal}>
        {lang == 'en' ? 'Close' : 'Закрыть'}
      </div>
      <div className={css.container}>
        <h1 className={css.title}>{t.title}</h1>
        <p className={css.date}>{t.effectiveDate}</p>
        <p className={css.paragraph}>{t.intro}</p>

        {t.sections.map((section, index) => (
          <div key={index} className={css.section}>
            <h2 className={css.subtitle}>{section.title}</h2>
            {section.content.map((text, idx) =>
              Array.isArray(text) ? (
                <ul key={idx} className={css.list}>
                  {text.map((li, i) => (
                    <li key={i}>{li}</li>
                  ))}
                </ul>
              ) : (
                <p key={idx} className={css.paragraph}>{text}</p>
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

const translations = {
  ru: {
    title: "Политика конфиденциальности",
    effectiveDate: "Дата вступления в силу: 23 июля 2025 года",
    intro:
      "ValeryCenter (далее — «мы», «наш сайт», «Компания»), доступный по адресу valerycenter.com, уважает вашу конфиденциальность и обязуется защищать персональные данные.",
    sections: [
      {
        title: "1. Какие данные мы собираем",
        content: [
          [
            "Имя и фамилия",
            "Электронная почта",
            "Телефон",
            "IP-адрес и браузер",
            "Cookies",
            "Сообщения с форм сайта",
          ],
        ],
      },
      {
        title: "2. Цели обработки данных",
        content: [
          [
            "Ответ на обращения",
            "Предоставление услуг",
            "Аналитика и улучшение сайта",
            "Выполнение правовых обязательств",
            "Маркетинг по согласованию",
          ],
        ],
      },
      {
        title: "3. Правовое основание",
        content: [
          [
            "Согласие (ст. 6(1)(a) GDPR)",
            "Исполнение договора (ст. 6(1)(b))",
            "Законные интересы",
            "Юридические обязательства (ст. 6(1)(c))",
          ],
        ],
      },
      {
        title: "4. Передача данных",
        content: [
          "Мы не передаем данные без согласия, кроме законных случаев (например, хостинг, аналитика).",
        ],
      },
      {
        title: "5. Срок хранения",
        content: [
          "Данные хранятся до достижения целей или отзыва согласия, а также в пределах законных сроков.",
        ],
      },
      {
        title: "6. Ваши права",
        content: [
          [
            "Доступ и исправление данных",
            "Удаление данных",
            "Ограничение и возражение",
            "Переносимость данных",
            "Жалоба в надзорный орган",
          ],
          "Для реализации прав пишите на: info@valerycenter.com",
        ],
      },
      {
        title: "7. Cookies",
        content: [
          "Мы используем cookies для аналитики, персонализации и улучшения сайта.",
        ],
      },
      {
        title: "8. Безопасность",
        content: [
          "Мы применяем технические и организационные меры для защиты данных от утечки или доступа.",
        ],
      },
      {
        title: "9. Контакты",
        content: [
          "E-mail: info@valerycenter.com",
          "Сайт: https://valerycenter.com",
        ],
      },
      {
        title: "10. Обновления",
        content: [
          "Мы можем обновлять политику. Актуальная версия доступна на сайте.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    effectiveDate: "Effective date: July 23, 2025",
    intro:
      "ValeryCenter (hereinafter referred to as “we”, “our site”, or “Company”), available at valerycenter.com, respects your privacy and is committed to protecting your personal data.",
    sections: [
      {
        title: "1. What Data We Collect",
        content: [
          [
            "Full name",
            "Email address",
            "Phone number",
            "IP address and browser data",
            "Cookies",
            "Messages sent via contact form",
          ],
        ],
      },
      {
        title: "2. Purpose of Data Processing",
        content: [
          [
            "Responding to inquiries",
            "Providing our services",
            "Analytics and website improvement",
            "Legal compliance",
            "Marketing with consent",
          ],
        ],
      },
      {
        title: "3. Legal Basis for Processing",
        content: [
          [
            "Consent (Art. 6(1)(a) GDPR)",
            "Contract performance (Art. 6(1)(b))",
            "Legitimate interests",
            "Legal obligations (Art. 6(1)(c))",
          ],
        ],
      },
      {
        title: "4. Data Sharing",
        content: [
          "We do not share your data without consent, except in legally required or necessary cases (e.g., hosting, analytics).",
        ],
      },
      {
        title: "5. Data Retention",
        content: [
          "We retain data until the purposes are fulfilled or consent is withdrawn, within legal retention periods.",
        ],
      },
      {
        title: "6. Your Rights",
        content: [
          [
            "Access and correction",
            "Data deletion",
            "Restriction or objection",
            "Data portability",
            "Complaint to supervisory authority",
          ],
          "To exercise your rights, contact: info@valerycenter.com",
        ],
      },
      {
        title: "7. Cookies",
        content: [
          "We use cookies for analytics, personalization, and improving the site.",
        ],
      },
      {
        title: "8. Data Security",
        content: [
          "We use technical and organizational measures to protect data from unauthorized access or leakage.",
        ],
      },
      {
        title: "9. Contact",
        content: [
          "E-mail: info@valerycenter.com",
          "Website: https://valerycenter.com",
        ],
      },
      {
        title: "10. Updates",
        content: [
          "We may update this policy. The latest version will always be available on the website.",
        ],
      },
    ],
  },
};
