import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function CertificadoDigitalPage() {
  return (
    <ServicePage
      eyebrow="Para sua empresa"
      title="Certificado digital"
      subtitle="com emissão segura"
      description="Tenha seu certificado digital A1 ou A3 com suporte da VIZSIL. Cuidamos da emissão, renovação e instalação para você assinar documentos com segurança."
      heroVariant="floating"
      benefitsVariant="grid"
      stepsVariant="timeline"
      ctaVariant="banner"
      sectionOrder={["steps", "benefits", "cta"]}
      highlights={[
        "Tipos A1 e A3",
        "Emissão e renovação assistidas",
        "Suporte na instalação",
        "Segurança para assinaturas digitais",
      ]}
      benefits={[
        {
          title: "Agilidade",
          description:
            "Processo rápido com orientação em todas as etapas.",
        },
        {
          title: "Confiabilidade",
          description:
            "Certificado válido para NF-e, e-CAC e documentos oficiais.",
        },
        {
          title: "Suporte contínuo",
          description:
            "Ajuda para instalação, uso e renovação.",
        },
      ]}
      steps={[
        {
          title: "Escolha do tipo",
          description:
            "Indicamos o certificado ideal para sua empresa.",
        },
        {
          title: "Validação de dados",
          description:
            "Organizamos documentação e validação necessária.",
        },
        {
          title: "Emissão e instalação",
          description:
            "Acompanhamos a emissão e configuramos o uso.",
        },
        {
          title: "Renovação planejada",
          description:
            "Alertas e suporte para renovação no prazo.",
        },
      ]}
      cta={{
        title: "Precisa do seu certificado digital?",
        description:
          "Converse com a VIZSIL e receba suporte completo para emissão.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
