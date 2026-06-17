"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { luxuryEase } from "@/lib/animations";

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  className?: string;
  delay?: number;
  mode?: "words" | "chars";
  once?: boolean;
}

const tagMap = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
};

export function TextReveal({
  text,
  as = "h2",
  className,
  delay = 0,
  mode = "words",
  once = true,
}: TextRevealProps) {
  const Component = tagMap[as];
  const parts = mode === "words" ? text.split(" ") : text.split("");

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
      className={cn("flex flex-wrap", className)}
      aria-label={text}
    >
      {parts.map((part, index) => (
        <span key={`${part}-${index}`} className="overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { opacity: 0, y: "100%" },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: luxuryEase,
                  delay: mode === "chars" ? delay + index * 0.03 : delay,
                },
              },
            }}
          >
            {part}
            {mode === "words" && index < parts.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}
