import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";
import MobileMenu from "./components/mobile-menu";

const businessInfo = {
  name: "Barbearia do Cardoso",
  city: "Linda-a-Velha, Lisboa",
  address: "Av. 25 de Abril de 1974 11A, 2795-197 Linda-a-Velha",
  phone: "214 191 538",
  rating: "4.8 / 5 (215 reviews)"
};

export const metadata: Metadata = {
  title: "Barbearia em Linda-a-Velha, Lisboa | Barbearia do Cardoso",
  description:
    "Barbearia do Cardoso em Linda-a-Velha, Lisboa, com cortes masculinos, barba e grooming num ambiente moderno, profissional e acolhedor. Marque já online.",
  metadataBase: new URL("https://barbearia-do-cardoso.local"),
  openGraph: {
    title: "Barbearia do Cardoso em Linda-a-Velha",
    description:
      "Cortes clássicos, barba e grooming num espaço moderno em Linda-a-Velha, Lisboa. Atendimento profissional e ambiente relaxado.",
    locale: "pt_PT",
    type: "website"
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: businessInfo.name,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. 25 de Abril de 1974 11A",
    addressLocality: "Linda-a-Velha",
    addressRegion: "Lisboa",
    postalCode: "2795-197",
    addressCountry: "PT"
  },
  telephone: businessInfo.phone,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "215"
  }
};

const navItems = [
  { href: "/services", label: "Serviços" },
  { href: "/booking", label: "Marcação" },
  { href: "/gallery", label: "Galeria" },
  { href: "/about", label: "Sobre" },
  { href: "/contact", label: "Contacto" }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-PT">
      <body className="relative">
        <div className="noise-overlay" aria-hidden="true" />
        <header className="relative z-10">
          <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-5 md:px-6 md:py-6">
            <Link href="/" className="pr-3 font-display text-xl tracking-[0.08em] sm:text-2xl">
              {businessInfo.name}
            </Link>
            <div className="hidden items-center gap-6 text-sm uppercase tracking-[0.18em] text-ink/70 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href="/booking"
              className="hidden rounded-full bg-ink px-5 py-2 text-sm uppercase tracking-[0.2em] text-cream shadow-[var(--shadow-warm)] md:inline-flex"
            >
              Marcar
            </Link>
            <MobileMenu items={navItems} />
          </nav>
        </header>
        <main className="relative z-10">{children}</main>
        <footer className="relative z-10 border-t border-ink/10 bg-charcoal text-cream">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-xl">{businessInfo.name}</p>
              <p className="mt-3 text-sm text-cream/70">
                {businessInfo.address}
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cream/60">Contacto</p>
              <p className="mt-3 text-lg font-semibold">{businessInfo.phone}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cream/60">Horário</p>
              <p className="mt-3 text-sm text-cream/70">Seg-Sex: 9h00-19h00</p>
              <p className="text-sm text-cream/70">Sáb: 9h00-13h00</p>
              <p className="text-sm text-cream/70">Dom: encerrado</p>
            </div>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
