"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Sparkles, X, Send, Bot as BotIcon } from "lucide-react";

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

export default function FloatingAIBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [
    {
      role: "bot",
      kind: "menu",
    },
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
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed bottom-8 right-8 z-[100]"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative group"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-accent blur-xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full" />

          {/* Main Bubble */}
          <div className="relative w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl border border-white/10 animate-float text-white">
            {isOpen ? <X className="w-8 h-8" /> : <Bot className="w-8 h-8" />}

            {/* Sparkles */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-1 -right-1"
            >
              <Sparkles className="w-5 h-5 text-gradient fill-accent" />
            </motion.div>
          </div>

          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-2xl shadow-xl border border-gray-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <p className="text-primary font-bold text-sm">
                Suporte com IA VIZSIL
              </p>
            </div>
          )}
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
              scale: 0.9,
              transformOrigin: "bottom right",
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-28 right-8 w-[350px] md:w-[400px] h-[500px] bg-white rounded-[32px] shadow-2xl border border-gray-100 z-[100] overflow-hidden flex flex-col"
          >
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <BotIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">VIZSIL AI</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-gradient">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Online agora
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/50">
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
                    className={`max-w-[85%] p-4 rounded-2xl text-xs font-medium ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10"
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

            <form
              onSubmit={handleSendMessage}
              className="p-4 bg-white border-t border-gray-100 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-gray-50 border-none rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-accent outline-none"
              />
              <button
                type="submit"
                className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-accent transition-colors shadow-lg shadow-primary/10"
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
