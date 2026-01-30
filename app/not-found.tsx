"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center py-32 px-6 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-2xl w-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-[150px] md:text-[200px] font-black text-primary/10 leading-none tracking-tighter mb-[-40px] md:mb-[-60px]">
              404
            </h1>
            <h2 className="text-4xl md:text-6xl font-black text-primary tracking-tighter mb-6">
              Página não <span className="text-gradient">encontrada</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-md mx-auto leading-relaxed">
              Desculpe, o conteúdo que você está procurando não existe ou foi movido para um novo endereço.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/"
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-2xl font-black text-sm hover:bg-accent transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                <Home size={18} />
                Voltar para o Início
              </Link>
              <button
                onClick={() => window.history.back()}
                className="w-full sm:w-auto px-8 py-4 bg-white text-primary border-2 border-primary/10 rounded-2xl font-black text-sm hover:border-primary/30 transition-all flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} />
                Página Anterior
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Logo */}
        <div className="absolute bottom-10 right-10 opacity-10 pointer-events-none hidden lg:block">
          <Image src="/vizsil-contabilidade.webp" alt="" width={300} height={300} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
