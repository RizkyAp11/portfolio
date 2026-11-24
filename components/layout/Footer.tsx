import { SITE } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/20 px-5 py-4 md:px-8">
      <div className="flex flex-col justify-between gap-2 text-sm text-muted sm:flex-row">
        <span>© 2026 {SITE.name}</span>

        <a
          href={SITE.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="underline-offset-4 transition-colors duration-200 hover:text-ink hover:underline"
        >
          Source on GitHub ↗
        </a>

        <span>{SITE.location}</span>
      </div>
    </footer>
  );
}
