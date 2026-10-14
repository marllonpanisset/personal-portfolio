import type { Metadata } from "next";

import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { profile } from "@/data/profile";
import { defaultOpenGraphImage, siteUrl } from "@/lib/site-metadata";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: `${profile.name} — ${profile.role} | React, JavaScript e VTEX`,
    template: `%s — ${profile.name}`,
  },

  description:
    "Portfólio de Marllon Panisset, Desenvolvedor Front-End com React, JavaScript e VTEX. Projetos com Next.js, TypeScript, integrações Full Stack e testes automatizados.",

  category: "technology",

  alternates: {
    canonical: siteUrl,
  },

  keywords: [
    "Marllon Panisset",
    "Desenvolvedor Front-End",
    "Front-End Developer",
    "React",
    "JavaScript",
    "VTEX",
    "VTEX IO",
    "VTEX Legacy",
    "Next.js",
    "TypeScript",
    "HTML",
    "CSS",
    "Desenvolvimento Web",
    "E-commerce",
    "Portfólio Front-End",
  ],

  authors: [
    {
      name: profile.name,
      url: siteUrl,
    },
  ],

  creator: profile.name,

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,

    title: `${profile.name} — ${profile.role} | React, JavaScript e VTEX`,

    description:
      "Projetos Front-End com React, JavaScript e VTEX, além de Next.js, TypeScript e integrações Full Stack.",

    siteName: profile.name,

    images: [
      {
        url: defaultOpenGraphImage,
        width: 1200,
        height: 632,
        alt: `${profile.name} — Tecnologia e Desenvolvimento`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${profile.name} — ${profile.role} | React, JavaScript e VTEX`,

    description:
      "Projetos Front-End com React, JavaScript e VTEX, além de Next.js e TypeScript.",

    images: [defaultOpenGraphImage],
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
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-base"
        >
          Pular para o conteúdo
        </a>
        <Nav />

        {children}

        <Footer />
      </body>
    </html>
  );
}
