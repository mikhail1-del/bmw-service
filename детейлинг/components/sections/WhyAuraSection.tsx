"use client";

import { motion } from "framer-motion";
import { Award, Lock, ShieldCheck, Users } from "lucide-react";
import { whyAura } from "@/data/content";
import { staggerContainer, staggerItem } from "@/lib/animations";

const icons = [ShieldCheck, Award, Lock, Users];

export function WhyAuraSection() {
  return (
    <section className="section-tesla bg-tesla-black text-white">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="heading-tesla-sm mb-16 text-center text-white"
        >
          {whyAura.title}
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {whyAura.items.map((item, index) => {
            const Icon = icons[index] ?? ShieldCheck;
            return (
              <motion.div key={item.title} variants={staggerItem}>
                <Icon className="h-8 w-8 text-white" strokeWidth={1.5} />
                <h3 className="mt-4 text-lg font-bold tracking-tight text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
