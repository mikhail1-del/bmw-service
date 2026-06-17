"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type GoldButtonVariant = "gold" | "ghost" | "outline";
type GoldButtonSize = "sm" | "md" | "lg";

interface GoldButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: GoldButtonVariant;
  size?: GoldButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<GoldButtonVariant, string> = {
  gold: [
    "bg-gold-gradient text-luxury-black font-semibold",
    "shadow-gold hover:shadow-gold-lg",
    "border border-luxury-gold/40",
    "hover:brightness-110",
  ].join(" "),
  ghost: [
    "bg-transparent text-luxury-white",
    "border border-glass hover:border-gold",
    "hover:bg-white/[0.03]",
    "hover:shadow-gold-sm",
  ].join(" "),
  outline: [
    "bg-transparent text-luxury-gold-light",
    "border border-gold",
    "hover:bg-luxury-gold/10 hover:shadow-gold-sm",
  ].join(" "),
};

const sizeStyles: Record<GoldButtonSize, string> = {
  sm: "px-5 py-2.5 text-xs tracking-[0.15em] uppercase",
  md: "px-8 py-3.5 text-sm tracking-[0.12em] uppercase",
  lg: "px-10 py-4 text-sm tracking-[0.15em] uppercase",
};

export function GoldButton({
  variant = "gold",
  size = "md",
  href,
  className,
  children,
  disabled,
  ...props
}: GoldButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-none",
    "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-luxury-black",
    "disabled:pointer-events-none disabled:opacity-40",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  const shimmer =
    variant === "gold" ? (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    ) : null;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        <Link href={href} className={cn(classes, "group")}>
          {shimmer}
          <span className="relative z-10">{children}</span>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(classes, "group")}
      disabled={disabled}
      {...props}
    >
      {shimmer}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
