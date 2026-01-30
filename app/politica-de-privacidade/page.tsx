"use client";

import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Shield,
  Lock,
  Eye,
  FileText,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
              Segurança & Transparência
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-primary mt-6 mb-8 tracking-tighter leading-tight">
              Política de <span className="text-gradient">Privacidade</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Na VIZSIL Contabilidade, a proteção dos seus dados é nossa
              prioridade absoluta. Esta política detalha como coletamos, usamos
              e protegemos suas informações.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: Shield,
                  title: "Proteção de Dados",
                  desc: "Utilizamos criptografia de nível bancário para todos os seus documentos.",
                },
                {
                  icon: Lock,
                  title: "Acesso Restrito",
                  desc: "Apenas profissionais autorizados têm acesso às suas informações fiscais.",
                },
                {
                  icon: Eye,
                  title: "Transparência",
                  desc: "Você tem controle total sobre quais dados são compartilhados conosco.",
                },
                {
                  icon: FileText,
                  title: "Conformidade LGPD",
                  desc: "Seguimos a Lei Geral de Proteção de Dados em nossos processos.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-8 rounded-[32px] bg-white shadow-xl shadow-primary/5 border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                    <item.icon size={24} />
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

            <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
              <section>
                <h2 className="text-2xl font-black text-primary flex items-center gap-3">
                  <div className="w-2 h-8 bg-accent rounded-full" />
                  1. Coleta de Informações
                </h2>
                <p>
                  Coletamos informações necessárias para a prestação de serviços
                  contábeis, incluindo dados cadastrais (nome, CPF, CNPJ),
                  informações fiscais e documentos societários. Esses dados são
                  fornecidos voluntariamente por você ao contratar nossos
                  serviços ou utilizar nossa plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-black text-primary flex items-center gap-3">
                  <div className="w-2 h-8 bg-accent rounded-full" />
                  2. Uso dos Dados
                </h2>
                <p>Seus dados são utilizados exclusivamente para:</p>
                <ul className="space-y-4">
                  {[
                    "Cumprimento de obrigações fiscais e legais perante os órgãos governamentais.",
                    "Processamento de folha de pagamento e gestão trabalhista.",
                    "Comunicação sobre atualizações tributárias e prazos importantes.",
                    "Melhoria contínua de nossa plataforma digital e experiência do usuário.",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2
                        size={20}
                        className="text-gradient mt-1 shrink-0"
                      />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-black text-primary flex items-center gap-3">
                  <div className="w-2 h-8 bg-accent rounded-full" />
                  3. Compartilhamento com Terceiros
                </h2>
                <p>
                  Não vendemos ou alugamos seus dados pessoais. O
                  compartilhamento ocorre apenas com órgãos públicos (Receita
                  Federal, Prefeituras, Juntas Comerciais) para a execução dos
                  serviços contratados ou com parceiros tecnológicos essenciais
                  para a operação da plataforma VIZSIL.
                </p>
              </section>

              <section className="p-8 rounded-[40px] bg-primary text-white">
                <h2 className="text-2xl font-black mb-4">
                  Dúvidas sobre seus dados?
                </h2>
                <p className="text-white/70 mb-8">
                  Nosso encarregado de proteção de dados (DPO) está à disposição
                  para esclarecer qualquer ponto desta política.
                </p>
                <a
                  href="mailto:dpo@vizsil.com.br"
                  className="inline-flex items-center gap-2 font-bold text-gradient hover:text-white transition-colors"
                >
                  Falar com o DPO
                  <ArrowRight size={20} />
                </a>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
