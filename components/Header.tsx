"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Building2,
  Calculator,
  Briefcase,
  ShieldCheck,
  PieChart,
  Info,
  Newspaper,
  Lock,
  HelpCircle,
  MessageSquare,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  description: string;
  href: string;
  icon: React.ElementType;
  badge?: string;
}

interface MenuCategory {
  title: string;
  links: MenuItem[];
}

const companyLinks: MenuCategory[] = [
  {
    title: "Sobre a VIZSIL",
    links: [
      {
        name: "Conheça a VIZSIL",
        description: "Nossa história, missão e valores.",
        href: "/sobre",
        icon: Info,
      },
      {
        name: "Nosso Blog",
        description: "Conteúdo especializado para sua empresa.",
        href: "/blog",
        icon: Newspaper,
      },
      {
        name: "Privacidade",
        description: "Como protegemos seus dados.",
        href: "/politica-de-privacidade",
        icon: Lock,
      },
    ],
  },
  {
    title: "Suporte",
    links: [
      {
        name: "FAQ",
        description: "Dúvidas frequentes sobre nossos serviços.",
        href: "/#faq",
        icon: HelpCircle,
      },
      {
        name: "Contato",
        description: "Fale diretamente com um especialista.",
        href: "/contato",
        icon: MessageSquare,
      },
    ],
  },
];

const serviceLinks: MenuCategory[] = [
  {
    title: "Contabilidade",
    links: [
      {
        name: "Abrir Empresa Grátis",
        description: "Comece seu negócio sem taxas de serviço.",
        href: "/abrir-empresa",
        icon: Building2,
        badge: "Popular",
      },
      {
        name: "Deixar de ser MEI",
        description: "Migração segura para Microempresa.",
        href: "/deixar-mei",
        icon: Calculator,
      },
      {
        name: "Trocar de Contador",
        description: "Migre para a VIZSIL de forma simples.",
        href: "/trocar-contador",
        icon: Briefcase,
      },
    ],
  },
  {
    title: "Gestão Digital",
    links: [
      {
        name: "Contabilidade Completa",
        description: "Gestão fiscal, contábil e trabalhista.",
        href: "/contabilidade-completa",
        icon: ShieldCheck,
      },
      {
        name: "Assessoria Contábil",
        description: "Suporte especializado para decisões.",
        href: "/assessoria-contabil",
        icon: PieChart,
      },
    ],
  },
];

const solutionLinks: MenuCategory[] = [
  {
    title: "Para sua Empresa",
    links: [
      {
        name: "Escritório Virtual",
        description: "Endereço fiscal e comercial.",
        href: "/escritorio-virtual",
        icon: Building2,
      },
      {
        name: "Emissor de NF-e",
        description: "Emita notas de forma rápida.",
        href: "/emissor-nfe",
        icon: Calculator,
      },
      {
        name: "Certificado Digital",
        description: "Identidade digital para sua empresa.",
        href: "/certificado-digital",
        icon: ShieldCheck,
      },
      {
        name: "Banco PJ",
        description: "Conta digital integrada ao financeiro.",
        href: "/banco-pj",
        icon: Briefcase,
      },
      {
        name: "Cobrança de Clientes",
        description: "Gestão de recebíveis automatizada.",
        href: "/cobranca-clientes",
        icon: PieChart,
      },
    ],
  },
  {
    title: "Calculadoras",
    links: [
      {
        name: "Custo para Abrir CNPJ",
        description: "Simule os custos de abertura.",
        href: "/calculadoras/custo-cnpj",
        icon: Calculator,
      },
      {
        name: "PJ x CLT",
        description: "Compare os modelos de contratação.",
        href: "/calculadoras/pj-clt",
        icon: PieChart,
      },
    ],
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderMegaMenu = (categories: MenuCategory[]) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] bg-white rounded-[32px] shadow-2xl border border-gray-100 overflow-hidden p-8 z-50"
    >
      <div className="grid grid-cols-2 gap-12">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 border-b border-gray-50 pb-4 mb-6">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-all"
                  onClick={() => setActiveMenu(null)}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <link.icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-primary">
                        {link.name}
                      </span>
                      {link.badge && (
                        <span className="text-[9px] font-black uppercase bg-accent/10 text-gradient px-1.5 py-0.5 rounded">
                          {link.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6",
        isScrolled ? "py-3" : "py-6",
      )}
    >
      <div
        className={cn(
          "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full px-8 py-3",
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/20"
            : "bg-transparent",
        )}
      >
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center shrink-0">
          <Image
            src="/vizsil-contabilidade.webp"
            alt="VIZSIL Contabilidade"
            width={isScrolled ? 100 : 150}
            height={80}
            className="object-cover transition-all duration-500"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {[
            { name: "Sobre a VIZSIL", categories: companyLinks },
            { name: "Serviços", categories: serviceLinks },
            { name: "Soluções", categories: solutionLinks },
          ].map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveMenu(item.name)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <button
                className={cn(
                  "flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300",
                  activeMenu === item.name
                    ? "bg-primary text-white"
                    : "text-primary hover:bg-primary/5",
                )}
              >
                {item.name}
                <ChevronDown
                  size={16}
                  className={cn(
                    "transition-transform duration-300",
                    activeMenu === item.name && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {activeMenu === item.name && renderMegaMenu(item.categories)}
              </AnimatePresence>
            </div>
          ))}
          <Link
            href="/planos"
            className="px-5 py-2.5 rounded-full text-sm font-bold text-primary hover:bg-primary/5 transition-all"
          >
            Planos
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-3 rounded-full font-black text-sm hover:bg-accent transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group"
          >
            Abrir Empresa
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-primary bg-primary/5 rounded-xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col"
          >
            <div className="sticky top-0 z-10 bg-white/90 backdrop-blur border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/vizsil-contabilidade.webp"
                  alt="VIZSIL Contabilidade"
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </Link>
              <button
                className="p-2 text-primary bg-primary/5 rounded-xl"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pt-8 pb-12 space-y-8">
              {[
                { name: "Empresa", categories: companyLinks },
                { name: "Serviços", categories: serviceLinks },
                { name: "Soluções", categories: solutionLinks },
              ].map((section) => (
                <div key={section.name} className="space-y-6">
                  <h2 className="text-2xl font-black text-primary border-b border-gray-100 pb-2">
                    {section.name}
                  </h2>
                  <div className="grid gap-4">
                    {section.categories
                      .flatMap((c) => c.links)
                      .map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center gap-4 p-2"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-primary">
                            <link.icon size={20} />
                          </div>
                          <div>
                            <p className="font-bold text-primary">
                              {link.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
              <Link
                href="/planos"
                className="block w-full border border-primary/10 text-primary py-4 rounded-[20px] font-black text-center text-sm hover:border-primary/30 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Planos
              </Link>
              <Link
                href="/contato"
                className="block w-full bg-primary text-white py-5 rounded-[20px] font-black text-center text-lg shadow-xl shadow-primary/20"
                onClick={() => setMobileMenuOpen(false)}
              >
                Falar com Especialista
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
