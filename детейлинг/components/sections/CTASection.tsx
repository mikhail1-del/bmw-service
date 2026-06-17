"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { contactInfo, cta } from "@/data/content";
import { images } from "@/data/images";
import { TeslaButton } from "@/components/TeslaButton";

export function CTASection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src={images.cta}
          alt="Премиальный автомобиль"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 px-6 text-center"
      >
        <h2 className="heading-tesla text-white">{cta.title}</h2>
        <div className="mt-10">
          <TeslaButton href="/contacts" size="lg">
            {cta.button}
          </TeslaButton>
        </div>
        <a
          href={contactInfo.phoneHref}
          className="mt-6 inline-block text-lg font-medium text-white transition-opacity hover:opacity-80"
        >
          {contactInfo.phone}
        </a>
      </motion.div>
    </section>
  );
}
