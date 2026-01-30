"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Globe,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const solutions = [
  {
    title: "Comércio em Geral",
    description:
      "Contabilidade especializada para varejo e atacado, com foco em gestão de estoque e tributação complexa.",
    icon: BarChart3,
  },
  {
    title: "Prestadores de Serviços",
    description:
      "Soluções ágeis para profissionais liberais e empresas de serviços, otimizando impostos e burocracia.",
    icon: Globe,
  },
  {
    title: "Profissionais da Saúde",
    description:
      "Assessoria específica para médicos, dentistas e clínicas, garantindo conformidade com normas setoriais.",
    icon: Users,
  },
];

export default function SolutionsSection() {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 skew-x-12 transform translate-x-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
              Por que nos escolher?
            </span>
            <h2 className="text-4xl md:text-6xl font-black mt-6 mb-8 tracking-tighter leading-[1.1]">
              Experiência que gera <br />
              <span className="text-gradient">resultados reais</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-lg">
              Transformamos desafios contábeis em decisões estratégicas com
              tecnologia e acompanhamento próximo. Nossa plataforma digital
              permite que você acompanhe tudo em tempo real.
            </p>

            <div className="space-y-6">
              {[
                "Atendimento humanizado e especializado",
                "Plataforma digital intuitiva e segura",
                "Redução estratégica de carga tributária",
                "Suporte via WhatsApp e Chat IA",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-gradient" />
                  </div>
                  <span className="font-semibold text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex gap-6 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                  <solution.icon className="w-8 h-8 text-gradient group-hover:text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-white/60 leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  <button className="flex items-center gap-2 text-gradient font-bold text-sm group/btn">
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
