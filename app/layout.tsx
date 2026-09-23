import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingAIBubble from "@/components/FloatingAIBubble";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://vizsil.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VIZSIL Contabilidade | Contabilidade em Guarulhos e São Paulo",
    template: "%s | VIZSIL Contabilidade",
  },
  description:
    "Escritório de contabilidade em Guarulhos e São Paulo. Abertura de empresa grátis, migração de MEI, Simples Nacional, gestão fiscal e suporte especializado para empreendedores.",
  keywords: [
    "contabilidade em Guarulhos",
    "contabilidade em São Paulo",
    "contador em Guarulhos",
    "contador em São Paulo",
    "abrir empresa Guarulhos",
    "abrir CNPJ grátis",
    "abertura de empresa grátis",
    "deixar de ser MEI Guarulhos",
    "migração MEI para ME",
    "trocar de contador",
    "Simples Nacional",
    "contabilidade digital",
    "contabilidade online",
    "escritório contábil Guarulhos",
    "VIZSIL Contabilidade",
    "contabilidade para empresas",
    "gestão fiscal",
    "BPO financeiro",
    "contabilidade para MEI",
    "contabilidade para PJ",
  ],
  authors: [{ name: "VIZSIL Contabilidade", url: siteUrl }],
  creator: "VIZSIL Contabilidade",
  publisher: "VIZSIL Contabilidade",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "VIZSIL Contabilidade",
    title: "VIZSIL Contabilidade | Contabilidade em Guarulhos e São Paulo",
    description:
      "Escritório de contabilidade em Guarulhos e São Paulo. Abertura de empresa grátis, migração de MEI, Simples Nacional e suporte especializado.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VIZSIL Contabilidade - Escritório contábil em Guarulhos e São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIZSIL Contabilidade | Contabilidade em Guarulhos e São Paulo",
    description:
      "Escritório de contabilidade em Guarulhos e São Paulo. Abra sua empresa grátis.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  verification: {
    google: "",
  },
  category: "contabilidade",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: "VIZSIL Contabilidade",
  description:
    "Escritório de contabilidade em Guarulhos e São Paulo especializado em abertura de empresa, migração de MEI, Simples Nacional e gestão fiscal.",
  url: siteUrl,
  telephone: "+55-11-96797-9650",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Paschoalina Belloti, 31",
    addressLocality: "Guarulhos",
    addressRegion: "SP",
    postalCode: "07082-610",
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -23.455,
    longitude: -46.533,
  },
  areaServed: [
    { "@type": "City", name: "Guarulhos" },
    { "@type": "City", name: "São Paulo" },
    { "@type": "State", name: "São Paulo" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.instagram.com/vizsilcontabilidade"],
  priceRange: "$$",
  serviceType: [
    "Abertura de Empresa",
    "Contabilidade",
    "Gestão Fiscal",
    "Migração MEI",
    "Simples Nacional",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <FloatingAIBubble />
      </body>
    </html>
  );
}
