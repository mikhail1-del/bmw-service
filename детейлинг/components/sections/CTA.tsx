"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ctaContent } from "@/data/home";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-sm border border-platinum/20 bg-graphite px-8 py-16 text-center md:px-16 md:py-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,58,138,0.15),transparent_60%)]" />

          <div className="relative">
            <h2 className="text-balance text-2xl font-light tracking-tight text-white md:text-4xl">
              {ctaContent.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/60 md:text-base">
              {ctaContent.description}
            </p>
            <Button
              href="/contacts"
              variant="secondary"
              size="lg"
              className="mt-8 bg-white text-graphite hover:bg-white/90"
            >
              {ctaContent.buttonText}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
