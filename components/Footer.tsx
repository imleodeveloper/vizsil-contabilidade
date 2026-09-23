"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Image
              src="/vizsil-logo.webp"
              alt="VIZSIL Contabilidade - Escritório contábil em Guarulhos e São Paulo"
              width={240}
              height={80}
              className="brightness-0 invert h-16 w-auto object-contain"
            />
            <p className="text-white/60 leading-relaxed">
              Simplificando a contabilidade para transformar o futuro do seu
              negócio com tecnologia e expertise.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/vizsilcontabilidade"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da VIZSIL Contabilidade"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="Facebook da VIZSIL Contabilidade"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn da VIZSIL Contabilidade"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Empresa</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/sobre" className="text-white/60 hover:text-white transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/60 hover:text-white transition-colors">
                  Nosso Blog
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="text-white/60 hover:text-white transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/carreiras" className="text-white/60 hover:text-white transition-colors">
                  Trabalhe Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/abrir-empresa" className="text-white/60 hover:text-white transition-colors">
                  Abrir Empresa
                </Link>
              </li>
              <li>
                <Link href="/deixar-mei" className="text-white/60 hover:text-white transition-colors">
                  Deixar de ser MEI
                </Link>
              </li>
              <li>
                <Link href="/trocar-contador" className="text-white/60 hover:text-white transition-colors">
                  Trocar de Contador
                </Link>
              </li>
              <li>
                <Link href="/contabilidade-completa" className="text-white/60 hover:text-white transition-colors">
                  Contabilidade Completa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-white/60">
                <Phone className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <Link
                  href="https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (11) 96797-9650
                </Link>
              </li>
              <li className="flex items-center gap-4 text-white/60">
                <Mail className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                E-mail indisponível
              </li>
              <li className="flex items-start gap-4 text-white/60">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span>Rua Paschoalina Belloti 31, Jardim City — Guarulhos / SP — 07082-610</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2026 VIZSIL Contabilidade. Todos os direitos reservados.</p>
          <Link
            href="https://vierca.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white/70 transition-colors"
            aria-label="Desenvolvido pela Vierca - Soluções Digitais"
          >
            <span>Desenvolvido por</span>
            <Image
              src="/icon-vierca-svg.svg"
              alt="Vierca - Soluções Digitais"
              width={20}
              height={20}
              className="brightness-0 invert opacity-40 hover:opacity-70 transition-opacity"
            />
            <span className="font-medium">Vierca</span>
          </Link>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-[100px] rounded-full -mb-48 -mr-48" />
    </footer>
  );
}
