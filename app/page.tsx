import CursorFollower from "../components/CursorFollower";
import ScrollProgress from "../components/ScrollProgress";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import { SITE, STACK_CORE, STACK_TOOLS } from "../lib/site";

// Structured data so search engines can connect this site to the right person.
// Deliberately limited to public, professional facts (no photo, age or private contact).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE.name,
  url: SITE.url,
  jobTitle: SITE.role,
  description: SITE.description,
  knowsAbout: [...STACK_CORE, ...STACK_TOOLS],
  sameAs: [SITE.github, SITE.linkedin].filter(Boolean),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F3F2ED] selection:bg-[#C8FF00] selection:text-[#0A0A0A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <ScrollProgress />
      <CursorFollower />

      <div className="mx-3 my-3 border border-[#F3F2ED]/20 sm:mx-4 sm:my-4 md:mx-7 md:my-6">
        <Header />

        <main id="main">
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
