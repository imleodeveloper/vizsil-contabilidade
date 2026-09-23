import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deixar de ser MEI em Guarulhos | Migração MEI para ME",
  description:
    "Ultrapassou o limite do MEI? A VIZSIL Contabilidade faz a migração do MEI para Microempresa (ME) em Guarulhos e São Paulo com suporte completo e sem complicação.",
  keywords: [
    "deixar de ser MEI Guarulhos",
    "migrar MEI para ME",
    "desenquadramento MEI",
    "MEI para microempresa",
    "limite MEI ultrapassado",
    "contabilidade para MEI",
  ],
  alternates: { canonical: "https://vizsil.com.br/deixar-mei" },
  openGraph: {
    title: "Deixar de ser MEI | Migração MEI para ME | VIZSIL Guarulhos",
    description:
      "Ultrapassou o limite do MEI? Migre para ME com suporte especializado da VIZSIL Contabilidade em Guarulhos.",
    url: "https://vizsil.com.br/deixar-mei",
  },
};

export default function DeixarMeiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
