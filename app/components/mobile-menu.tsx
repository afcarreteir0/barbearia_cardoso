"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type NavItem = {
  href: string;
  label: string;
};

type MobileMenuProps = {
  items: NavItem[];
};

export default function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus();
      });
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      if (isOpen) {
        previousFocusRef.current?.focus();
      }
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="relative md:hidden">
      <button
        ref={triggerRef}
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

      {isMounted && isOpen
        ? createPortal(
            <div className="fixed inset-0 z-[100] md:hidden">
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={closeMenu}
                className="absolute inset-0 bg-black/55"
              />
              <aside
                id="mobile-navigation"
                role="dialog"
                aria-modal="true"
                aria-label="Menu de navegação"
                className="absolute right-0 top-0 flex h-dvh w-80 max-w-[88vw] flex-col overflow-y-auto border-l border-ink/10 bg-cream px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-[max(1.25rem,env(safe-area-inset-top))] shadow-[var(--shadow-warm)]"
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
                <div className="flex flex-col gap-1 pb-3">
                  {items.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      ref={index === 0 ? firstLinkRef : undefined}
                      onClick={closeMenu}
                      className="flex min-h-11 items-center rounded-xl px-3 py-2 text-sm uppercase tracking-[0.12em] text-ink/85 transition hover:bg-stone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember/40"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </aside>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
