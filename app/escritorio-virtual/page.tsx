import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function EscritorioVirtualPage() {
  return (
    <ServicePage
      eyebrow="Para sua empresa"
      title="Escritório virtual"
      subtitle="com endereço estratégico"
      description="Tenha endereço fiscal e comercial para sua empresa com gestão completa de correspondências. Uma solução prática para reduzir custos e manter sua empresa regular."
      heroVariant="image-side"
      heroImage="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1400"
      benefitsVariant="chips"
      stepsVariant="cards"
      ctaVariant="banner"
      sectionOrder={["benefits", "steps", "cta"]}
      highlights={[
        "Endereço fiscal e comercial",
        "Recebimento de correspondências",
        "Privacidade e segurança",
        "Uso em registros oficiais",
      ]}
      benefits={[
        {
          title: "Economia mensal",
          description:
            "Reduza custos fixos de aluguel e estrutura física.",
        },
        {
          title: "Imagem profissional",
          description:
            "Endereço adequado para registros e comunicação com clientes.",
        },
        {
          title: "Gestão organizada",
          description:
            "Notificações e controle das correspondências recebidas.",
        },
      ]}
      steps={[
        {
          title: "Escolha do plano",
          description:
            "Defina o pacote ideal para o seu perfil de empresa.",
        },
        {
          title: "Comprovação de dados",
          description:
            "Enviamos os documentos necessários para ativação.",
        },
        {
          title: "Registro do endereço",
          description:
            "Utilize o endereço nos órgãos competentes e contratos.",
        },
        {
          title: "Gestão contínua",
          description:
            "Receba atualizações sobre correspondências e demandas.",
        },
      ]}
      cta={{
        title: "Quer um escritório virtual completo?",
        description:
          "Converse com a VIZSIL e escolha o melhor pacote para sua empresa.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
