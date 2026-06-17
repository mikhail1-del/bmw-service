"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { PortfolioItem } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface PortfolioCarouselProps {
  items: PortfolioItem[];
  className?: string;
}

export function PortfolioCarousel({ items, className }: PortfolioCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent((index + items.length) % items.length);
    },
    [current, items.length],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const item = items[current];

  return (
    <div className={cn("relative", className)}>
      <div className="relative aspect-[16/10] overflow-hidden border border-gold shadow-gold-sm">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={item.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={item.image}
              alt={`${item.car} — ${item.work}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={current === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="mb-2 inline-block glass px-3 py-1 text-xs uppercase tracking-wider text-luxury-gold">
                {item.category}
              </span>
              <h3 className="font-display text-xl text-luxury-white md:text-2xl">
                {item.car}
              </h3>
              <p className="mt-1 text-sm text-luxury-muted md:text-base">
                {item.work}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gold text-luxury-white transition-all hover:shadow-gold-sm"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-gold text-luxury-white transition-all hover:shadow-gold-sm"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        {items.map((portfolioItem, index) => (
          <button
            key={portfolioItem.id}
            type="button"
            onClick={() => goTo(index)}
            className={cn(
              "h-1.5 transition-all duration-500",
              index === current
                ? "w-8 bg-luxury-gold shadow-gold-sm"
                : "w-1.5 bg-luxury-gold/30 hover:bg-luxury-gold/60",
            )}
            aria-label={`Слайд ${index + 1}: ${portfolioItem.car}`}
          />
        ))}
      </div>
    </div>
  );
}
