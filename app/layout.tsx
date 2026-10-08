import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rizky Aditya Pratama — Digital Portfolio",
  description:
    "Personal portfolio of Rizky Aditya Pratama — showcasing projects, experiments, and progress as a student developer.",

  keywords: [
    "Rizky Aditya Pratama",
    "Rizky Aditya",
    "Rizky portfolio",
    "student developer",
    "web developer",
    "Next.js",
    "TypeScript",
  ],

  authors: [
    {
      name: "Rizky Aditya Pratama",
    },
  ],

  creator: "Rizky Aditya Pratama",

  openGraph: {
    title: "Rizky Aditya Pratama — Digital Portfolio",
    description:
      "Personal portfolio showcasing projects, experiments, and progress as a student developer.",
    url: "https://portfoliorizky.vercel.app",
    siteName: "Rizky Aditya Pratama",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rizky Aditya Pratama — Digital Portfolio",
    description:
      "Personal portfolio showcasing projects, experiments, and progress as a student developer.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}