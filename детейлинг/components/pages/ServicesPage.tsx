"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { servicePrices, servicesPage } from "@/data/content";
import { services } from "@/data/services";
import { fadeInUp } from "@/lib/animations";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/sections/CTASection";
import { TeslaButton } from "@/components/TeslaButton";
import { images } from "@/data/images";

export function ServicesPage() {
  return (
    <>
      <PageHero
        title={servicesPage.title}
        subtitle={servicesPage.subtitle}
        image={images.hero}
      />

      <div className="bg-tesla-white">
        {services.map((service, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <motion.section
              key={service.id}
              {...fadeInUp}
              id={service.slug}
              className={`scroll-mt-16 border-t border-tesla-border ${
                index % 2 === 0 ? "bg-tesla-white" : "bg-tesla-gray"
              }`}
            >
              <div
                className={`mx-auto grid max-w-content items-center gap-0 lg:grid-cols-2 ${
                  isReversed ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-[70vh] ${isReversed ? "lg:[direction:ltr]" : ""}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div
                  className={`px-6 py-16 lg:px-16 lg:py-24 ${isReversed ? "lg:[direction:ltr]" : ""}`}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-tesla-black md:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-tesla-text">
                    {service.description}
                  </p>
                  <p className="mt-4 text-sm text-tesla-text">
                    Срок:{" "}
                    <span className="font-medium text-tesla-black">
                      {service.duration}
                    </span>
                  </p>
                  <TeslaButton href="/contacts" className="mt-8">
                    Записаться
                  </TeslaButton>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      <section className="section-tesla bg-tesla-white">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="heading-tesla-sm mb-12 text-center"
          >
            Стоимость
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-2xl"
          >
            <table className="w-full">
              <tbody>
                {servicePrices.map((row) => (
                  <tr
                    key={row.service}
                    className="border-b border-tesla-border"
                  >
                    <td className="py-5 text-base text-tesla-black">
                      {row.service}
                    </td>
                    <td className="py-5 text-right text-base font-medium text-tesla-black">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-6 text-center text-sm text-tesla-text">
              Точная стоимость зависит от класса автомобиля и объёма работ
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
