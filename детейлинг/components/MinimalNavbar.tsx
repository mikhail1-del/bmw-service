"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation } from "@/data/content";
import { cn } from "@/lib/utils";
import { TeslaButton } from "@/components/TeslaButton";

export function MinimalNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-tesla-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-14 max-w-content items-center justify-between px-6 lg:h-16 lg:px-10">
        <Link
          href="/"
          className={cn(
            "text-lg font-bold tracking-tight transition-colors",
            isScrolled ? "text-tesla-black" : "text-tesla-black",
          )}
        >
          AURA
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Навигация">
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
                  "text-sm font-medium transition-colors duration-300",
                  isActive
                    ? "text-tesla-black"
                    : "text-tesla-text hover:text-tesla-black",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <TeslaButton href="/contacts" size="sm">
            Записаться
          </TeslaButton>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center text-tesla-black md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-tesla-border bg-tesla-white md:hidden"
            aria-label="Мобильная навигация"
          >
            <ul className="px-6 py-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-base font-medium text-tesla-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <TeslaButton href="/contacts" className="w-full">
                  Записаться
                </TeslaButton>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
