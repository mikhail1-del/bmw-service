"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesSection } from "@/data/content";
import { services } from "@/data/services";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldButton } from "@/components/ui/GoldButton";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { TextReveal } from "@/components/ui/TextReveal";

export function LuxuryServices() {
  return (
    <section className="section-luxury bg-luxury-black">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-luxury">{servicesSection.eyebrow}</p>
          <TextReveal
            as="h2"
            text={servicesSection.title}
            className="mt-4 font-display text-3xl text-luxury-white md:text-4xl lg:text-5xl"
          />
          <GoldDivider className="mx-auto my-6" />
          <p className="text-luxury-muted">{servicesSection.description}</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link href="/services" className="block h-full">
                  <GlassCard variant="gold" className="group h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center border border-gold bg-luxury-gold/5">
                      <Icon className="h-5 w-5 text-luxury-gold" />
                    </div>
                    <h3 className="font-display text-xl text-luxury-white transition-colors group-hover:text-gold-gradient">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-luxury-muted">
                      {service.shortDescription}
                    </p>
                    <span className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-luxury-gold opacity-0 transition-opacity group-hover:opacity-100">
                      Подробнее →
                    </span>
                  </GlassCard>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <GoldButton href="/services" variant="outline">
            Все услуги
          </GoldButton>
        </div>
      </div>
    </section>
  );
}
