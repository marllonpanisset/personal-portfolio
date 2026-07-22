import type { Metadata } from "next";

import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { profile } from "@/data/profile";

import { Nav } from "@/components/navigation/Nav";
import { Footer } from "@/components/sections/Footer";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://marllon.netlify.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${profile.name} — ${profile.role} & ${profile.roleSecondary}`,
    template: `%s — ${profile.name}`,
  },

  description: profile.tagline,

  keywords: [
    "Analista de Suporte Técnico",
    "Application Support",
    "Sustentação de Aplicações",
    "Suporte N1 N2",
    "Troubleshooting",
    "Marllon Panisset",
    "Cyber Security",
    "Desenvolvimento Web",
  ],

  authors: [
    {
      name: profile.name,
    },
  ],

  creator: profile.name,

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: `${profile.name} — ${profile.role} & ${profile.roleSecondary}`,
    description: profile.tagline,
    siteName: profile.name,
  },

  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role} & ${profile.roleSecondary}`,
    description: profile.tagline,
  },

  icons: {
    icon: "/favicon.svg",
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
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
