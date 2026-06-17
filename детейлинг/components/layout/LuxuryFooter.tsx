import { Instagram, MessageCircle, Send } from "lucide-react";
import Link from "next/link";
import { contactInfo, navigation, siteConfig } from "@/data/content";
import { GoldDivider } from "@/components/ui/GoldDivider";

export function LuxuryFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-luxury-graphite">
      <GoldDivider width="full" className="absolute inset-x-0 top-0" />

      <div className="mx-auto max-w-content px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-display text-xl tracking-[0.2em] text-gold-gradient">
                AURA
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-luxury-muted">
                Detailing
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-luxury-muted">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h3 className="eyebrow-luxury">Навигация</h3>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="link-gold-underline text-sm text-luxury-muted transition-colors hover:text-luxury-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow-luxury">Контакты</h3>
            <ul className="mt-5 space-y-3 text-sm text-luxury-muted">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className="transition-colors hover:text-luxury-gold"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className="transition-colors hover:text-luxury-gold"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.address}</li>
            </ul>

            <div className="mt-6 flex gap-3">
              {[
                { href: contactInfo.social.whatsapp, icon: MessageCircle, label: "WhatsApp" },
                { href: contactInfo.social.telegram, icon: Send, label: "Telegram" },
                { href: contactInfo.social.instagram, icon: Instagram, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center border border-gold text-luxury-muted transition-all hover:border-luxury-gold hover:text-luxury-gold hover:shadow-gold-sm"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <GoldDivider width="full" className="my-10 opacity-50" />

        <div className="flex flex-col gap-2 text-xs text-luxury-muted/60 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} {siteConfig.name}. Все права защищены.</p>
          <p className="font-accent italic text-luxury-platinum/40">
            Искусство совершенства
          </p>
        </div>
      </div>
    </footer>
  );
}
