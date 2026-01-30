import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function AssessoriaContabilPage() {
  return (
    <ServicePage
      eyebrow="Serviços de Contabilidade"
      title="Assessoria contábil"
      subtitle="para decisões estratégicas"
      description="Conte com especialistas da VIZSIL para orientar sua empresa em planejamento tributário, indicadores e melhorias de processo. Decisões mais seguras e crescimento sustentável."
      heroVariant="image-side"
      heroImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400"
      benefitsVariant="rows"
      stepsVariant="timeline"
      ctaVariant="compact"
      sectionOrder={["steps", "cta", "benefits"]}
      highlights={[
        "Consultoria personalizada",
        "Análise de indicadores",
        "Planejamento tributário",
        "Apoio em tomada de decisões",
      ]}
      benefits={[
        {
          title: "Visão estratégica",
          description:
            "Entenda números-chave e escolha caminhos mais rentáveis.",
        },
        {
          title: "Riscos reduzidos",
          description:
            "Acompanhamento para evitar inconsistências fiscais.",
        },
        {
          title: "Rotina mais eficiente",
          description:
            "Processos simplificados para sobrar tempo ao seu time.",
        },
      ]}
      steps={[
        {
          title: "Diagnóstico consultivo",
          description:
            "Avaliamos o cenário atual e suas metas de curto e médio prazo.",
        },
        {
          title: "Plano de ação",
          description:
            "Definimos medidas práticas para economia e performance.",
        },
        {
          title: "Acompanhamento",
          description:
            "Monitoramos indicadores e ajustamos estratégias.",
        },
        {
          title: "Revisões periódicas",
          description:
            "Análises estruturadas para manter a empresa em evolução.",
        },
      ]}
      cta={{
        title: "Quer apoio estratégico?",
        description:
          "Fale com a VIZSIL e receba uma análise consultiva do seu negócio.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
