export const siteConfig = {
  name: "AURA Detailing",
  tagline: "Совершенство в деталях",
  description:
    "Премиальный детейлинг для владельцев автомобилей, которые ценят безупречность.",
};

export const navigation = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services" },
  { label: "Портфолио", href: "/portfolio" },
  { label: "Контакты", href: "/contacts" },
] as const;

export const contactInfo = {
  phone: "+7 (495) 123-45-67",
  phoneHref: "tel:+74951234567",
  email: "hello@aura-detailing.ru",
  emailHref: "mailto:hello@aura-detailing.ru",
  address: "Москва, ул. Примерная, 12",
  workingHours: "Пн–Сб: 10:00 – 20:00",
  social: {
    whatsapp: "https://wa.me/74951234567",
    telegram: "https://t.me/aura_detailing",
    instagram: "https://instagram.com/aura_detailing",
  },
  parkingNote:
    "Заезд со стороны ул. Примерной. Бесплатная парковка для клиентов прямо у бокса.",
  mapEmbedUrl:
    "https://yandex.ru/map-widget/v1/?um=constructor%3Aexample&amp;source=constructor",
};

export const hero = {
  logo: "AURA",
  title: "Совершенство в деталях",
  subtitle: "Премиальный детейлинг",
  ctaPrimary: "Записаться",
  ctaSecondary: "Узнать больше",
};

export const whyAura = {
  title: "Почему AURA",
  items: [
    {
      title: "Оригинальные материалы",
      description: "Gyeon, SunTek, Colourlock — только сертифицированные составы.",
    },
    {
      title: "Гарантия качества",
      description: "Письменная гарантия на все виды работ.",
    },
    {
      title: "Закрытый бокс",
      description: "Контролируемое пространство. Полная конфиденциальность.",
    },
    {
      title: "Опытные мастера",
      description: "Сертифицированные специалисты с опытом 8+ лет.",
    },
  ],
};

export const process = {
  title: "Как мы работаем",
  steps: [
    {
      step: "01",
      title: "Запись",
      description: "Оставьте заявку — мы свяжемся и подберём удобное время.",
    },
    {
      step: "02",
      title: "Диагностика",
      description: "Осмотр автомобиля и составление индивидуального плана работ.",
    },
    {
      step: "03",
      title: "Работа",
      description: "Выполнение услуг с использованием премиальных материалов.",
    },
    {
      step: "04",
      title: "Контроль",
      description: "Многоступенчатая проверка качества перед выдачей.",
    },
    {
      step: "05",
      title: "Выдача",
      description: "Передача автомобиля и рекомендации по дальнейшему уходу.",
    },
  ],
};

export const cta = {
  title: "Готовы преобразить автомобиль?",
  button: "Записаться",
};

export const servicesPage = {
  title: "Услуги",
  subtitle: "Премиальный уход для вашего автомобиля",
};

export const portfolioPage = {
  title: "Наши работы",
  subtitle: "Результаты, которыми мы гордимся",
};

export const contactsPage = {
  title: "Контакты",
  subtitle: "Свяжитесь с нами",
};

export const servicePrices = [
  { service: "Комплексная мойка", price: "от 8 000 ₽" },
  { service: "Химчистка салона", price: "от 15 000 ₽" },
  { service: "Полировка кузова", price: "от 35 000 ₽" },
  { service: "Тонировка", price: "от 12 000 ₽" },
  { service: "Оклейка PPF", price: "от 80 000 ₽" },
];
