"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-background min-h-screen overflow-x-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06122405_1px,transparent_1px),linear-gradient(to_bottom,#06122405_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-0 w-3/5 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* ── Desktop image — absolute top-0 right-0, atrás do header ── */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="hidden lg:block absolute top-0 right-0 w-[38%] h-[85vh] z-[1]"
      >
        <Image
          src="/contadora-elisangela.webp"
          alt="Contadora especialista da VIZSIL, escritório de contabilidade em Guarulhos e São Paulo. Abertura de empresa, MEI e gestão fiscal."
          fill
          className="object-cover object-center rounded-bl-[140px]"
          priority
          sizes="46vw"
        />
        {/* Gradient blend — left edge */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        {/* Floating badge cards */}
        <div className="flex flex-col gap-2 absolute left-6 top-[42%] z-10">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/40 backdrop-blur-md border border-white/40 shadow-sm">
            <Shield className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="font-bold text-primary text-xs">Segurança Total</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/40 backdrop-blur-md border border-white/40 shadow-sm">
            <TrendingUp className="w-4 h-4 text-green-600 shrink-0" aria-hidden="true" />
            <span className="font-bold text-primary text-xs">Crescimento</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/40 backdrop-blur-md border border-white/40 shadow-sm">
            <Image
              src="/vizsil-logo.webp"
              alt="VIZSIL Dashboard"
              width={14}
              height={14}
              className="object-contain shrink-0"
            />
            <span className="font-bold text-primary text-xs">VIZSIL Dashboard</span>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* ── Mobile: foto no topo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="lg:hidden order-1 relative h-72 sm:h-96 w-full shrink-0"
        >
          <Image
            src="/contadora-elisangela.webp"
            alt="Contadora especialista da VIZSIL, escritório de contabilidade em Guarulhos e São Paulo."
            fill
            className="object-cover object-center rounded-bl-[60px]"
            priority
            sizes="100vw"
          />
        </motion.div>

        {/* ── Text content ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:w-[54%] flex flex-col justify-center relative z-[2]
                     px-6 sm:px-10 lg:pl-[8vw] lg:pr-12 pt-8 lg:pt-32 pb-20"
        >
          <h1 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            Transforme sua <br />
            <span className="text-gradient">Gestão Contábil</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-medium leading-relaxed mb-10 max-w-xl">
            A VIZSIL une tecnologia de ponta e expertise humana para simplificar
            a vida do empreendedor brasileiro. Abra sua empresa, migre seu MEI e
            tenha suporte especializado em Guarulhos e São Paulo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/abrir-empresa"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Abrir Empresa Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/contato"
              className="px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-bold text-lg hover:border-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Falar com Consultor
            </Link>
          </div>

          {/* Mobile cards */}
          <div className="mt-6 flex flex-wrap gap-2 lg:hidden">
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-blue-50 border border-blue-100">
              <Shield className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
              <span className="font-bold text-primary text-xs">Segurança Total</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-green-50 border border-green-100">
              <TrendingUp className="w-4 h-4 text-green-600 shrink-0" aria-hidden="true" />
              <span className="font-bold text-primary text-xs">Crescimento</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100">
              <Image src="/vizsil-logo.webp" alt="VIZSIL Dashboard" width={14} height={14} className="object-contain shrink-0" />
              <span className="font-bold text-primary text-xs">VIZSIL Dashboard</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:flex sm:items-center sm:gap-8">
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-black text-primary leading-tight">Atendimento dedicado</span>
              <span className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Especialistas</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-black text-primary leading-tight">Operação digital</span>
              <span className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Fluxo inteligente</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-black text-primary leading-tight">Equipe registrada</span>
              <span className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">Conformidade</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
