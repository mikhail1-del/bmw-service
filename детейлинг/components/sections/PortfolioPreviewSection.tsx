"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { portfolioItems } from "@/data/portfolio";
import { ImageGallery } from "@/components/ImageGallery";
import { TeslaButton } from "@/components/TeslaButton";

export function PortfolioPreviewSection() {
  const galleryItems = portfolioItems.slice(0, 6).map((item) => ({
    id: item.id,
    image: item.image,
    title: item.car,
    subtitle: item.work,
    category: item.category,
  }));

  return (
    <section className="section-tesla bg-tesla-gray">
      <div className="mx-auto max-w-content px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="heading-tesla-sm">Наши работы</h2>
          <p className="mt-4 text-lg text-tesla-text">
            Результаты, которыми мы гордимся
          </p>
        </motion.div>

        <ImageGallery items={galleryItems} />

        <div className="mt-12 text-center">
          <Link href="/portfolio">
            <TeslaButton variant="secondary">Смотреть все</TeslaButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
