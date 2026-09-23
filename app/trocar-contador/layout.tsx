import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trocar de Contador em Guarulhos | Migre para a VIZSIL",
  description:
    "Insatisfeito com seu atual contador? Troque para a VIZSIL Contabilidade em Guarulhos e São Paulo. Processo simples, sem burocracia e com suporte total durante a transição.",
  keywords: [
    "trocar de contador Guarulhos",
    "trocar de contador São Paulo",
    "mudar de contabilidade",
    "migrar para VIZSIL",
    "melhor contador Guarulhos",
    "contabilidade digital Guarulhos",
  ],
  alternates: { canonical: "https://vizsil.com.br/trocar-contador" },
  openGraph: {
    title: "Trocar de Contador em Guarulhos | VIZSIL Contabilidade",
    description:
      "Troque de contador sem complicação. A VIZSIL cuida de toda a transição para sua empresa em Guarulhos e São Paulo.",
    url: "https://vizsil.com.br/trocar-contador",
  },
};

export default function TrocarContadorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
