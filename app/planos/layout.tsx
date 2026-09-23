import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Planos e Preços | Contabilidade em Guarulhos",
  description:
    "Conheça os planos da VIZSIL Contabilidade para empresas em Guarulhos e São Paulo. Serviços contábeis completos com preço justo e atendimento especializado.",
  alternates: { canonical: "https://vizsil.com.br/planos" },
  openGraph: {
    title: "Planos de Contabilidade | VIZSIL Guarulhos e São Paulo",
    description:
      "Escolha o plano ideal para sua empresa. Contabilidade completa com suporte especializado em Guarulhos e São Paulo.",
    url: "https://vizsil.com.br/planos",
  },
};

export default function PlanosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
