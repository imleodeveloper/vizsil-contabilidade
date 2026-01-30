import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function ContabilidadeCompletaPage() {
  return (
    <ServicePage
      eyebrow="Serviços de Contabilidade"
      title="Contabilidade completa"
      subtitle="para sua empresa"
      description="A VIZSIL cuida da sua rotina fiscal, contábil e trabalhista em um único lugar. Você ganha previsibilidade, relatórios claros e suporte para decisões estratégicas."
      heroVariant="minimal"
      benefitsVariant="grid"
      stepsVariant="cards"
      ctaVariant="banner"
      sectionOrder={["steps", "benefits", "cta"]}
      highlights={[
        "Escrituração contábil e fiscal",
        "Apuração de impostos e guias",
        "Folha de pagamento e pró-labore",
        "Relatórios gerenciais mensais",
      ]}
      benefits={[
        {
          title: "Conformidade total",
          description:
            "Obrigações acessórias em dia para manter sua empresa regular.",
        },
        {
          title: "Visão financeira",
          description:
            "Indicadores e relatórios para acompanhar o desempenho.",
        },
        {
          title: "Suporte consultivo",
          description:
            "Atendimento especializado para dúvidas e planejamentos.",
        },
      ]}
      steps={[
        {
          title: "Onboarding digital",
          description:
            "Mapeamos sua operação e definimos o fluxo contábil ideal.",
        },
        {
          title: "Rotina mensal",
          description:
            "Processamos documentos, impostos e obrigações recorrentes.",
        },
        {
          title: "Entregas e guias",
          description:
            "Você recebe guias e relatórios dentro dos prazos.",
        },
        {
          title: "Acompanhamento contínuo",
          description:
            "Análises periódicas para manter seu negócio saudável.",
        },
      ]}
      cta={{
        title: "Tenha sua contabilidade em dia",
        description:
          "Fale com a VIZSIL e descubra um plano completo para sua empresa.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
