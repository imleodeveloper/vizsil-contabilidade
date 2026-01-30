"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "Como abrir uma empresa grátis em 2026",
    excerpt:
      "Descubra o passo a passo completo para formalizar seu negócio sem gastar com taxas de serviço.",
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
      "Entenda como funcionam os anexos, o Fator R e as faixas de faturamento.",
    date: "25 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "Simples Nacional",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    slug: "simples-nacional-2026",
  },
  {
    title: "CLT ou PJ: Qual vale mais a pena para sua carreira?",
    excerpt:
      "Compare benefícios, impostos e flexibilidade para decidir com segurança.",
    date: "20 Jan, 2026",
    author: "Equipe VIZSIL",
    category: "CLT x PJ",
    image:
      "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&q=80&w=900",
    slug: "clt-ou-pj-comparativo",
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gradient font-black tracking-[0.2em] text-xs uppercase"
            >
              Nosso Blog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-primary mt-4 tracking-tighter"
            >
              Conhecimento para <br />
              <span className="text-gradient">impulsionar seu negócio</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog"
              className="group flex items-center gap-2 text-primary font-black text-lg hover:text-gradient transition-colors"
            >
              Ver todos os posts
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-primary/5 transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-black text-primary uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-6 text-sm text-gray-500 mb-4 font-bold">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gradient" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-gradient" />
                    {post.author}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-gradient transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest group/link"
                >
                  Continuar Lendo
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
