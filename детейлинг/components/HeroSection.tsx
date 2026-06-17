"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { hero } from "@/data/content";
import { images } from "@/data/images";
import { TeslaButton } from "@/components/TeslaButton";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Премиальный автомобиль"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-14 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-bold tracking-tight text-tesla-black md:text-3xl"
        >
          {hero.logo}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-4xl text-balance text-4xl font-bold tracking-tight text-tesla-black md:text-6xl lg:text-7xl"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 text-lg text-tesla-text md:text-xl"
        >
          {hero.subtitle}
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-4 px-6 pb-16 sm:flex-row sm:justify-center"
      >
        <TeslaButton href="/contacts" size="lg">
          {hero.ctaPrimary}
        </TeslaButton>
        <TeslaButton href="/services" variant="secondary" size="lg">
          {hero.ctaSecondary}
        </TeslaButton>
      </motion.div>
    </section>
  );
}
