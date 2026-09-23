import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre a VIZSIL",
  description:
    "Conheça a VIZSIL Contabilidade, escritório contábil em Guarulhos e São Paulo. Nossa missão é simplificar a contabilidade para empreendedores com tecnologia e atendimento humanizado.",
  alternates: { canonical: "https://vizsil.com.br/sobre" },
  openGraph: {
    title: "Sobre a VIZSIL | Escritório de Contabilidade em Guarulhos",
    description:
      "Conheça a equipe e a missão da VIZSIL Contabilidade, referência em contabilidade digital em Guarulhos e São Paulo.",
    url: "https://vizsil.com.br/sobre",
  },
};

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
