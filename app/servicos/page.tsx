"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Building2,
  UserMinus,
  ArrowRightLeft,
  Calculator,
  FileText,
  Briefcase,
  Monitor,
  ShieldCheck,
  Banknote,
  CreditCard,
  HeartPulse,
  Dumbbell,
  Stethoscope,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    category: "Serviços de Contabilidade",
    items: [
      {
        title: "Abrir empresa grátis",
        icon: Building2,
        description:
          "Comece seu negócio sem taxas de serviço e com suporte total no registro.",
        href: "/abrir-empresa",
      },
      {
        title: "Deixar de ser MEI",
        icon: UserMinus,
        description:
          "Migração segura e estratégica para o regime de Microempresa (ME).",
        href: "/deixar-mei",
      },
      {
        title: "Trocar de contador",
        icon: ArrowRightLeft,
        description:
          "Migre para a VIZSIL de forma simples, rápida e sem burocracia.",
        href: "/trocar-contador",
      },
      {
        title: "Contabilidade completa",
        icon: Calculator,
        description:
          "Gestão fiscal, contábil e trabalhista integrada em nossa plataforma.",
        href: "/contabilidade-completa",
      },
      {
        title: "Assessoria Contábil",
        icon: FileText,
        description:
          "Suporte especializado para tomadas de decisão e planejamento tributário.",
        href: "/assessoria-contabil",
      },
    ],
  },
  {
    category: "Para sua empresa",
    items: [
      {
        title: "Escritório Virtual",
        icon: Briefcase,
        description:
          "Endereço fiscal e comercial de prestígio para sua empresa digital.",
        href: "/escritorio-virtual",
      },
      {
        title: "Emissor de Nota Fiscal",
        icon: Monitor,
        description:
          "Emita notas fiscais de serviço de forma rápida e automatizada.",
        href: "/emissor-nfe",
      },
      {
        title: "Certificado Digital",
        icon: ShieldCheck,
        description:
          "Identidade digital para assinar documentos com validade jurídica.",
        href: "/certificado-digital",
      },
      {
        title: "Banco PJ",
        icon: Banknote,
        description:
          "Conta digital integrada diretamente com sua contabilidade digital.",
        href: "/banco-pj",
      },
      {
        title: "Cobrança de Clientes",
        icon: CreditCard,
        description:
          "Gestão de recebíveis e links de pagamento para seus clientes.",
        href: "/cobranca-clientes",
      },
    ],
  },
  {
    category: "Benefícios VIZSIL",
    items: [
      {
        title: "Plano de Saúde",
        icon: HeartPulse,
        description:
          "Proteção para você e sua família com condições exclusivas PJ.",
        href: "/contato",
      },
      {
        title: "Academias",
        icon: Dumbbell,
        description:
          "Acesso a redes de academias para manter sua saúde em dia.",
        href: "/contato",
      },
      {
        title: "Psicologia e Nutrição",
        icon: Stethoscope,
        description:
          "Cuidado integral com saúde mental e alimentar para você e seu time.",
        href: "/contato",
      },
    ],
  },
];

export default function ServicosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {/* Services Hero */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                Nosso Ecossistema
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-primary mt-6 mb-8 tracking-tighter leading-tight">
                Tudo o que você precisa <br />
                <span className="text-gradient">em um só lugar</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
                Da abertura do CNPJ à gestão diária e benefícios exclusivos. A
                VIZSIL simplifica sua jornada empreendedora com tecnologia e
                inteligência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        {services.map((section, sIndex) => (
          <section key={sIndex} className="py-16">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
              >
                <div className="w-12 h-1 bg-accent rounded-full" />
                <h2 className="text-3xl font-black text-primary tracking-tight">
                  {section.category}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="p-10 rounded-[48px] bg-white border border-gray-100 shadow-xl shadow-primary/5 hover:shadow-2xl hover:shadow-primary/10 transition-all group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-8">
                      {item.description}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-gradient font-black uppercase text-xs tracking-widest group/link"
                    >
                      Saiba Mais
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-2 transition-transform"
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-primary rounded-[64px] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
                  Pronto para começar sua <br />
                  <span className="text-gradient">história de sucesso?</span>
                </h2>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Link
                    href="/abrir-empresa"
                    className="px-10 py-5 bg-accent text-white rounded-2xl font-black text-lg hover:bg-white hover:text-primary transition-all shadow-xl shadow-accent/20"
                  >
                    Abrir Empresa Grátis
                  </Link>
                  <Link
                    href="/contato"
                    className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all backdrop-blur-md"
                  >
                    Falar com Consultor
                  </Link>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(8,72,128,0.3)_0%,_transparent_70%)]" />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
