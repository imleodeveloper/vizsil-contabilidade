import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function DeixarMeiPage() {
  return (
    <ServicePage
      eyebrow="Serviços de Contabilidade"
      title="Deixar de ser MEI"
      subtitle="com transição segura"
      description="Quando o MEI deixa de atender sua realidade, a VIZSIL faz o desenquadramento com tranquilidade. Fazemos a migração para ME mantendo a regularidade fiscal."
      heroVariant="floating"
      benefitsVariant="rows"
      stepsVariant="cards"
      ctaVariant="compact"
      sectionOrder={["benefits", "steps", "cta"]}
      highlights={[
        "Análise de faturamento e limites",
        "Migração para ME sem interrupções",
        "Atualização de atividades e CNAEs",
        "Suporte em obrigações adicionais",
      ]}
      benefits={[
        {
          title: "Evite multas",
          description:
            "Regularize sua situação antes de ultrapassar o teto do MEI.",
        },
        {
          title: "Cresça com estrutura",
          description:
            "Planeje tributos e obrigações trabalhistas com segurança.",
        },
        {
          title: "Apoio consultivo",
          description:
            "Indicamos o melhor enquadramento para o novo porte da empresa.",
        },
      ]}
      steps={[
        {
          title: "Diagnóstico do MEI",
          description:
            "Avaliamos faturamento, atividades e necessidades futuras.",
        },
        {
          title: "Escolha do regime",
          description:
            "Definimos o melhor enquadramento e atualizamos o cadastro.",
        },
        {
          title: "Regularização fiscal",
          description:
            "Cuidamos de declarações e encerramentos obrigatórios do MEI.",
        },
        {
          title: "Nova rotina contábil",
          description:
            "Implementamos a contabilidade mensal para a nova etapa.",
        },
      ]}
      cta={{
        title: "Quer migrar do MEI com segurança?",
        description:
          "Fale com a VIZSIL e receba orientação completa para crescer sem riscos.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
