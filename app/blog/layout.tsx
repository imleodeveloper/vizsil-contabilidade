import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog de Contabilidade | Dicas para Empreendedores",
  description:
    "Artigos e guias sobre contabilidade, abertura de empresa, Simples Nacional, CLT x PJ e gestão empresarial. Conteúdo gratuito da VIZSIL para empreendedores em Guarulhos e São Paulo.",
  alternates: { canonical: "https://vizsil.com.br/blog" },
  openGraph: {
    title: "Blog VIZSIL | Contabilidade, MEI, Simples Nacional e Empreendedorismo",
    description:
      "Guias e dicas de contabilidade para empreendedores brasileiros. Aprenda sobre abertura de empresa, impostos e gestão fiscal.",
    url: "https://vizsil.com.br/blog",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
