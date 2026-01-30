import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function CobrancaClientesPage() {
  return (
    <ServicePage
      eyebrow="Para sua empresa"
      title="Cobrança de clientes"
      subtitle="com automação inteligente"
      description="Organize suas cobranças com boletos e lembretes automáticos. A VIZSIL ajuda a reduzir inadimplência e manter o fluxo de caixa saudável."
      heroVariant="image-full"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
      benefitsVariant="chips"
      stepsVariant="timeline"
      ctaVariant="banner"
      sectionOrder={["benefits", "cta", "steps"]}
      highlights={[
        "Boletos e links de pagamento",
        "Lembretes automáticos",
        "Controle de inadimplência",
        "Conciliação de recebíveis",
      ]}
      benefits={[
        {
          title: "Mais recebimentos",
          description:
            "Automação para reduzir atrasos e manter pagamentos em dia.",
        },
        {
          title: "Visibilidade total",
          description:
            "Acompanhe cobranças e resultados em tempo real.",
        },
        {
          title: "Organização financeira",
          description:
            "Integração das entradas para conciliação contábil.",
        },
      ]}
      steps={[
        {
          title: "Configuração inicial",
          description:
            "Definimos regras de cobrança e canais de pagamento.",
        },
        {
          title: "Emissão de cobranças",
          description:
            "Geramos boletos e links para seus clientes.",
        },
        {
          title: "Acompanhamento",
          description:
            "Monitoramos pagamentos e inadimplência.",
        },
        {
          title: "Conciliação",
          description:
            "Integração dos recebíveis com a contabilidade.",
        },
      ]}
      cta={{
        title: "Quer automatizar suas cobranças?",
        description:
          "Fale com a VIZSIL e conheça a solução ideal para seu negócio.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
