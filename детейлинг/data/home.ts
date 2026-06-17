import { Award, Lock, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const heroContent = {
  title: "Безупречный блеск.\nБережный подход.",
  subtitle:
    "Закрытая детейлинг-студия для владельцев автомобилей, которые ценят каждую деталь. Оригинальные материалы, индивидуальный подход, результат, который говорит сам за себя.",
  ctaPrimary: "Записаться",
  ctaSecondary: "Наши услуги",
};

export const advantages: Advantage[] = [
  {
    icon: ShieldCheck,
    title: "Оригинальные материалы",
    description:
      "Работаем исключительно с сертифицированными составами Gyeon, SunTek, Colourlock — без компромиссов в качестве.",
  },
  {
    icon: Award,
    title: "Гарантия на работу",
    description:
      "Предоставляем письменную гарантию на все виды работ. Ваш автомобиль — наша репутация.",
  },
  {
    icon: Lock,
    title: "Закрытый бокс",
    description:
      "Работаем в закрытом, контролируемом пространстве без посторонних. Полная конфиденциальность и безопасность.",
  },
  {
    icon: Sparkles,
    title: "Внимание к деталям",
    description:
      "Каждый автомобиль проходит многоступенчатый контроль качества. Мы не отдаём машину, пока не будем довольны результатом сами.",
  },
];

export const ctaContent = {
  title: "Готовы вернуть автомобилю первозданный вид?",
  description:
    "Запишитесь на консультацию — мы подберём оптимальный пакет услуг и ответим на все вопросы.",
  buttonText: "Записаться на приём",
};

export const homeServicesHeading = {
  eyebrow: "Услуги",
  title: "Всё для безупречного состояния",
  description:
    "От ежедневной мойки до полной защиты кузова — каждая услуга выполняется с премиальным подходом.",
};

export const beforeAfterHeading = {
  eyebrow: "Результат",
  title: "До и после",
  description:
    "Перетащите ползунок, чтобы увидеть разницу. Полировка кузова Porsche 911 — восстановление глубины цвета и зеркального блеска.",
};

export const whyUsHeading = {
  eyebrow: "Почему AURA",
  title: "Создано для владельцев премиальных авто",
  description:
    "Мы понимаем ценность вашего автомобиля и относимся к каждой детали с максимальной ответственностью.",
};
