"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { about } from "@/data/content";
import { images } from "@/data/images";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { TextReveal } from "@/components/ui/TextReveal";

export function LuxuryAbout() {
  return (
    <section className="section-luxury bg-luxury-graphite">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div {...fadeInUp}>
            <p className="eyebrow-luxury">{about.eyebrow}</p>
            <TextReveal
              as="h2"
              text={about.title}
              className="mt-4 font-display text-3xl leading-tight text-luxury-white md:text-4xl lg:text-5xl"
            />
            <GoldDivider className="my-6" />
            <p className="text-base leading-relaxed text-luxury-muted">
              {about.description}
            </p>
            <blockquote className="subheading-luxury mt-8 border-l border-gold pl-6">
              {about.quote}
            </blockquote>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden border border-gold"
          >
            <Image
              src={images.about}
              alt="Детейлинг процесс"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent" />
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-20 grid grid-cols-2 gap-8 border-t border-gold pt-16 lg:grid-cols-4"
        >
          {about.stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
