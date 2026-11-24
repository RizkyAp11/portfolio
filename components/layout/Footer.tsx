import { SITE } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-[#F3F2ED]/20 px-5 py-4 md:px-8">
      <div className="flex flex-col justify-between gap-2 font-mono text-[11px] text-[#A6A6A6] sm:flex-row">
        <span>© 2026 {SITE.name.toUpperCase()}</span>

        <a
          href={SITE.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C8FF00] transition-opacity duration-300 hover:opacity-70 focus-visible:underline focus-visible:outline-none"
        >
          SOURCE ON GITHUB ↗
        </a>

        <span>{SITE.location.toUpperCase()}</span>
      </div>
    </footer>
  );
}
