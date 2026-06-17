"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  title?: string;
}

export function Timeline({ steps, title }: TimelineProps) {
  return (
    <section className="section-tesla bg-tesla-white">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-tesla-sm mb-16 text-center"
          >
            {title}
          </motion.h2>
        )}

        <div className="relative mx-auto max-w-2xl">
          <div className="absolute bottom-0 left-6 top-0 w-px bg-tesla-border md:left-1/2 md:-translate-x-px" />

          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {steps.map((step, index) => (
              <motion.li
                key={step.step}
                variants={staggerItem}
                className={`relative flex gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden flex-1 md:block" />

                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tesla-black text-sm font-bold text-white md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                <div
                  className={`flex-1 pb-2 md:pb-0 ${
                    index % 2 === 0 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                  }`}
                >
                  <h3 className="text-xl font-bold tracking-tight text-tesla-black">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-tesla-text">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
