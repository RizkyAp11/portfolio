import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-canvas px-4 py-4 text-ink md:px-7 md:py-6">
      <div className="flex min-h-[calc(100vh-2rem)] flex-col border border-ink/20 md:min-h-[calc(100vh-3rem)]">
        <header className="border-b border-ink/20 px-5 py-4 md:px-8">
          <Link href="/" className="text-sm font-bold text-ink">
            Rizky Aditya
          </Link>
        </header>

        <section className="flex flex-1 items-center px-5 py-16 md:px-10">
          <div className="w-full max-w-4xl">
            <p className="font-mono text-xs text-dim">Error 404</p>

            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              This page doesn&apos;t exist.
            </h1>

            <p className="mt-5 max-w-md text-sm leading-6 text-muted">
              The link may be broken, or the page may have been moved or
              removed.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex items-center border border-accent bg-accent px-5 py-3 font-mono text-xs font-bold text-canvas transition-colors duration-200 hover:bg-transparent hover:text-accent"
            >
              Back to home
            </Link>
          </div>
        </section>

        <footer className="border-t border-ink/20 px-5 py-4 text-sm text-muted md:px-8">
          © 2026 Rizky Aditya Pratama
        </footer>
      </div>
    </main>
  );
}
