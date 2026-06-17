"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cta } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { GoldButton } from "@/components/ui/GoldButton";

export function LuxuryCTA() {
  return (
    <section className="section-luxury bg-luxury-black">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          {...fadeInUp}
          className="relative overflow-hidden border border-gold bg-luxury-graphite px-8 py-16 text-center shadow-gold md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 bg-gold-gradient-subtle opacity-30" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_70%)]" />

          <div className="relative">
            <h2 className="font-display text-3xl text-luxury-white md:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-luxury-muted">
              {cta.description}
            </p>
            <GoldButton href="/contacts" size="lg" className="mt-10">
              {cta.button}
              <ArrowRight className="h-4 w-4" />
            </GoldButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
