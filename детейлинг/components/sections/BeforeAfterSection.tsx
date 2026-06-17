"use client";

import { motion } from "framer-motion";
import { beforeAfterHeading } from "@/data/home";
import { beforeAfter } from "@/data/site";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfterSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          eyebrow={beforeAfterHeading.eyebrow}
          title={beforeAfterHeading.title}
          description={beforeAfterHeading.description}
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16"
        >
          <BeforeAfterSlider
            beforeImage={beforeAfter.before}
            afterImage={beforeAfter.after}
            caption={beforeAfter.label}
          />
        </motion.div>
      </div>
    </section>
  );
}
