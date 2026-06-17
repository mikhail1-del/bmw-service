"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "gold" | "subtle";
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantStyles = {
  default: "glass",
  gold: "glass-gold",
  subtle: [
    "bg-luxury-surface/40 backdrop-blur-xl",
    "border border-glass",
  ].join(" "),
};

const paddingStyles = {
  none: "",
  sm: "p-4",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export function GlassCard({
  variant = "default",
  hover = true,
  padding = "md",
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover
          ? {
              y: -4,
              scale: 1.02,
              transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
            }
          : undefined
      }
      className={cn(
        "relative overflow-hidden rounded-none",
        variantStyles[variant],
        paddingStyles[padding],
        hover && "hover-gold-glow cursor-default",
        className,
      )}
      {...props}
    >
      {variant === "gold" && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gold-gradient-subtle opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
