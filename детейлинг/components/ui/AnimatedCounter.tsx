"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({
  value,
  suffix = "",
  label,
  className,
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString("ru-RU"),
  );

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, spring, value]);

  return (
    <div ref={ref} className={cn("text-center", className)}>
      <div className="font-display text-4xl text-luxury-white md:text-5xl">
        <motion.span>{display}</motion.span>
        <span className="text-gold-gradient">{suffix}</span>
      </div>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-luxury-muted">
        {label}
      </p>
    </div>
  );
}
