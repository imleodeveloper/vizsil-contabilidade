"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowRight, Shield, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    gsap.to(blobRef.current, {
      x: "random(-100, 100)",
      y: "random(-100, 100)",
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          ref={blobRef}
          className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full"
        />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00204005_1px,transparent_1px),linear-gradient(to_bottom,#00204005_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
            Transforme sua <br />
            <span className="text-gradient">Gestão Contábil</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed mb-10 max-w-xl">
            A VIZSIL une tecnologia de ponta e expertise humana para simplificar
            a vida do empreendedor brasileiro. Abra sua empresa, migre seu MEI e
            tenha suporte especializado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/abrir-empresa"
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-accent transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
            >
              Abrir Empresa Grátis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contato"
              className="px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-bold text-lg hover:border-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Falar com Consultor
            </Link>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-lg font-black text-primary">
                Atendimento dedicado
              </span>
              <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                Especialistas
              </span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-primary">
                Operação digital
              </span>
              <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                Fluxo inteligente
              </span>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="flex flex-col">
              <span className="text-lg font-black text-primary">
                Equipe registrada
              </span>
              <span className="text-sm text-gray-500 font-bold uppercase tracking-wider">
                Conformidade
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-100 animate-float">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-blue-50 border border-blue-100">
                <Shield className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-bold text-primary mb-2">Segurança Total</h3>
                <p className="text-sm text-gray-600">
                  Seus dados protegidos com tecnologia de ponta.
                </p>
              </div>
              <div className="p-6 rounded-3xl bg-green-50 border border-green-100">
                <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="font-bold text-primary mb-2">Crescimento</h3>
                <p className="text-sm text-gray-600">
                  Foque no seu negócio, nós cuidamos da burocracia.
                </p>
              </div>
              <div className="col-span-2 p-6 rounded-3xl bg-gray-50 border border-gray-100 flex items-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-white p-2 flex items-center justify-center shadow-sm">
                  <Image
                    src="/vizsil-contabilidade.webp"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-bold text-primary">VIZSIL Dashboard</h3>
                  <p className="text-sm text-gray-600">
                    Acesse seus impostos e documentos em um só lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-4 border-accent/20 rounded-full animate-pulse-soft" />
          <div
            className="absolute -bottom-20 -left-20 w-60 h-60 border-8 border-primary/5 rounded-full animate-float"
            style={{ animationDelay: "-2s" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
