"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useState } from "react";
import { testimonials } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { TextReveal } from "@/components/ui/TextReveal";

export function LuxuryTestimonials() {
  const [current, setCurrent] = useState(0);
  const items = testimonials.items;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const item = items[current];

  return (
    <section className="section-luxury bg-luxury-graphite">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-luxury">{testimonials.eyebrow}</p>
          <TextReveal
            as="h2"
            text={testimonials.title}
            className="mt-4 font-display text-3xl text-luxury-white md:text-4xl lg:text-5xl"
          />
          <GoldDivider className="mx-auto my-6" />
        </div>

        <motion.div {...fadeInUp} className="relative mx-auto mt-12 max-w-3xl">
          <Quote className="absolute -left-2 -top-6 h-12 w-12 text-luxury-gold/20 md:-left-8" />

          <GlassCard hover={false} variant="gold" padding="lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-accent text-xl italic leading-relaxed text-luxury-platinum md:text-2xl">
                  &ldquo;{item.text}&rdquo;
                </p>
                <GoldDivider className="my-6 w-16" />
                <div>
                  <p className="font-display text-lg text-luxury-white">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-luxury-gold">{item.car}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </GlassCard>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-gold text-luxury-muted transition-all hover:text-luxury-gold hover:shadow-gold-sm"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {items.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-luxury-gold"
                      : "w-1.5 bg-luxury-gold/30 hover:bg-luxury-gold/60"
                  }`}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-gold text-luxury-muted transition-all hover:text-luxury-gold hover:shadow-gold-sm"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
