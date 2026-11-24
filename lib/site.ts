/**
 * Single source of truth for everything personal on the site.
 * Edit this file to change copy, links and projects — no need to touch components.
 *
 * Optional fields (linkedin, cvUrl, school) render nothing while they are empty.
 * Fill them in and the matching buttons/rows appear automatically.
 */

export interface SiteConfig {
  name: string;
  url: string;
  role: string;
  title: string;
  description: string;
  location: string;
  email: string;
  github: string;
  githubHandle: string;
  repo: string;
  instagram: string;
  instagramHandle: string;
  openTo: string;
  currently: string;
  /** e.g. "https://www.linkedin.com/in/your-handle" */
  linkedin?: string;
  /** e.g. "/cv-rizky-aditya-pratama.pdf" (put the PDF in /public) */
  cvUrl?: string;
  /** e.g. "SMK Negeri 1 …" or "Universitas …" */
  school?: string;
}

export const SITE: SiteConfig = {
  name: "Rizky Aditya Pratama",
  url: "https://portfoliorizky.vercel.app",
  role: "Student Frontend Developer",
  title: "Rizky Aditya Pratama — Student Frontend Developer",
  description:
    "Student frontend developer from Indonesia building responsive web interfaces with Next.js, TypeScript and Tailwind CSS. See projects and get in touch.",
  location: "Indonesia",
  email: "rizkyadityapratama421@gmail.com",
  github: "https://github.com/RizkyAp11",
  githubHandle: "github.com/RizkyAp11",
  repo: "https://github.com/RizkyAp11/portfolio",
  instagram: "https://instagram.com/adit.ptama",
  instagramHandle: "@adit.ptama",
  openTo: "Website and UI projects",
  currently:
    "Building new web projects and sharpening my frontend skills through real-world work.",
  linkedin: undefined,
  cvUrl: undefined,
  school: undefined,
};

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/** Shown in the hero. Only list what you actually use. */
export const STACK_CORE = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

/** Shown in About, next to the core stack. */
export const STACK_TOOLS = ["HTML & CSS", "Git & GitHub", "Vercel"];

export interface Project {
  number: string;
  title: string;
  category: string;
  role: string;
  year: string;
  status: "Live" | "In progress" | "Archived";
  summary: string;
  /** Concrete, checkable facts: what you built, decisions you made, results. */
  highlights: string[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Optional screenshot. Put the file in /public and set real dimensions. */
  image?: { src: string; alt: string; width: number; height: number };
}

export const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Portfolio website",
    category: "Web / personal",
    role: "Design and development",
    year: "2026",
    status: "Live",
    summary:
      "The site you are on: a personal portfolio designed and built from scratch around typography and a restrained dark palette.",
    highlights: [
      "Responsive single-page layout, from small phones to wide desktops.",
      "Open Graph image, sitemap and robots rules generated with Next.js file conventions.",
      "Mostly server-rendered; the only client code is the nav and a scroll progress bar.",
      "Deployed on Vercel, with the source public on GitHub.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://portfoliorizky.vercel.app",
    repoUrl: "https://github.com/RizkyAp11/portfolio",
  },
];
