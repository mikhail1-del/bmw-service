"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  category: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
  onItemClick?: (item: GalleryItem) => void;
  className?: string;
}

export function ImageGallery({
  items,
  onItemClick,
  className,
}: ImageGalleryProps) {
  return (
    <div
      className={cn(
        "columns-1 gap-4 sm:columns-2 lg:columns-3",
        className,
      )}
    >
      {items.map((item, index) => (
        <motion.button
          key={item.id}
          type="button"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          onClick={() => onItemClick?.(item)}
          className="group relative mb-4 w-full break-inside-avoid overflow-hidden bg-tesla-gray"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-[400ms] ease-tesla group-hover:scale-[1.04]"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-tesla-black/0 transition-colors duration-300 group-hover:bg-tesla-black/50" />
            <div className="absolute inset-x-0 bottom-0 translate-y-full p-5 text-left transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-xs font-medium uppercase tracking-wider text-white/70">
                {item.category}
              </p>
              <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}
