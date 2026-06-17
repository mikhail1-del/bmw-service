"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolioSection } from "@/data/content";
import { portfolioItems } from "@/data/portfolio";
import { images } from "@/data/images";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { GoldButton } from "@/components/ui/GoldButton";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { TextReveal } from "@/components/ui/TextReveal";

export function LuxuryPortfolio() {
  return (
    <section className="section-luxury bg-luxury-graphite">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-luxury">{portfolioSection.eyebrow}</p>
          <TextReveal
            as="h2"
            text={portfolioSection.title}
            className="mt-4 font-display text-3xl text-luxury-white md:text-4xl lg:text-5xl"
          />
          <GoldDivider className="mx-auto my-6" />
          <p className="text-luxury-muted">{portfolioSection.description}</p>
        </div>

        <motion.div {...fadeInUp} className="mt-16">
          <BeforeAfterSlider
            beforeImage={images.beforeAfter.before}
            afterImage={images.beforeAfter.after}
            caption={portfolioSection.beforeAfterLabel}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 flex gap-4 overflow-x-auto pb-4 scrollbar-none md:grid md:grid-cols-3 md:overflow-visible md:pb-0"
        >
          {portfolioItems.slice(0, 3).map((item) => (
            <motion.article
              key={item.id}
              variants={staggerItem}
              className="group min-w-[280px] flex-shrink-0 overflow-hidden border border-gold md:min-w-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.car} — ${item.work}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-luxury-black/0 transition-colors duration-500 group-hover:bg-luxury-black/30" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs uppercase tracking-wider text-luxury-gold">
                    {item.category}
                  </p>
                  <h3 className="mt-1 font-display text-lg text-luxury-white">
                    {item.car}
                  </h3>
                  <p className="mt-1 text-sm text-luxury-muted">{item.work}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <GoldButton href="/portfolio" variant="ghost">
            Смотреть все работы
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
