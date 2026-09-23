import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abrir Empresa Grátis em Guarulhos e São Paulo",
  description:
    "Abra sua empresa grátis com a VIZSIL Contabilidade em Guarulhos e São Paulo. Sem honorários de abertura — você paga apenas as taxas governamentais. CNPJ rápido e sem burocracia.",
  keywords: [
    "abrir empresa Guarulhos",
    "abrir empresa São Paulo",
    "abertura de empresa grátis",
    "abrir CNPJ grátis",
    "como abrir empresa",
    "abrir LTDA",
    "abrir SLU",
    "contador para abrir empresa",
  ],
  alternates: { canonical: "https://vizsil.com.br/abrir-empresa" },
  openGraph: {
    title: "Abrir Empresa Grátis em Guarulhos | VIZSIL Contabilidade",
    description:
      "Abra seu CNPJ sem pagar honorários de abertura. A VIZSIL cuida de tudo em Guarulhos e São Paulo.",
    url: "https://vizsil.com.br/abrir-empresa",
  },
};

export default function AbrirEmpresaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
