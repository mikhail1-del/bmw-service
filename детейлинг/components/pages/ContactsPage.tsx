"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import { contactInfo, contactsPage } from "@/data/content";
import { fadeInUp } from "@/lib/animations";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/images";

export function ContactsPage() {
  return (
    <>
      <PageHero
        title={contactsPage.title}
        subtitle={contactsPage.subtitle}
        image={images.hero}
      />

      <section className="section-tesla bg-tesla-white">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div {...fadeInUp} className="space-y-10">
              {[
                {
                  icon: MapPin,
                  label: "Адрес",
                  value: contactInfo.address,
                },
                {
                  icon: Phone,
                  label: "Телефон",
                  value: contactInfo.phone,
                  href: contactInfo.phoneHref,
                },
                {
                  icon: Clock,
                  label: "Часы работы",
                  value: contactInfo.workingHours,
                },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label}>
                  <Icon className="h-6 w-6 text-tesla-black" strokeWidth={1.5} />
                  <p className="mt-3 text-sm font-medium uppercase tracking-wider text-tesla-text">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1 block text-2xl font-bold tracking-tight text-tesla-black transition-colors hover:text-tesla-red"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-2xl font-bold tracking-tight text-tesla-black">
                      {value}
                    </p>
                  )}
                </div>
              ))}

              <p className="text-tesla-text">{contactInfo.parkingNote}</p>
            </motion.div>

            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="mt-20 overflow-hidden bg-tesla-gray"
          >
            <div className="relative aspect-[21/9] min-h-[280px] w-full grayscale">
              <iframe
                src={contactInfo.mapEmbedUrl}
                title="Карта — AURA Detailing"
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
