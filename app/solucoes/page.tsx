"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Calculator,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Calculadora de Custo para Abrir CNPJ",
    desc: "Descubra exatamente quanto você vai investir em taxas governamentais e certificados para formalizar seu negócio.",
    icon: Calculator,
    href: "/calculadoras/custo-cnpj",
  },
  {
    title: "Calculadora PJ x CLT",
    desc: "Compare ganhos reais, impostos e benefícios entre os modelos de contratação para tomar a melhor decisão.",
    icon: PieChart,
    href: "/calculadoras/pj-clt",
  },
  {
    title: "Calculadora de Fator R",
    desc: "Saiba se sua empresa pode economizar até 60% em impostos no Simples Nacional através do planejamento de pró-labore.",
    icon: TrendingUp,
    href: "/calculadoras/fator-r",
  },
  {
    title: "Calculadora de RPA Online",
    desc: "Simule os custos de contratação de autônomos e veja por que abrir um CNPJ é muito mais vantajoso.",
    icon: ShieldCheck,
    href: "/calculadoras/rpa",
  },
];

export default function SolucoesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {/* Solutions Hero */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent/40" />
          <div className="absolute -top-24 right-0 w-72 h-72 bg-white/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                Soluções Inteligentes
              </span>
              <h1 className="text-5xl md:text-7xl font-black mt-6 mb-8 tracking-tighter leading-tight">
                Ferramentas para <br />
                <span className="text-white">decidir com clareza</span>
              </h1>
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                Simuladores e calculadoras para planejar tributos, avaliar
                cenários e avançar com segurança em cada etapa do seu negócio.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Simulações rápidas",
                  "Dados oficiais",
                  "Visão comparativa",
                  "Apoio consultivo",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-6">
              {solutions.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[32px] bg-white/10 border border-white/20 backdrop-blur hover:bg-white/15 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white">
                      <item.icon size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed mb-6">
                        {item.desc}
                      </p>
                      <Link
                        href={item.href}
                        className="inline-flex items-center gap-2 text-gradient font-black uppercase text-[10px] tracking-widest"
                      >
                        Acessar Ferramenta
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tighter mb-8">
                  Use as soluções em poucos passos
                </h2>
                <p className="text-gray-600 leading-relaxed mb-10">
                  Ferramentas pensadas para dar visão rápida, reduzir dúvidas e
                  orientar suas decisões com segurança.
                </p>
                <div className="space-y-6">
                  {[
                    "Escolha a calculadora ideal para sua dúvida",
                    "Preencha informações básicas do seu cenário",
                    "Receba uma visão clara e objetiva dos resultados",
                  ].map((item, index) => (
                    <div key={item} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-black">
                        0{index + 1}
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Dados Atualizados",
                    desc: "Referências oficiais e tabelas vigentes.",
                  },
                  {
                    title: "Precisão Contábil",
                    desc: "Modelos validados por especialistas.",
                  },
                  {
                    title: "Acesso gratuito",
                    desc: "Ferramentas abertas para planejar.",
                  },
                  {
                    title: "Leitura rápida",
                    desc: "Resultados fáceis de entender.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="p-6 rounded-[28px] bg-gray-50 border border-gray-100"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary mb-6">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
