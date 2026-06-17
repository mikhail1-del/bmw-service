import { Instagram, Send } from "lucide-react";
import Link from "next/link";
import { contactInfo, navigation, siteConfig } from "@/data/content";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tesla-black text-white">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Link href="/" className="text-xl font-bold tracking-tight">
              AURA
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex gap-4">
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={contactInfo.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-6 text-sm text-white/50">
              {contactInfo.phone}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs text-white/40">
          © {currentYear} {siteConfig.name}. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
