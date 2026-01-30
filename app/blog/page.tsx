"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Search, Calendar, User, ChevronRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

const categories = [
  "Todos",
  "Abertura de Empresa",
  "Simples Nacional",
  "CLT x PJ",
  "Tributação",
  "Gestão",
];

const blogPosts = [
  {
    title: "Como abrir uma empresa grátis em 2026",
    excerpt:
      "Descubra o passo a passo completo para formalizar seu negócio sem gastar com taxas de serviço e honorários de abertura.",
    date: "28 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "Abertura de Empresa",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=900",
    slug: "abertura-empresa-2026",
  },
  {
    title: "Simples Nacional 2026: Guia Completo de Alíquotas",
    excerpt:
      "Entenda tudo sobre o regime tributário mais escolhido pelos empreendedores e como economizar no DAS.",
    date: "25 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "Simples Nacional",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=900",
    slug: "simples-nacional-2026",
  },
  {
    title: "CLT ou PJ: Qual vale mais a pena para sua carreira?",
    excerpt:
      "Comparamos impostos, benefícios e flexibilidade para ajudar você a tomar a melhor decisão profissional.",
    date: "20 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "CLT x PJ",
    image:
      "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=900",
    slug: "clt-ou-pj-comparativo",
  },
  {
    title: "Tabela Simples Nacional Completa: Anexos e Fator R",
    excerpt:
      "Consulte as faixas de faturamento e descubra como o Fator R pode reduzir drasticamente seus impostos.",
    date: "15 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "Tributação",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=900",
    slug: "tabela-simples-nacional",
  },
  {
    title: "Guia Definitivo para ser PJ: Do zero ao primeiro faturamento",
    excerpt:
      "Tudo o que você precisa saber para se tornar um profissional PJ de sucesso com segurança jurídica.",
    date: "10 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "Gestão",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=900",
    slug: "guia-definitivo-pj",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {/* Blog Hero */}
        <section className="py-16 bg-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-gradient font-black tracking-[0.2em] text-xs uppercase"
              >
                Nosso Blog
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black mt-6 mb-8 tracking-tighter leading-tight"
              >
                Conhecimento que <br />
                <span className="text-gradient">gera crescimento</span>
              </motion.h1>

              <div className="relative max-w-xl">
                <input
                  type="text"
                  placeholder="Pesquisar artigos..."
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-accent outline-none backdrop-blur-md"
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40" />
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform translate-x-1/4" />
        </section>

        {/* Categories */}
        <section className="py-12 border-b border-gray-100 sticky top-20 bg-background/80 backdrop-blur-md z-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all",
                    i === 0
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden mb-8 shadow-2xl shadow-primary/5">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-primary uppercase tracking-wider">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-6 text-[11px] font-black uppercase tracking-widest text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar size={14} className="text-gradient" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <User size={14} className="text-gradient" />
                          {post.author}
                        </div>
                      </div>

                      <h2 className="text-2xl font-black text-primary leading-tight group-hover:text-gradient transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-600 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      <div className="pt-4 flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest group-hover:gap-4 transition-all">
                        Continuar Lendo
                        <ArrowRight size={16} className="text-gradient" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-20 flex justify-center items-center gap-4">
              <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <ChevronRight className="rotate-180" />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={cn(
                    "w-12 h-12 rounded-2xl font-bold transition-all",
                    n === 1
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-gray-50 text-gray-500 hover:bg-gray-100",
                  )}
                >
                  {n}
                </button>
              ))}
              <button className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <ChevronRight />
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gray-50 rounded-[64px] p-12 md:p-24 relative overflow-hidden">
              <div className="max-w-2xl relative z-10">
                <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter leading-tight mb-6">
                  Receba conteúdos <br />
                  <span className="text-gradient">
                    exclusivos no seu e-mail
                  </span>
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  Assine nossa newsletter e fique por dentro de todas as
                  novidades tributárias e dicas para o seu negócio.
                </p>
                <form className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="flex-1 bg-white border border-gray-100 rounded-2xl px-8 py-5 text-sm focus:ring-2 focus:ring-accent outline-none shadow-xl shadow-primary/5"
                  />
                  <button className="bg-primary text-white px-10 py-5 rounded-2xl font-black text-sm hover:bg-accent transition-all shadow-xl shadow-primary/20">
                    Assinar Agora
                  </button>
                </form>
              </div>
              <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.05] pointer-events-none hidden lg:block">
                <Image
                  src="/vizsil-contabilidade.webp"
                  alt="VIZSIL Contabilidade"
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
