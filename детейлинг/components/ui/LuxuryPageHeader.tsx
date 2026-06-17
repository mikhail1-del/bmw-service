"use client";

import { motion } from "framer-motion";
import { contactsPage } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { TextReveal } from "@/components/ui/TextReveal";

interface LuxuryPageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function LuxuryPageHeader({
  eyebrow,
  title,
  description,
}: LuxuryPageHeaderProps) {
  return (
    <section className="border-b border-gold bg-luxury-graphite pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div {...fadeInUp} className="max-w-2xl">
          {eyebrow && <p className="eyebrow-luxury">{eyebrow}</p>}
          <TextReveal
            as="h1"
            text={title}
            className="mt-4 font-display text-3xl text-luxury-white md:text-4xl lg:text-5xl"
          />
          {description && (
            <p className="mt-4 text-base leading-relaxed text-luxury-muted md:text-lg">
              {description}
            </p>
          )}
          <GoldDivider className="mt-6" />
        </motion.div>
      </div>
    </section>
  );
}
