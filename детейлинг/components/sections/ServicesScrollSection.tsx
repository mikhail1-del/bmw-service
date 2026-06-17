"use client";

import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesScrollSection() {
  return (
    <section id="services" className="bg-tesla-white">
      <div className="snap-x-mandatory flex overflow-x-auto scrollbar-none lg:grid lg:grid-cols-2 lg:overflow-visible">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="w-full shrink-0 snap-center lg:w-auto"
          >
            <ServiceCard
              title={service.title}
              description={service.shortDescription}
              image={service.image}
              href="/services"
              fullHeight={index < 2}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
