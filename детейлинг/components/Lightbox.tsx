"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import type { GalleryItem } from "@/components/ImageGallery";

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export function Lightbox({ item, onClose }: LightboxProps) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-tesla-black/90 p-4 md:p-8"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 z-10 text-white md:right-8 md:top-8"
            aria-label="Закрыть"
          >
            <X className="h-8 w-8" />
          </button>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[85vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-tesla-dark">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <div className="mt-4 text-center text-white">
              <p className="text-sm uppercase tracking-wider text-white/60">
                {item.category}
              </p>
              <h3 className="mt-1 text-2xl font-bold">{item.title}</h3>
              <p className="mt-1 text-white/70">{item.subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
