"use client";

import { useMemo, useState } from "react";
import { portfolioPage } from "@/data/content";
import {
  portfolioCategories,
  portfolioItems,
} from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { ImageGallery, type GalleryItem } from "@/components/ImageGallery";
import { Lightbox } from "@/components/Lightbox";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/images";

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = useMemo(() => {
    const filtered =
      activeCategory === "Все"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeCategory);

    return filtered.map((item) => ({
      id: item.id,
      image: item.image,
      title: item.car,
      subtitle: item.work,
      category: item.category,
    }));
  }, [activeCategory]);

  return (
    <>
      <PageHero
        title={portfolioPage.title}
        subtitle={portfolioPage.subtitle}
        image={images.portfolio1}
      />

      <section className="section-tesla bg-tesla-white">
        <div className="mx-auto max-w-content px-6 lg:px-10">
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2.5 text-sm font-medium transition-all duration-300",
                  activeCategory === category
                    ? "bg-tesla-black text-white"
                    : "bg-tesla-gray text-tesla-text hover:text-tesla-black",
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <ImageGallery
            items={galleryItems}
            onItemClick={setLightboxItem}
          />
        </div>
      </section>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
    </>
  );
}
