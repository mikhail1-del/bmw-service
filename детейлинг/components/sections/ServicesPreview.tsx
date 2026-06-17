"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { homeServicesHeading } from "@/data/home";
import { services } from "@/data/services";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function ServicesPreview() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 lg:px-8">
        <SectionHeading
          eyebrow={homeServicesHeading.eyebrow}
          title={homeServicesHeading.title}
          description={homeServicesHeading.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.id} variants={staggerItem}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col rounded-sm border border-platinum/20 bg-white p-6 transition-all duration-300 hover:border-platinum/40 hover:shadow-sm"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-sm bg-surface text-platinum transition-colors group-hover:bg-accent/5 group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-medium text-graphite">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-platinum transition-colors group-hover:text-accent">
                    Подробнее
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <Button href="/services" variant="outline">
            Все услуги
          </Button>
        </div>
      </div>
    </section>
  );
}
