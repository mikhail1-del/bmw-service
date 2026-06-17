"use client";

import { motion } from "framer-motion";
import { advantages, whyUsHeading } from "@/data/home";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyUs() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          eyebrow={whyUsHeading.eyebrow}
          title={whyUsHeading.title}
          description={whyUsHeading.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((advantage) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                variants={staggerItem}
                className="group"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm border border-platinum/20 bg-white transition-colors group-hover:border-accent/20 group-hover:bg-accent/5">
                  <Icon className="h-5 w-5 text-platinum transition-colors group-hover:text-accent" />
                </div>
                <h3 className="text-lg font-medium text-graphite">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {advantage.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
