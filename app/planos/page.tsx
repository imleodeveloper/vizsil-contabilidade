"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MessageSquare, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-32 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-2xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/10 text-gradient font-bold text-xs uppercase tracking-[0.2em] mb-6">
              <Sparkles className="w-4 h-4" />
              Planos em breve
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6">
              Os planos ainda não{" "}
              <span className="text-gradient">estão disponíveis</span>
            </h1>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Estamos preparando opções sob medida para cada fase do seu
              negócio. Enquanto isso, fale com nosso time para receber
              orientação personalizada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm hover:bg-accent transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                Falar com Consultor
              </Link>
              <button
                onClick={() => window.history.back()}
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-bold text-sm hover:border-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Voltar
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
