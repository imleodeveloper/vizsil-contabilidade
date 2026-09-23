import { MetadataRoute } from "next";

const siteUrl = "https://vizsil.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/sobre", priority: 0.8, changeFrequency: "monthly" },
    { url: "/servicos", priority: 0.9, changeFrequency: "monthly" },
    { url: "/abrir-empresa", priority: 0.9, changeFrequency: "monthly" },
    { url: "/deixar-mei", priority: 0.9, changeFrequency: "monthly" },
    { url: "/trocar-contador", priority: 0.8, changeFrequency: "monthly" },
    { url: "/contabilidade-completa", priority: 0.8, changeFrequency: "monthly" },
    { url: "/assessoria-contabil", priority: 0.7, changeFrequency: "monthly" },
    { url: "/banco-pj", priority: 0.7, changeFrequency: "monthly" },
    { url: "/certificado-digital", priority: 0.7, changeFrequency: "monthly" },
    { url: "/cobranca-clientes", priority: 0.7, changeFrequency: "monthly" },
    { url: "/emissor-nfe", priority: 0.7, changeFrequency: "monthly" },
    { url: "/escritorio-virtual", priority: 0.7, changeFrequency: "monthly" },
    { url: "/planos", priority: 0.8, changeFrequency: "monthly" },
    { url: "/solucoes", priority: 0.7, changeFrequency: "monthly" },
    { url: "/blog", priority: 0.8, changeFrequency: "weekly" },
    { url: "/contato", priority: 0.8, changeFrequency: "monthly" },
    { url: "/politica-de-privacidade", priority: 0.3, changeFrequency: "yearly" },
  ] as const;

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${siteUrl}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
