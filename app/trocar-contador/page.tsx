import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function TrocarContadorPage() {
  return (
    <ServicePage
      eyebrow="Serviços de Contabilidade"
      title="Trocar de contador"
      subtitle="sem dor de cabeça"
      description="Migre sua contabilidade para a VIZSIL com organização e transparência. Fazemos o processo completo, revisamos pendências e garantimos continuidade na sua operação."
      heroVariant="split"
      benefitsVariant="chips"
      stepsVariant="timeline"
      ctaVariant="compact"
      sectionOrder={["benefits", "cta", "steps"]}
      highlights={[
        "Migração assistida",
        "Revisão de obrigações",
        "Conciliação de documentos",
        "Suporte dedicado na transição",
      ]}
      benefits={[
        {
          title: "Mais clareza",
          description:
            "Relatórios e indicadores simples para acompanhar seu negócio.",
        },
        {
          title: "Processos digitais",
          description:
            "Troca de documentos e atendimento em canais rápidos.",
        },
        {
          title: "Equipe especializada",
          description:
            "Contadores focados no seu segmento e no seu regime tributário.",
        },
      ]}
      steps={[
        {
          title: "Diagnóstico inicial",
          description:
            "Levantamos as obrigações e verificamos pendências abertas.",
        },
        {
          title: "Coleta de documentos",
          description:
            "Solicitamos documentos fiscais e contábeis necessários.",
        },
        {
          title: "Transferência formal",
          description:
            "Realizamos a troca junto aos órgãos competentes.",
        },
        {
          title: "Acompanhamento contínuo",
          description:
            "Você já começa com atendimento e rotina contábil organizada.",
        },
      ]}
      cta={{
        title: "Pronto para mudar para a VIZSIL?",
        description:
          "Converse com nosso time e receba um plano de migração personalizado.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
