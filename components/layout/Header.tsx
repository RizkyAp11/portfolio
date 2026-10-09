"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { href: "#home", label: "01. HOME" },
    { href: "#about", label: "02. ABOUT" },
    { href: "#projects", label: "03. PROJECTS" },
    { href: "#contact", label: "04. CONTACT" },
  ];

  const linkClass =
    "relative transition-colors duration-200 hover:text-[#C8FF00] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#C8FF00] after:transition-all after:duration-300 hover:after:w-full";

  return (
    <header className="border-b border-[#F3F2ED]/20 px-5 py-4 md:px-8">
      <div className="flex items-center justify-between">
        <a
          href="#home"
          onClick={closeMenu}
          className="font-mono text-sm font-bold transition-colors hover:text-[#C8FF00]"
        >
          RIZKY<span className="text-[#C8FF00]">/001</span>
        </a>

        <nav className="hidden gap-8 font-mono text-[10px] text-[#A6A6A6] md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 font-mono text-[9px] text-[#A6A6A6] md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
          ONLINE
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="font-mono text-[9px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "CLOSE ×" : "MENU +"}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-[320px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-4 border-t border-[#F3F2ED]/20 pt-2">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className={`group flex items-center justify-between border-b border-[#F3F2ED]/10 py-4 font-mono text-[10px] text-[#A6A6A6] transition-colors hover:text-[#C8FF00] ${
                index === links.length - 1 ? "border-b-0" : ""
              }`}
            >
              {link.label}
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          ))}

          <div className="flex items-center gap-2 py-4 font-mono text-[9px] text-[#A6A6A6]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C8FF00]" />
            ONLINE
          </div>
        </nav>
      </div>
    </header>
  );
}