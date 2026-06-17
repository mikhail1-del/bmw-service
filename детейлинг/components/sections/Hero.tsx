"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { heroContent } from "@/data/home";
import { images } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={images.hero}
          alt="Премиальный автомобиль в детейлинг-студии AURA"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/30" />
      </div>

      <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-32 lg:px-8 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-platinum">
            AURA Detailing
          </p>
          <h1 className="whitespace-pre-line text-balance text-4xl font-light leading-tight tracking-tight text-graphite md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-body md:text-lg">
            {heroContent.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href="/contacts" size="lg">
              {heroContent.ctaPrimary}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/services" variant="outline" size="lg">
              {heroContent.ctaSecondary}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
