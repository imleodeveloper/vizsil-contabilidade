import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function AbrirEmpresaPage() {
  return (
    <ServicePage
      eyebrow="Serviços de Contabilidade"
      title="Abrir empresa"
      subtitle="com economia e agilidade"
      description="Abra seu CNPJ com orientação completa da VIZSIL. Cuidamos do enquadramento ideal, dos registros necessários e da estrutura fiscal para você começar certo e sem burocracia."
      heroVariant="image-full"
      heroImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600"
      benefitsVariant="grid"
      stepsVariant="timeline"
      ctaVariant="banner"
      sectionOrder={["steps", "benefits", "cta"]}
      highlights={[
        "Abertura sem honorários",
        "Enquadramento tributário inteligente",
        "Registro na Junta e Prefeitura",
        "Checklist completo de documentos",
      ]}
      benefits={[
        {
          title: "Planejamento inicial",
          description:
            "Definição do melhor regime tributário e das atividades corretas para evitar custos futuros.",
        },
        {
          title: "Processo digital",
          description:
            "Assinaturas e protocolos online, com acompanhamento em tempo real.",
        },
        {
          title: "Segurança fiscal",
          description:
            "Conformidade desde o primeiro dia para evitar multas e pendências.",
        },
      ]}
      steps={[
        {
          title: "Diagnóstico do negócio",
          description:
            "Entendemos sua atividade e objetivo para montar a estrutura correta.",
        },
        {
          title: "Organização de documentos",
          description:
            "Enviamos um checklist e apoiamos na separação de tudo o que é necessário.",
        },
        {
          title: "Registro e CNPJ",
          description:
            "Protocolamos os órgãos competentes e acompanhamos até a liberação.",
        },
        {
          title: "Ativação contábil",
          description:
            "Seu negócio inicia já com contabilidade organizada e suporte recorrente.",
        },
      ]}
      cta={{
        title: "Pronto para abrir sua empresa?",
        description:
          "Fale com um especialista e receba o passo a passo personalizado para começar com segurança.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
