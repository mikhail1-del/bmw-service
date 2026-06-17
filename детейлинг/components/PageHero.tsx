"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  image,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative flex min-h-[50vh] items-end bg-tesla-gray pt-14",
        className,
      )}
    >
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/70" />
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto w-full max-w-content px-6 pb-16 pt-24 lg:px-10"
      >
        <h1 className="heading-tesla-sm">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-xl text-lg text-tesla-text">{subtitle}</p>
        )}
      </motion.div>
    </section>
  );
}
