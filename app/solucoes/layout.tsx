import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadoras Contábeis Grátis | VIZSIL Contabilidade",
  description:
    "Simuladores e calculadoras gratuitas: custo de abertura de CNPJ, PJ x CLT, Fator R do Simples Nacional e RPA. Tome decisões financeiras com segurança.",
  alternates: { canonical: "https://vizsil.com.br/solucoes" },
  openGraph: {
    title: "Calculadoras Contábeis Grátis | VIZSIL",
    description:
      "Calculadoras gratuitas para empreendedores: abertura de empresa, PJ x CLT, Fator R e RPA. Simule e decida com segurança.",
    url: "https://vizsil.com.br/solucoes",
  },
};

export default function SolucoesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
