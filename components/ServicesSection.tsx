"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  UserMinus,
  ArrowRightLeft,
  Calculator,
  FileText,
  Briefcase,
  Monitor,
  Receipt,
  ShieldCheck,
  Banknote,
  CreditCard,
  HeartPulse,
  Dumbbell,
  Stethoscope,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Serviços de Contabilidade",
    items: [
      {
        title: "Abrir empresa grátis",
        icon: Building2,
        description: "Comece seu negócio sem taxas de serviço.",
      },
      {
        title: "Deixar de ser MEI",
        icon: UserMinus,
        description: "Migração segura para Microempresa.",
      },
      {
        title: "Trocar de contador",
        icon: ArrowRightLeft,
        description: "Migre para a VIZSIL de forma simples.",
      },
      {
        title: "Contabilidade completa",
        icon: Calculator,
        description: "Gestão fiscal, contábil e trabalhista.",
      },
      {
        title: "Assessoria Contábil",
        icon: FileText,
        description: "Suporte especializado para sua tomada de decisão.",
      },
    ],
  },
  {
    category: "Para sua empresa",
    items: [
      {
        title: "Escritório Virtual",
        icon: Briefcase,
        description: "Endereço fiscal e comercial para sua empresa.",
      },
      {
        title: "Emissor de Nota Fiscal",
        icon: Monitor,
        description: "Emita notas de forma rápida e integrada.",
      },
      {
        title: "Certificado Digital",
        icon: ShieldCheck,
        description: "Identidade digital para assinar documentos.",
      },
      {
        title: "Banco PJ",
        icon: Banknote,
        description: "Conta digital integrada com sua contabilidade.",
      },
      {
        title: "Cobrança de Clientes",
        icon: CreditCard,
        description: "Gestão de recebíveis automatizada.",
      },
    ],
  },
  {
    category: "Para você",
    items: [
      {
        title: "Plano de Saúde",
        icon: HeartPulse,
        description: "Proteção para você e sua família.",
      },
      {
        title: "Academias",
        icon: Dumbbell,
        description: "Bem-estar e saúde física.",
      },
      {
        title: "Psicologia e Nutrição",
        icon: Stethoscope,
        description: "Cuidado integral com sua saúde mental e alimentar.",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gradient font-black tracking-[0.2em] text-xs uppercase"
          >
            Nossos Serviços
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-primary mt-4 tracking-tighter"
          >
            Soluções completas para <br />
            <span className="text-gradient">cada etapa do seu negócio</span>
          </motion.h2>
        </div>

        <div className="space-y-24">
          {services.map((category, catIndex) => (
            <div key={category.category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-black text-primary mb-10 flex items-center gap-4"
              >
                <span className="w-8 h-1 bg-accent rounded-full" />
                {category.category}
              </motion.h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="p-8 rounded-[32px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
