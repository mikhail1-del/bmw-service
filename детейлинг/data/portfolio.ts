import { images } from "./images";

export interface PortfolioItem {
  id: string;
  car: string;
  work: string;
  image: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    car: "Porsche 911 Carrera S",
    work: "Полная полировка + керамика Gyeon Q²",
    image: images.portfolio1,
    category: "Полировка",
  },
  {
    id: "2",
    car: "Mercedes-Benz S-Class",
    work: "Химчистка салона + кондиционирование кожи",
    image: images.portfolio2,
    category: "Химчистка",
  },
  {
    id: "3",
    car: "BMW M5 Competition",
    work: "Оклейка PPF SunTek Ultra",
    image: images.portfolio3,
    category: "Оклейка",
  },
  {
    id: "4",
    car: "Audi RS6 Avant",
    work: "Комплексная мойка + защитное покрытие",
    image: images.portfolio4,
    category: "Мойка",
  },
  {
    id: "5",
    car: "Range Rover Sport",
    work: "Тонировка + полировка кузова",
    image: images.portfolio5,
    category: "Полировка",
  },
  {
    id: "6",
    car: "Lamborghini Huracán",
    work: "Полная оклейка PPF + керамика",
    image: images.portfolio6,
    category: "Оклейка",
  },
];

export const portfolioCategories = [
  "Все",
  "Мойка",
  "Полировка",
  "Химчистка",
  "Оклейка",
];
