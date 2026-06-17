"use client";

import {
  motion,
  useMotionValue,
  useTransform,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "До",
  afterLabel = "После",
  caption,
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const position = useMotionValue(50);

  const clipPath = useTransform(
    position,
    (value) => `inset(0 ${100 - value}% 0 0)`,
  );

  const handleLeft = useTransform(position, (value) => `${value}%`);

  const clampPosition = useCallback(
    (percentage: number) => {
      position.set(Math.min(Math.max(percentage, 4), 96));
    },
    [position],
  );

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      clampPosition(((clientX - rect.left) / rect.width) * 100);
    },
    [clampPosition],
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handlePointerMove = (event: PointerEvent) => {
      if (event.buttons !== 1) return;
      updateFromClientX(event.clientX);
    };
    container.addEventListener("pointermove", handlePointerMove);
    return () => container.removeEventListener("pointermove", handlePointerMove);
  }, [updateFromClientX]);

  const handleDrag = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    updateFromClientX(info.point.x);
  };

  return (
    <div className={cn("w-full", className)}>
      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full select-none overflow-hidden border border-gold bg-luxury-surface shadow-gold-sm"
        onPointerDown={(event) => {
          if ((event.target as HTMLElement).closest("[data-handle]")) return;
          updateFromClientX(event.clientX);
        }}
        role="group"
        aria-label="Сравнение до и после"
      >
        <Image
          src={afterImage}
          alt={afterLabel}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
          draggable={false}
        />

        <motion.div className="absolute inset-0" style={{ clipPath }}>
          <Image
            src={beforeImage}
            alt={beforeLabel}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1200px"
            priority
            draggable={false}
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-4 top-4 glass px-3 py-1.5 text-xs uppercase tracking-wider text-luxury-white">
            {beforeLabel}
          </span>
          <span className="absolute right-4 top-4 glass px-3 py-1.5 text-xs uppercase tracking-wider text-luxury-white">
            {afterLabel}
          </span>
        </div>

        <motion.div
          className="pointer-events-none absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-gold-gradient shadow-gold"
          style={{ left: handleLeft }}
        />

        <motion.button
          type="button"
          data-handle
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          onDrag={handleDrag}
          style={{ left: handleLeft, x: "-50%" }}
          className="absolute top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 cursor-ew-resize touch-none items-center justify-center rounded-full border border-gold bg-luxury-black shadow-gold hover:shadow-gold-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luxury-gold/50"
          aria-label="Перетащите для сравнения"
        >
          <div className="flex items-center text-luxury-gold">
            <ChevronLeft className="h-4 w-4" />
            <ChevronRight className="h-4 w-4" />
          </div>
        </motion.button>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-luxury-black/80 to-transparent" />
      </div>

      {caption && (
        <p className="mt-4 text-center font-accent italic text-luxury-platinum">
          {caption}
        </p>
      )}
    </div>
  );
}
