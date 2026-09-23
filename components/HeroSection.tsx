"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-screen">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#06122405_1px,transparent_1px),linear-gradient(to_bottom,#06122405_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute bottom-0 left-0 w-3/5 h-1/3 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* ── MOBILE: photo at top (order-1), cut by fixed header ── */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-1 lg:order-2 lg:w-[45%] relative h-72 sm:h-96 lg:h-auto lg:min-h-screen shrink-0"
        >
          <Image
            src="/contadora-elisangela.webp"
            alt="Contadora especialista da VIZSIL, escritório de contabilidade em Guarulhos e São Paulo. Abertura de empresa, MEI e gestão fiscal."
            fill
            className="object-cover object-top rounded-bl-[60px] lg:rounded-bl-[80px]"
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
          />
          {/* Gradient blend left edge (desktop) */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />

          {/* Floating cards — desktop only, overlaid on photo */}
          <div className="hidden lg:block absolute bottom-12 left-6 right-6 space-y-3 z-10">
            <div className="flex gap-3">
              <div className="flex-1 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl shadow-black/10">
                <Shield className="w-7 h-7 text-primary mb-2" aria-hidden="true" />
                <h3 className="font-bold text-primary text-sm mb-1">Segurança Total</h3>
                <p className="text-xs text-gray-600">Seus dados protegidos com tecnologia de ponta.</p>
              </div>
              <div className="flex-1 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl shadow-black/10">
                <TrendingUp className="w-7 h-7 text-green-600 mb-2" aria-hidden="true" />
                <h3 className="font-bold text-primary text-sm mb-1">Crescimento</h3>
                <p className="text-xs text-gray-600">Foque no seu negócio, nós cuidamos da burocracia.</p>
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/80 shadow-xl shadow-black/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src="/vizsil-logo.webp"
                  alt="VIZSIL Contabilidade - Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-primary">VIZSIL Dashboard</h3>
                <p className="text-sm text-gray-600">Acesse seus impostos e documentos em um só lugar.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Text content ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 lg:w-[55%] flex flex-col justify-center relative z-10
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
          <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
              <Shield className="w-7 h-7 text-primary mb-2" aria-hidden="true" />
              <h3 className="font-bold text-primary text-sm mb-1">Segurança Total</h3>
              <p className="text-xs text-gray-600">Seus dados protegidos com tecnologia de ponta.</p>
            </div>
            <div className="p-4 rounded-2xl bg-green-50 border border-green-100">
              <TrendingUp className="w-7 h-7 text-green-600 mb-2" aria-hidden="true" />
              <h3 className="font-bold text-primary text-sm mb-1">Crescimento</h3>
              <p className="text-xs text-gray-600">Foque no seu negócio, nós cuidamos da burocracia.</p>
            </div>
            <div className="col-span-2 p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-sm shrink-0">
                <Image
                  src="/vizsil-logo.webp"
                  alt="VIZSIL Contabilidade"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-primary text-sm">VIZSIL Dashboard</h3>
                <p className="text-xs text-gray-600">Acesse seus impostos e documentos em um só lugar.</p>
              </div>
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
