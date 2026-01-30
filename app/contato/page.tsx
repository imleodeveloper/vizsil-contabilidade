"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Bot,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

type ChatMessage = {
  role: "bot" | "user";
  text?: string;
  content?: React.ReactNode;
  kind?: "menu";
};

const whatsappHref =
  "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade";

const linkClassName =
  "text-gradient font-bold inline-flex items-center gap-1 transition-transform hover:scale-[1.05] hover:brightness-200";

const quickOptions = [
  "Abrir Empresa",
  "Falar com Contador",
  "Deixar de Ser MEI",
  "Trocar de Contador",
];

const abrirKeywords = [
  "abrir empresa",
  "abertura de empresa",
  "abrir cnpj",
  "abrir meu cnpj",
  "abrir negocio",
  "abrir negócio",
  "abrir firma",
  "quero abrir empresa",
  "quero abrir um cnpj",
  "quero criar empresa",
  "criar empresa",
  "abrir mei",
  "abrir me",
  "formalizar",
  "formalizar empresa",
  "abrir ltda",
  "abrir slu",
  "abrir eireli",
  "abrir empresa gratis",
  "abertura gratis",
  "registro de empresa",
  "registrar empresa",
  "abrir cnpj gratis",
  "começar empresa",
  "começar negócio",
];

const falarKeywords = [
  "falar com contador",
  "falar com contabilidade",
  "falar com especialista",
  "falar com consultor",
  "contato contador",
  "preciso de contador",
  "quero um contador",
  "falar com a vizsil",
  "falar com equipe",
  "falar com atendente",
  "falar com suporte",
  "quero atendimento",
  "atendimento humano",
  "chamar whatsapp",
  "falar no whatsapp",
  "whatsapp",
  "telefone",
  "ligar",
  "contato",
  "falar agora",
  "conversar com contador",
];

const deixarMeiKeywords = [
  "deixar de ser mei",
  "sair do mei",
  "migrar mei",
  "migrar de mei",
  "migrar para me",
  "desenquadrar mei",
  "desenquadramento mei",
  "mei para me",
  "mei para microempresa",
  "ultrapassei limite mei",
  "limite do mei",
  "mei estourou",
  "cresc i mei",
  "cresci no mei",
  "preciso sair do mei",
  "me torna me",
  "quero ser me",
  "alterar mei",
  "mudar mei",
  "transicao mei",
  "transição mei",
  "migrar para microempresa",
];

const trocarKeywords = [
  "trocar contador",
  "trocar de contador",
  "mudar contador",
  "mudar de contador",
  "trocar contabilidade",
  "mudar contabilidade",
  "migrar contador",
  "migrar contabilidade",
  "trocar para vizsil",
  "mudar para vizsil",
  "troca de contador",
  "mudanca de contador",
  "mudança de contador",
  "insatisfeito com contador",
  "contabilidade ruim",
  "trocar escritorio contabilidade",
  "trocar escritório contábil",
  "transferir contabilidade",
  "mudar escritorio",
  "mudar escritório",
  "trocando contador",
  "trocar empresa contabilidade",
];

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const matchesAny = (value: string, keywords: string[]) =>
  keywords.some((term) => value.includes(term));


const renderAbrirEmpresaMessage = () => (
  <div className="space-y-3 text-sm">
    <p>
      Para abrir sua empresa com segurança, organize o modelo societário e o
      regime tributário. Veja os detalhes:
    </p>
    <div className="flex flex-col gap-2">
      <a className={linkClassName} href="/abrir-empresa">
        Acesse o serviço de Abertura de Empresa
      </a>
      <a className={linkClassName} href="/blog/abertura-empresa-2026">
        Leia o guia completo no blog
      </a>
    </div>
  </div>
);

const renderFalarContadorMessage = () => (
  <div className="space-y-3 text-sm">
    <p>Fale direto com um contador pelo WhatsApp:</p>
    <a
      className={linkClassName}
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      Chamar no WhatsApp
    </a>
  </div>
);

const renderDeixarMeiMessage = () => (
  <div className="space-y-3 text-sm">
    <p>
      Se você ultrapassou o limite do MEI, a migração para ME é o caminho.
    </p>
    <a className={linkClassName} href="/deixar-mei">
      Veja como deixar de ser MEI
    </a>
  </div>
);

const renderTrocarContadorMessage = () => (
  <div className="space-y-3 text-sm">
    <p>Faça a troca de contador com suporte total da VIZSIL:</p>
    <a className={linkClassName} href="/trocar-contador">
      Quero trocar de contador
    </a>
  </div>
);

export default function ContatoPage() {
  const [inputValue, setInputValue] = useState("");

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    { role: "bot", kind: "menu" },
  ]);

  function sendMessage(text: string) {
    const messageText = text.trim();
    if (!messageText) return;

    const userMsg: ChatMessage = { role: "user", text: messageText };
    setChatMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const normalized = normalizeText(messageText);
      let botContent: React.ReactNode = renderFallbackMessage();

      if (matchesAny(normalized, abrirKeywords)) {
        botContent = renderAbrirEmpresaMessage();
      } else if (matchesAny(normalized, falarKeywords)) {
        botContent = renderFalarContadorMessage();
      } else if (matchesAny(normalized, deixarMeiKeywords)) {
        botContent = renderDeixarMeiMessage();
      } else if (matchesAny(normalized, trocarKeywords)) {
        botContent = renderTrocarContadorMessage();
      }

      setChatMessages((prev) => [
        ...prev,
        { role: "bot", content: botContent },
      ]);
    }, 1000);
  }

  function renderMenuMessage() {
    return (
      <div className="space-y-3">
        <p className="font-semibold text-primary">Como posso te ajudar?</p>
        <div className="flex flex-wrap gap-2 text-sm">
          {quickOptions.map((option) => (
            <span
              key={option}
              role="button"
              tabIndex={0}
              onClick={() => sendMessage(option)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  sendMessage(option);
                }
              }}
              className="text-gradient font-bold inline-flex items-center px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 transition-transform hover:scale-[1.05] hover:brightness-200 cursor-pointer"
            >
              {option}
            </span>
          ))}
        </div>
      </div>
    );
  }

  function renderFallbackMessage() {
    return (
      <div className="space-y-3 text-sm">
        <p>Sou uma automação e ainda não tenho respostas para essa pergunta.</p>
        <p>Você pode escolher uma destas opções:</p>
        {renderMenuMessage()}
      </div>
    );
  }


  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                Contato
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-primary mt-6 mb-8 tracking-tighter leading-[1.1]">
                Estamos prontos para <br />
                <span className="text-gradient">impulsionar seu negócio</span>
              </h1>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-lg">
                Escolha o canal de sua preferência ou utilize nossa automação
                inteligente para um atendimento imediato.
              </p>

              <div className="space-y-8 mb-12">
                {[
                  {
                    icon: Phone,
                    label: "Telefone / WhatsApp",
                    value: "(11) 96797-9650",
                    href: "https://wa.me/5511967979650?text=ol%C3%A1%20vim%20do%20site%20vizsil%20contabilidade",
                  },
                  {
                    icon: Mail,
                    label: "E-mail",
                    value: "Indisponível",
                    href: "#",
                  },
                  {
                    icon: MapPin,
                    label: "Localização",
                    value:
                      "Rua Paschoalina Belloti 31, Jardim City - Guarulhos / SP - 07082-610",
                    href: "#",
                  },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-6 group"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-lg shadow-primary/5 border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-1">
                        {item.label}
                      </p>
                      <p className="text-xl font-bold text-primary">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="flex gap-4">
                {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* AI Chat Automation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-[48px] shadow-2xl shadow-primary/10 border border-gray-100 overflow-hidden flex flex-col h-[700px] relative"
            >
              {/* Chat Header */}
              <div className="p-8 bg-primary text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                      <Bot size={28} />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-4 border-primary rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">VIZSIL AI</h3>
                    <div className="flex items-center gap-2 text-xs text-gradient font-bold uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      Online agora
                    </div>
                  </div>
                </div>
                <Sparkles className="text-gradient" />
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/50">
                {chatMessages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 10,
                      x: msg.role === "user" ? 20 : -20,
                    }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] p-5 rounded-[24px] text-sm font-medium leading-relaxed ${
                        msg.role === "user"
                          ? "bg-primary text-white rounded-tr-none shadow-xl shadow-primary/20"
                          : "bg-white text-gray-700 border border-gray-100 rounded-tl-none shadow-sm"
                      }`}
                    >
                      {msg.kind === "menu"
                        ? renderMenuMessage()
                        : msg.content ?? msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Input Area */}
              <form
                onSubmit={handleSendMessage}
                className="p-6 bg-white border-t border-gray-100 flex gap-3"
              >
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Descreva o que você precisa..."
                  className="flex-1 bg-gray-50 border-none rounded-2xl px-6 py-4 text-sm focus:ring-2 focus:ring-accent outline-none font-medium"
                />
                <button
                  type="submit"
                  className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-accent transition-all shadow-lg shadow-primary/20 group"
                >
                  <Send
                    size={24}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </button>
              </form>

              {/* Decorative Background */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
                <Image
                  src="/vizsil-contabilidade.webp"
                  alt=""
                  width={400}
                  height={400}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
