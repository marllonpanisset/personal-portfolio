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

  description:
    "Portfólio profissional com projetos, estudos e artigos sobre tecnologia, desenvolvimento, suporte de aplicações e evolução na carreira de TI.",

  category: "technology",

  alternates: {
    canonical: siteUrl,
  },

  keywords: [
    "Marllon Panisset",
    "Tecnologia",
    "Desenvolvimento Web",
    "Desenvolvedor Web",
    "Desenvolvedor Front-End",
    "Front-End Developer",
    "Front-End",
    "Desenvolvimento de Aplicações Web",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "SQL",
    "Application Support",
    "Suporte de Aplicações",
    "Suporte N1 N2",
    "Sustentação de Sistemas",
    "Troubleshooting",
    "Infraestrutura",
    "Carreira em Tecnologia",
    "Projetos de Tecnologia",
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

    title: `${profile.name} — ${profile.role} & ${profile.roleSecondary}`,

    description:
      "Projetos, estudos e artigos sobre tecnologia, desenvolvimento, suporte de aplicações e minha evolução profissional.",

    siteName: profile.name,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Tecnologia e Desenvolvimento`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: `${profile.name} — ${profile.role} & ${profile.roleSecondary}`,

    description:
      "Projetos, estudos e artigos sobre tecnologia, desenvolvimento e evolução profissional.",

    images: ["/og-image.png"],
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
