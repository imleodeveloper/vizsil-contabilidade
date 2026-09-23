import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Contabilidade em Guarulhos",
  description:
    "Conheça todos os serviços da VIZSIL Contabilidade: abertura de empresa, migração de MEI, Simples Nacional, BPO financeiro, certificado digital e muito mais para empresas em Guarulhos e São Paulo.",
  alternates: { canonical: "https://vizsil.com.br/servicos" },
  openGraph: {
    title: "Serviços de Contabilidade | VIZSIL Guarulhos e São Paulo",
    description:
      "Abertura de empresa, migração de MEI, Simples Nacional, BPO financeiro e muito mais. Contabilidade completa em Guarulhos e São Paulo.",
    url: "https://vizsil.com.br/servicos",
  },
};

export default function ServicosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
