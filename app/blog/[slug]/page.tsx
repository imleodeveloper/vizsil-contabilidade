"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

const blogContent: Record<string, any> = {
  "abertura-empresa-2026": {
    title: "Como abrir uma empresa grátis em 2026",
    category: "Abertura de Empresa",
    date: "28 Jan, 2026",
    author: "Equipe VIZSIL",
    readTime: "12 min",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1400",
    content: `
      <p>Abrir uma empresa no Brasil exige planejamento, mas o processo pode ser simples quando há orientação. Em 2026, o caminho está mais digital e integrado: tudo começa com a definição correta do tipo societário, do CNAE e do regime tributário, seguindo as etapas da REDESIM e da Receita Federal.</p>

      <h2>O que significa “abrir empresa grátis” na prática</h2>
      <p>Na VIZSIL, o serviço de abertura não possui honorários. Você paga apenas as taxas obrigatórias dos órgãos públicos (Junta Comercial e Prefeitura) e o certificado digital, quando necessário. Isso dá previsibilidade e evita surpresas no início da jornada.</p>

      <h2>Etapas fundamentais para abrir o CNPJ</h2>
      <ol>
        <li><strong>Consulta de viabilidade:</strong> valida o endereço e o nome empresarial junto ao município.</li>
        <li><strong>DBE/CNPJ:</strong> emissão do Documento Básico de Entrada junto à Receita Federal.</li>
        <li><strong>Registro na Junta Comercial:</strong> oficializa a empresa no estado.</li>
        <li><strong>Inscrições e licenças:</strong> inscrição estadual/municipal e alvarás quando exigidos.</li>
      </ol>

      <h2>Escolha do tipo de empresa</h2>
      <p>Para profissionais individuais, a SLU costuma ser uma escolha eficiente por separar patrimônio pessoal e empresarial. Para sociedades, a LTDA continua sendo a mais comum. A decisão depende do modelo de negócio, sócios e projeção de faturamento.</p>

      <h3>Documentos mais solicitados</h3>
      <ul>
        <li>RG e CPF dos sócios</li>
        <li>Comprovante de endereço</li>
        <li>Dados do local de funcionamento</li>
        <li>Definição de atividades (CNAE)</li>
      </ul>

      <h2>Regime tributário: o ponto que mais impacta o caixa</h2>
      <p>O Simples Nacional é o regime mais buscado por micro e pequenas empresas, mas nem sempre é o mais barato. Dependendo da atividade e do faturamento, o Lucro Presumido pode ser mais vantajoso. Um bom planejamento evita pagar impostos além do necessário.</p>

      <h3>Checklist rápido antes de abrir</h3>
      <ul>
        <li>Definir atividades e CNAEs corretos</li>
        <li>Validar endereço e viabilidade</li>
        <li>Escolher o regime tributário com suporte técnico</li>
        <li>Planejar pró-labore e emissão de notas</li>
      </ul>

      <blockquote>“O sucesso de um negócio começa com uma base sólida e regularizada. A VIZSIL estrutura a abertura para você começar certo e crescer com segurança.”</blockquote>
    `,
  },
  "simples-nacional-2026": {
    title: "Simples Nacional 2026: Guia Completo de Alíquotas",
    category: "Simples Nacional",
    date: "25 Jan, 2026",
    author: "Equipe VIZSIL",
    readTime: "14 min",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1400",
    content: `
      <p>O Simples Nacional reúne diversos tributos em uma única guia (DAS) e é o regime mais utilizado por micro e pequenas empresas. Mas o enquadramento correto, o faturamento anual e o anexo escolhido fazem toda a diferença no valor pago.</p>

      <h2>Como o Simples Nacional é organizado</h2>
      <p>O regime é dividido em cinco anexos, agrupando empresas por tipo de atividade. Cada anexo possui 6 faixas de faturamento, com alíquotas progressivas e valores a deduzir.</p>

      <h3>Resumo dos anexos</h3>
      <ul>
        <li><strong>Anexo I:</strong> comércio</li>
        <li><strong>Anexo II:</strong> indústria</li>
        <li><strong>Anexo III:</strong> serviços de menor complexidade</li>
        <li><strong>Anexo IV:</strong> serviços com maior folha</li>
        <li><strong>Anexo V:</strong> serviços intelectuais e tecnologia</li>
      </ul>

      <h2>Fator R: o divisor de águas</h2>
      <p>O Fator R compara a folha de salários com o faturamento. Quando a folha representa pelo menos 28% da receita, muitas atividades podem migrar do Anexo V para o Anexo III, reduzindo a carga tributária.</p>

      <h3>Vantagens práticas do Simples</h3>
      <ul>
        <li>Guia única (DAS) e menos burocracia</li>
        <li>Alíquotas progressivas que acompanham o crescimento</li>
        <li>Facilidade de regularidade fiscal</li>
      </ul>

      <h2>Cuidados que evitam custos desnecessários</h2>
      <p>É essencial acompanhar o faturamento dos últimos 12 meses e validar o CNAE correto. Mudanças de atividade ou de porte exigem atualização do enquadramento.</p>

      <blockquote>“O Simples é vantajoso quando o enquadramento está correto. O planejamento evita surpresas no DAS.”</blockquote>
    `,
  },
  "clt-ou-pj-comparativo": {
    title: "CLT ou PJ: Qual vale mais a pena para sua carreira?",
    category: "CLT x PJ",
    date: "20 Jan, 2026",
    author: "Equipe VIZSIL",
    readTime: "11 min",
    image:
      "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=1400",
    content: `
      <p>A dúvida entre aceitar uma proposta CLT ou atuar como PJ é comum em tecnologia, saúde, marketing e consultoria. A melhor escolha depende do seu perfil, estabilidade desejada e planejamento financeiro.</p>

      <h2>CLT: estabilidade e benefícios</h2>
      <p>No regime CLT, existe vínculo empregatício, salário fixo e benefícios legais como 13º, férias remuneradas e FGTS. O profissional tem previsibilidade de renda e menor exposição a riscos financeiros.</p>

      <h2>PJ: autonomia e potencial de renda</h2>
      <p>Como PJ, você emite notas fiscais e negocia contratos diretamente. Há maior liberdade para definir horários e atender múltiplos clientes, mas também mais responsabilidades contábeis e tributárias.</p>

      <h3>Principais diferenças em resumo</h3>
      <ul>
        <li>CLT: benefícios garantidos e menor risco</li>
        <li>PJ: flexibilidade, mas exige reserva financeira</li>
        <li>CLT: descontos de INSS e IR na folha</li>
        <li>PJ: impostos variam conforme o regime e pró-labore</li>
      </ul>

      <h2>Como calcular se vale a pena</h2>
      <p>Para o PJ compensar, o valor bruto costuma precisar ser maior que a remuneração CLT para cobrir férias, 13º e FGTS. O ideal é simular cenários com apoio contábil para comparar a renda líquida.</p>

      <h3>Cuidados ao optar por PJ</h3>
      <ul>
        <li>Ter contrato claro e sem subordinação direta</li>
        <li>Manter reserva para férias e imprevistos</li>
        <li>Organizar impostos e emissão de notas</li>
      </ul>

      <blockquote>“A decisão entre CLT e PJ é financeira e estratégica. Simular cenários ajuda a escolher com segurança.”</blockquote>
    `,
  },
  "tabela-simples-nacional": {
    title: "Tabela Simples Nacional Completa: Anexos e Fator R",
    category: "Tributação",
    date: "15 Jan, 2026",
    author: "Equipe VIZSIL",
    readTime: "13 min",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1400",
    content: `
      <p>A tabela do Simples Nacional é organizada por anexos e faixas de faturamento. Cada faixa possui alíquota nominal e parcela a deduzir, formando um cálculo progressivo.</p>

      <h2>O que são os anexos</h2>
      <p>Os anexos agrupam as empresas por atividade. Comércio, indústria e serviços são tratados de forma diferente, com alíquotas iniciais distintas.</p>

      <h3>Exemplo de faixas</h3>
      <ul>
        <li><strong>Até R$ 180 mil:</strong> alíquotas iniciais variam conforme o anexo</li>
        <li><strong>R$ 180 mil a R$ 360 mil:</strong> aumento progressivo com dedução</li>
        <li><strong>Acima de R$ 3,6 mi:</strong> alíquotas mais elevadas até R$ 4,8 mi</li>
      </ul>

      <h2>Fator R explicado</h2>
      <p>O Fator R é a relação entre folha de salários e faturamento. Quando a folha é igual ou superior a 28%, algumas atividades podem migrar do Anexo V para o III, reduzindo a carga tributária.</p>

      <h3>Como usar a tabela no dia a dia</h3>
      <ul>
        <li>Verificar o CNAE correto</li>
        <li>Calcular o faturamento dos últimos 12 meses</li>
        <li>Aplicar a alíquota efetiva (e não apenas a nominal)</li>
      </ul>

      <blockquote>“A tabela é o mapa do Simples Nacional. Saber ler as faixas evita pagar mais do que o necessário.”</blockquote>
    `,
  },
  "guia-definitivo-pj": {
    title: "Guia Definitivo para ser PJ: Do zero ao primeiro faturamento",
    category: "Gestão",
    date: "10 Jan, 2026",
    author: "Equipe VIZSIL",
    readTime: "16 min",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1400",
    content: `
      <p>Ser PJ pode abrir portas para contratos maiores e maior liberdade. Mas exige organização financeira e contábil desde o primeiro dia. Este guia reúne os passos essenciais para começar com segurança.</p>

      <h2>Primeiro passo: escolha do tipo de empresa</h2>
      <p>Para quem atua sozinho, a SLU costuma ser a opção ideal por separar o patrimônio pessoal. Em alguns casos, o MEI pode servir como porta de entrada, desde que a atividade seja permitida.</p>

      <h2>Documentação e abertura</h2>
      <p>Com CPF, comprovante de endereço e definição do CNAE, é possível formalizar a empresa em poucas etapas. O processo acontece via REDESIM e Receita Federal.</p>

      <h3>Rotina essencial do PJ</h3>
      <ul>
        <li>Emitir notas fiscais corretamente</li>
        <li>Definir pró-labore e separar finanças pessoais</li>
        <li>Controlar entradas e saídas mensalmente</li>
      </ul>

      <h2>Cuidados para manter a empresa saudável</h2>
      <p>Reserve parte da receita para impostos, acompanhe o faturamento anual e mantenha os documentos organizados. A contabilidade consultiva ajuda a evitar retrabalho e multas.</p>

      <h3>Checklist para o primeiro faturamento</h3>
      <ul>
        <li>Conta PJ ativa e integrada</li>
        <li>Emissor de nota fiscal configurado</li>
        <li>Planejamento de impostos do mês</li>
      </ul>

      <blockquote>“PJ bem estruturado começa com organização. Com o apoio certo, o crescimento vem mais rápido.”</blockquote>
    `,
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogContent[slug];

  if (!post) {
    return null; // Next.js will handle 404 if post is not found
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {/* Post Hero */}
        <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-12">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <span className="px-4 py-2 bg-accent rounded-full text-xs font-black text-white uppercase tracking-wider">
                  {post.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
                  {post.title}
                </h1>
                <div className="flex flex-wrap items-center gap-8 text-white/80 text-sm font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-gradient" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-gradient" />
                    {post.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gradient" />
                    {post.readTime} de leitura
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16">
              {/* Main Article */}
              <div className="lg:col-span-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-gradient font-black uppercase text-xs tracking-widest mb-12 group"
                >
                  <ArrowLeft
                    size={16}
                    className="group-hover:-translate-x-2 transition-all"
                  />
                  Voltar para o Blog
                </Link>

                <article
                  className="prose prose-lg prose-primary max-w-none
                    prose-headings:text-primary prose-headings:font-black prose-headings:tracking-tighter
                    prose-p:text-gray-600 prose-p:leading-relaxed
                    prose-strong:text-primary prose-strong:font-bold
                    prose-blockquote:border-l-accent prose-blockquote:bg-gray-50 prose-blockquote:p-8 prose-blockquote:rounded-3xl prose-blockquote:font-bold prose-blockquote:text-primary prose-blockquote:italic"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                      Compartilhar:
                    </span>
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                      <Share2 size={18} />
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 uppercase">
                      #Contabilidade
                    </span>
                    <span className="px-3 py-1 bg-gray-50 rounded-lg text-[10px] font-bold text-gray-400 uppercase">
                      #Empresa
                    </span>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 space-y-12">
                {/* CTA Card */}
                <div className="bg-primary rounded-[40px] p-10 text-white relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-black tracking-tighter mb-4">
                      Abra sua empresa grátis agora!
                    </h3>
                    <p className="text-white/70 text-sm mb-8 leading-relaxed">
                      Pague apenas as taxas do governo e deixe a burocracia com
                      a VIZSIL.
                    </p>
                    <Link
                      href="/contato"
                      className="block w-full py-4 bg-accent text-white rounded-2xl font-black text-center text-sm hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20"
                    >
                      Começar Agora
                    </Link>
                  </div>
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,_rgba(8,72,128,0.4)_0%,_transparent_70%)]" />
                </div>

                {/* Related Posts */}
                <div className="space-y-8">
                  <h3 className="text-xl font-black text-primary tracking-tight flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-accent rounded-full" />
                    Artigos Relacionados
                  </h3>
                  <div className="space-y-6">
                    {Object.entries(blogContent)
                      .filter(([s]) => s !== slug)
                      .slice(0, 3)
                      .map(([s, p]: [string, any]) => (
                        <Link
                          key={s}
                          href={`/blog/${s}`}
                          className="flex gap-4 group"
                        >
                          <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0 shadow-lg">
                            <Image
                              src={p.image}
                              alt={p.title}
                              width={100}
                              height={100}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="space-y-1">
                            <span className="text-[10px] font-black text-gradient uppercase tracking-widest">
                              {p.category}
                            </span>
                            <h4 className="text-sm font-bold text-primary leading-tight group-hover:text-gradient transition-colors line-clamp-2">
                              {p.title}
                            </h4>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
