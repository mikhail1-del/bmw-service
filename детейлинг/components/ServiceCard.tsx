"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TeslaButton } from "@/components/TeslaButton";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  className?: string;
  fullHeight?: boolean;
}

export function ServiceCard({
  title,
  description,
  image,
  href = "/services",
  className,
  fullHeight = false,
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`group relative overflow-hidden bg-tesla-gray ${fullHeight ? "min-h-[80vh] lg:min-h-screen" : "min-h-[60vh]"} ${className ?? ""}`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-[400ms] ease-tesla group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      </div>

      <div className="relative z-10 flex h-full min-h-[inherit] flex-col justify-end p-8 md:p-12 lg:p-16">
        <h3 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h3>
        <p className="mt-3 max-w-md text-base text-white/80 md:text-lg">
          {description}
        </p>
        <div className="mt-6">
          <Link href={href}>
            <TeslaButton variant="primary" size="sm">
              Подробнее
            </TeslaButton>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
