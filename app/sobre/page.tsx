"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Clock,
  CheckCircle2,
  Building2,
  Users,
  Rocket,
  Target,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                  Conheça a VIZSIL
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-primary mt-6 mb-8 tracking-tighter leading-[1.1]">
                  Transformando a <br />
                  <span className="text-gradient">Contabilidade no Brasil</span>
                </h1>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  A VIZSIL nasceu com o propósito de desburocratizar o
                  empreendedorismo. Unimos tecnologia de ponta com um
                  atendimento humano e especializado para que você foque no que
                  realmente importa: o crescimento do seu negócio.
                </p>
                <div className="flex flex-wrap gap-8">
                  <div>
                    <p className="text-xl font-black text-primary">
                      Equipe dedicada
                    </p>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">
                      Contadores especializados
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-primary">
                      Atendimento consultivo
                    </p>
                    <p className="text-xs font-black uppercase tracking-widest text-gray-400 mt-2">
                      Foco em resultado
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="aspect-square rounded-[64px] overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                    alt="Nosso Escritório"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-gray-100 hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-gradient">
                      <Shield size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-primary">
                        Segurança reforçada
                      </p>
                      <p className="text-xs text-gray-500 font-medium">
                        Dados protegidos
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission/Vision/Values */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Rocket,
                  title: "Missão",
                  desc: "Simplificar a gestão contábil através da tecnologia, impulsionando o sucesso de empreendedores em todo o Brasil.",
                },
                {
                  icon: Target,
                  title: "Visão",
                  desc: "Ser a maior e mais inovadora plataforma de contabilidade digital da América Latina, referência em eficiência e confiança.",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  desc: "Transparência total, foco no cliente, inovação constante e compromisso com a excelência em cada detalhe.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-gradient mb-8">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform translate-x-1/4" />
        </section>

        {/* Why VIZSIL */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                Diferenciais
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-primary mt-4 tracking-tighter">
                Por que escolher a VIZSIL?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Tecnologia Própria",
                  desc: "Plataforma intuitiva desenvolvida por nossos especialistas.",
                },
                {
                  title: "Atendimento VIP",
                  desc: "Suporte via WhatsApp e telefone em horário estendido.",
                },
                {
                  title: "Economia Real",
                  desc: "Redução estratégica de impostos para seu CNPJ.",
                },
                {
                  title: "Expertise Setorial",
                  desc: "Contadores especialistas em diversos nichos de mercado.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[32px] bg-gray-50 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-6">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
