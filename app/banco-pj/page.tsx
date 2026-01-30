import ServicePage from "@/components/ServicePage";

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

export default function BancoPjPage() {
  return (
    <ServicePage
      eyebrow="Para sua empresa"
      title="Banco PJ"
      subtitle="integrado ao seu negócio"
      description="Tenha uma conta digital PJ com facilidades para pagamentos, recebimentos e conciliação. A VIZSIL orienta o melhor uso para manter seu financeiro organizado."
      heroVariant="split"
      benefitsVariant="rows"
      stepsVariant="cards"
      ctaVariant="compact"
      sectionOrder={["benefits", "steps", "cta"]}
      highlights={[
        "Conta digital para empresas",
        "Integração financeira",
        "Pagamentos e cobranças",
        "Conciliação simplificada",
      ]}
      benefits={[
        {
          title: "Controle financeiro",
          description:
            "Centralize entradas e saídas com visão clara do fluxo de caixa.",
        },
        {
          title: "Operações rápidas",
          description:
            "Pix, boletos e transferências com praticidade.",
        },
        {
          title: "Apoio contábil",
          description:
            "Integração para facilitar fechamento e relatórios.",
        },
      ]}
      steps={[
        {
          title: "Abertura da conta",
          description:
            "Auxiliamos o cadastro e validação dos documentos.",
        },
        {
          title: "Configuração inicial",
          description:
            "Organizamos categorias e integrações necessárias.",
        },
        {
          title: "Rotina financeira",
          description:
            "Pagamentos e recebimentos com suporte da VIZSIL.",
        },
        {
          title: "Conciliação",
          description:
            "Integramos extratos para fechamento contábil rápido.",
        },
      ]}
      cta={{
        title: "Quer uma conta PJ organizada?",
        description:
          "Fale com a VIZSIL e saiba como integrar seu banco à contabilidade.",
        href: whatsappHref,
        label: "Falar no WhatsApp",
      }}
    />
  );
}
