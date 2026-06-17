"use client";

import { motion } from "framer-motion";
import {
  Award,
  Lock,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { whyUs } from "@/data/content";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { GlassCard } from "@/components/ui/GlassCard";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { TextReveal } from "@/components/ui/TextReveal";

const icons = [ShieldCheck, Award, Lock, Users, Star, Sparkles];

export function LuxuryWhyUs() {
  return (
    <section className="section-luxury bg-luxury-black">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow-luxury">{whyUs.eyebrow}</p>
          <TextReveal
            as="h2"
            text={whyUs.title}
            className="mt-4 font-display text-3xl text-luxury-white md:text-4xl lg:text-5xl"
          />
          <GoldDivider className="mx-auto my-6" />
          <p className="text-luxury-muted">{whyUs.description}</p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyUs.items.map((item, index) => {
            const Icon = icons[index] ?? Sparkles;
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <GlassCard hover={false} variant="subtle" className="h-full">
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-5 flex h-12 w-12 items-center justify-center border border-gold"
                  >
                    <Icon className="h-5 w-5 text-luxury-gold" />
                  </motion.div>
                  <h3 className="font-display text-lg text-luxury-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-luxury-muted">
                    {item.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
