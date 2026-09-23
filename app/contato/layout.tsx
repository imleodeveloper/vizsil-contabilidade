import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale com a VIZSIL | Contabilidade em Guarulhos",
  description:
    "Entre em contato com a VIZSIL Contabilidade em Guarulhos. Atendimento por WhatsApp, telefone e chat. Tire suas dúvidas com nossos especialistas contábeis.",
  alternates: { canonical: "https://vizsil.com.br/contato" },
  openGraph: {
    title: "Contato | VIZSIL Contabilidade Guarulhos e São Paulo",
    description:
      "Fale com nossos contadores especializados. Atendimento rápido por WhatsApp em Guarulhos e São Paulo.",
    url: "https://vizsil.com.br/contato",
  },
};

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
