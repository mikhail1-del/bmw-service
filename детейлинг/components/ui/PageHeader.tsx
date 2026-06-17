"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="border-b border-platinum/20 bg-surface pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-platinum">
              {eyebrow}
            </p>
          )}
          <h1 className="text-balance text-3xl font-light tracking-tight text-graphite md:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base leading-relaxed text-body md:text-lg">
              {description}
            </p>
          )}
          <div className="mt-6 h-px w-12 bg-platinum/40" />
        </motion.div>
      </div>
    </section>
  );
}
