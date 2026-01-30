import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function EmissorNfePage() {
  return (
    <ServicePage
      eyebrow="Para sua empresa"
      title="Emissor de nota fiscal"
      subtitle="rápido e integrado"
      description="Emita NF-e com praticidade e tenha seus documentos organizados. A VIZSIL oferece suporte completo para configuração e controle das notas da sua empresa."
      heroVariant="minimal"
      benefitsVariant="rows"
      stepsVariant="timeline"
      ctaVariant="compact"
      sectionOrder={["cta", "benefits", "steps"]}
      highlights={[
        "Emissão rápida de NF-e",
        "Histórico e organização fiscal",
        "Integração com rotina contábil",
        "Suporte especializado",
      ]}
      benefits={[
        {
          title: "Mais produtividade",
          description:
            "Emita notas em poucos cliques, sem retrabalho.",
        },
        {
          title: "Controle fiscal",
          description:
            "Centralize suas notas e mantenha tudo organizado.",
        },
        {
          title: "Compliance garantido",
          description:
            "Emissão alinhada às regras fiscais vigentes.",
        },
      ]}
      steps={[
        {
          title: "Cadastro e configuração",
          description:
            "Parametrizamos o emissor com os dados da empresa.",
        },
        {
          title: "Integração de produtos",
          description:
            "Organizamos itens e serviços para emissão correta.",
        },
        {
          title: "Emissão assistida",
          description:
            "Acompanhamos as primeiras emissões para garantir acerto.",
        },
        {
          title: "Acompanhamento contínuo",
          description:
            "Suporte recorrente para dúvidas e ajustes fiscais.",
        },
      ]}
      cta={{
        title: "Pronto para emitir NF-e com facilidade?",
        description:
          "Fale com a VIZSIL e tenha o emissor configurado para o seu negócio.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
