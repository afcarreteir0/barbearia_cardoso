"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Abrir menu de navegação"
        aria-controls="mobile-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-white/80 text-ink shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
      >
        <span className="sr-only">Menu</span>
        <div className="flex flex-col gap-1.5">
          <span className="h-[2px] w-5 bg-current" />
          <span className="h-[2px] w-5 bg-current" />
          <span className="h-[2px] w-5 bg-current" />
        </div>
      </button>

      {isOpen ? (
        <>
          <button
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
            className="fixed inset-0 z-20 bg-black/45"
          />
          <div
            id="mobile-navigation"
            className="absolute right-0 top-[calc(100%+0.4rem)] z-30 w-[min(88vw,22rem)] overflow-hidden rounded-2xl border border-ink/10 bg-cream p-5 shadow-[var(--shadow-warm)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs uppercase tracking-[0.2em] text-ink/60">Navegação</p>
              <button
                type="button"
                onClick={closeMenu}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/15 text-lg leading-none text-ink/75"
                aria-label="Fechar navegação"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-2 text-sm uppercase tracking-[0.16em] text-ink/80 transition hover:bg-stone"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
