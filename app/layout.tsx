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

export const metadata: Metadata = {
  title: "VIZSIL Contabilidade | Contabilidade Inteligente e Digital",
  description:
    "A VIZSIL une tecnologia e expertise para simplificar a vida do empreendedor. Abra sua empresa grátis, migre seu MEI e tenha suporte especializado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingAIBubble />
      </body>
    </html>
  );
}
