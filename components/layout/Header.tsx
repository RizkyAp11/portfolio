"use client";

import { useEffect, useState } from "react";
import { NAV } from "../../lib/site";

function AvailabilityDot() {
  return (
    <span
      aria-hidden="true"
      className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
    />
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(NAV[0].id);

  const closeMenu = () => setMenuOpen(false);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="border-b border-ink/20 px-5 py-4 md:px-8">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="text-sm font-bold text-ink"
        >
          Rizky Aditya
        </a>

        <nav aria-label="Primary" className="hidden gap-8 text-sm md:flex">
          {NAV.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`underline-offset-8 transition-colors duration-200 hover:text-ink ${
                  isActive
                    ? "text-ink underline decoration-accent decoration-2"
                    : "text-muted"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 text-sm text-muted md:flex">
          <AvailabilityDot />
          Open to projects
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="py-2 text-sm text-muted transition-colors duration-200 hover:text-ink md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* MOBILE NAV — `inert` keeps collapsed links out of the tab order */}
      <div
        id="mobile-nav"
        inert={!menuOpen}
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-[360px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Mobile" className="mt-4 border-t border-ink/20 pt-2">
          {NAV.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
                className={`flex items-center justify-between border-b border-ink/10 py-4 text-sm transition-colors duration-200 hover:text-ink ${
                  isActive ? "text-ink" : "text-muted"
                }`}
              >
                {item.label}
                {isActive ? <AvailabilityDot /> : null}
              </a>
            );
          })}

          <div className="flex items-center gap-2 py-4 text-sm text-muted">
            <AvailabilityDot />
            Open to projects
          </div>
        </nav>
      </div>
    </header>
  );
}
