"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  background?: React.ReactNode;
}

export function ParallaxSection({
  children,
  className,
  speed = 0.3,
  background,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <section ref={ref} className={cn("relative overflow-hidden", className)}>
      {background && (
        <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
          {background}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </section>
  );
}
