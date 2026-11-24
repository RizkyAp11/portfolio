"use client";

import { useEffect, useState } from "react";
import { NAV } from "../../lib/site";

function AvailabilityDot() {
  return (
    <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C8FF00]/50" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
    </span>
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
    <header className="border-b border-[#F3F2ED]/20 px-5 py-4 md:px-8">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="group font-mono text-sm font-bold transition-colors duration-300 hover:text-[#C8FF00] focus-visible:text-[#C8FF00] focus-visible:outline-none"
        >
          RIZKY
          <span className="text-[#C8FF00] transition-opacity duration-300 group-hover:opacity-70">
            /001
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden gap-8 font-mono text-xs md:flex"
        >
          {NAV.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`group relative transition-colors duration-300 focus-visible:text-[#C8FF00] focus-visible:outline-none ${
                  isActive
                    ? "text-[#C8FF00]"
                    : "text-[#A6A6A6] hover:text-[#C8FF00]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-1 left-0 h-px bg-[#C8FF00] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 font-mono text-[11px] text-[#A6A6A6] md:flex">
          <AvailabilityDot />
          OPEN TO PROJECTS
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="py-2 font-mono text-xs text-[#A6A6A6] transition-colors duration-300 hover:text-[#C8FF00] focus-visible:text-[#C8FF00] focus-visible:outline-none md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? "CLOSE ×" : "MENU +"}
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
        <nav aria-label="Mobile" className="mt-4 border-t border-[#F3F2ED]/20 pt-2">
          {NAV.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
                className={`group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-xs transition-colors duration-300 focus-visible:text-[#C8FF00] focus-visible:outline-none ${
                  isActive
                    ? "text-[#C8FF00]"
                    : "text-[#A6A6A6] hover:text-[#C8FF00]"
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            );
          })}

          <div className="flex items-center gap-2 py-4 font-mono text-[11px] text-[#A6A6A6]">
            <AvailabilityDot />
            OPEN TO PROJECTS
          </div>
        </nav>
      </div>
    </header>
  );
}
