import { Instagram, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { contactInfo, navigation, siteConfig } from "@/data/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-platinum/20 bg-surface">
      <div className="mx-auto max-w-content px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col">
              <span className="text-lg font-semibold tracking-[0.15em] text-graphite">
                AURA
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-platinum">
                Detailing
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-platinum">
              Навигация
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-body transition-colors hover:text-graphite"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-platinum">
              Контакты
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-body">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="transition-colors hover:text-graphite"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className="transition-colors hover:text-graphite"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
              <li>{contactInfo.workingHours}</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <a
                href={contactInfo.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-platinum/30 text-body transition-all hover:border-graphite/30 hover:text-graphite"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-platinum/30 text-body transition-all hover:border-graphite/30 hover:text-graphite"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-sm border border-platinum/30 text-body transition-all hover:border-graphite/30 hover:text-graphite"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-platinum/20 pt-8 text-xs text-platinum md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {siteConfig.name}. Все права защищены.</p>
          <p>Премиальный детейлинг с вниманием к каждой детали.</p>
        </div>
      </div>
    </footer>
  );
}
