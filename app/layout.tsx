
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  metadataBase: new URL("https://portfoliorizky.vercel.app"),

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

  authors: [{ name: "Rizky Aditya Pratama" }],
  creator: "Rizky Aditya Pratama",

  verification: {
    google: "zacg9J_0q6gSv-cV0sZGUBEHfxN3BewbCxilwY7iHhY",
  },

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}