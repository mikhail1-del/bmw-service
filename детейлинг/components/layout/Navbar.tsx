"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { contactInfo, navigation } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
          ? "border-b border-platinum/20 bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-content items-center justify-between px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="text-lg font-semibold tracking-[0.15em] text-graphite transition-colors group-hover:text-accent">
            AURA
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-platinum">
            Detailing
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Основная навигация">
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
                  "relative text-sm font-medium tracking-wide transition-colors",
                  isActive ? "text-graphite" : "text-body hover:text-graphite",
                )}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1.5 left-0 h-px w-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={contactInfo.phoneHref}
            className="flex items-center gap-2 text-sm text-body transition-colors hover:text-graphite"
          >
            <Phone className="h-4 w-4 text-platinum" />
            {contactInfo.phone}
          </a>
          <Button href="/contacts" size="sm">
            Записаться
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-platinum/30 text-graphite transition-colors hover:bg-surface md:hidden"
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
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-20 z-40 bg-graphite/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-20 z-50 border-b border-platinum/20 bg-white px-6 py-8 md:hidden"
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
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "block rounded-sm px-3 py-3 text-lg font-medium transition-colors",
                          isActive
                            ? "bg-surface text-graphite"
                            : "text-body hover:bg-surface hover:text-graphite",
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-8 space-y-4 border-t border-platinum/20 pt-6">
                <a
                  href={contactInfo.phoneHref}
                  className="flex items-center gap-3 px-3 text-body"
                >
                  <Phone className="h-4 w-4 text-platinum" />
                  {contactInfo.phone}
                </a>
                <Button href="/contacts" className="w-full">
                  Записаться
                </Button>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
