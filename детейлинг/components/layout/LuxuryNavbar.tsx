"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactInfo, navigation } from "@/data/content";
import { cn } from "@/lib/utils";
import { GoldButton } from "@/components/ui/GoldButton";

export function LuxuryNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        isScrolled
          ? "border-b border-gold bg-luxury-black/80 shadow-gold-sm backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 lg:h-24 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl tracking-[0.2em] text-gold-gradient transition-opacity group-hover:opacity-80 lg:text-2xl">
            AURA
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.45em] text-luxury-muted">
            Detailing
          </span>
        </Link>

        <nav
          className="hidden items-center gap-10 lg:flex"
          aria-label="Основная навигация"
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "link-gold-underline text-xs uppercase tracking-[0.2em] transition-colors duration-500",
                  isActive
                    ? "text-luxury-white"
                    : "text-luxury-muted hover:text-luxury-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-2 text-xs tracking-wide text-luxury-muted transition-colors hover:text-luxury-gold"
          >
            <Phone className="h-3.5 w-3.5" />
            {contactInfo.phone}
          </a>
          <GoldButton href="/contacts" size="sm">
            Записаться
          </GoldButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center border border-gold text-luxury-white transition-colors hover:bg-luxury-gold/10 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 z-40 bg-luxury-black/90 backdrop-blur-md lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-20 z-50 border-b border-gold glass px-6 py-8 lg:hidden"
              aria-label="Мобильная навигация"
            >
              <ul className="flex flex-col gap-1">
                {navigation.map((item, index) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);

                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block px-3 py-3 text-sm uppercase tracking-[0.15em] transition-colors",
                          isActive
                            ? "text-gold-gradient"
                            : "text-luxury-muted hover:text-luxury-white",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-8 space-y-4 border-t border-gold pt-6">
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-3 px-3 text-sm text-luxury-muted"
                >
                  <Phone className="h-4 w-4 text-luxury-gold" />
                  {contactInfo.phone}
                </a>
                <GoldButton href="/contacts" className="w-full">
                  Записаться
                </GoldButton>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
