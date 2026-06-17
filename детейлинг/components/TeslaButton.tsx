"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

type TeslaButtonVariant = "primary" | "secondary";
type TeslaButtonSize = "sm" | "md" | "lg";

interface TeslaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TeslaButtonVariant;
  size?: TeslaButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TeslaButtonVariant, string> = {
  primary:
    "bg-tesla-red text-white hover:bg-[#d01920] border border-transparent",
  secondary:
    "bg-transparent text-tesla-black border border-tesla-black hover:bg-tesla-black hover:text-white",
};

const sizeStyles: Record<TeslaButtonSize, string> = {
  sm: "px-6 py-2.5 text-sm min-w-[160px]",
  md: "px-12 py-3 text-sm min-w-[200px]",
  lg: "px-14 py-3.5 text-base min-w-[240px]",
};

export function TeslaButton({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  disabled,
  ...props
}: TeslaButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-sm font-medium transition-all duration-300 ease-tesla",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tesla-red/40 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={classes}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
}
