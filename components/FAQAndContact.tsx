"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Send, Bot, Sparkles } from "lucide-react";

type ChatMessage = {
  role: "bot" | "user";
  text?: string;
  content?: React.ReactNode;
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

const faqs = [
  {
    question: "Como funciona a abertura de empresa grátis?",
    answer:
      "A VIZSIL não cobra honorários para realizar o processo de abertura da sua empresa. Você arca apenas com as taxas obrigatórias do governo (Junta Comercial e Prefeitura) e o certificado digital. Em troca, você contrata um de nossos planos de contabilidade mensal.",
  },
  {
    question: "Quais documentos são necessários para começar?",
    answer:
      "Para a maioria dos casos, precisamos apenas do seu RG/CNH, comprovante de endereço residencial e o número do IPTU do local onde a empresa será instalada (mesmo que seja endereço fiscal).",
  },
  {
    question: "Quanto tempo demora para abrir meu CNPJ?",
    answer:
      "O prazo médio varia conforme a cidade, mas geralmente entre 5 a 15 dias úteis após a entrega de toda a documentação e assinatura dos protocolos.",
  },
  {
    question: "Posso migrar do MEI para ME a qualquer momento?",
    answer:
      "Sim! Se você ultrapassou o limite de faturamento ou precisa contratar mais funcionários, a migração pode ser feita de forma segura. Nós cuidamos de todo o processo burocrático para você.",
  },
];

export default function FAQAndContact() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [inputValue, setInputValue] = useState("");

  const renderMenuMessage = () => (
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

  const renderFallbackMessage = () => (
    <div className="space-y-3 text-sm">
      <p>Sou uma automação e ainda não tenho respostas para essa pergunta.</p>
      <p>Você pode escolher uma destas opções:</p>
      {renderMenuMessage()}
    </div>
  );

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>(() => [
    {
      role: "bot",
      content: renderMenuMessage(),
    },
  ]);

  const sendMessage = (text: string) => {
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
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  return (
    <section className="py-24 bg-white relative" id="faq">
      <div id="contato" className="absolute -top-28" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* FAQ Column */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gradient font-black tracking-[0.2em] text-xs uppercase"
            >
              FAQ / Suporte
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-primary mt-4 mb-12 tracking-tighter"
            >
              Dúvidas <span className="text-gradient">Frequentes</span>
            </motion.h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() =>
                      setActiveIndex(activeIndex === index ? null : index)
                    }
                    className={`w-full p-6 rounded-3xl border transition-all flex items-start gap-4 text-left ${
                      activeIndex === index
                        ? "bg-primary text-white border-primary shadow-xl shadow-primary/20"
                        : "bg-gray-50 border-gray-100 hover:border-accent/30"
                    }`}
                  >
                    <div
                      className={`mt-1 shrink-0 w-6 h-6 rounded-full flex items-center justify-center border ${
                        activeIndex === index
                          ? "bg-white text-primary border-white"
                          : "bg-white text-gray-400 border-gray-200"
                      }`}
                    >
                      {activeIndex === index ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">
                        {faq.question}
                      </h3>
                      <AnimatePresence>
                        {activeIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p
                              className={`pt-4 text-sm leading-relaxed ${
                                activeIndex === index
                                  ? "text-white/80"
                                  : "text-gray-600"
                              }`}
                            >
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat/Contact Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-[40px] border border-gray-100 overflow-hidden flex flex-col h-[600px] shadow-2xl shadow-primary/5"
          >
            <div className="p-6 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold">VIZSIL AI</h3>
                  <div className="flex items-center gap-2 text-xs text-gradient">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    Online agora
                  </div>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-gradient" />
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
                    className={`max-w-[80%] p-4 rounded-3xl text-sm font-medium ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-tr-none"
                        : "bg-white text-gray-700 border border-gray-100 rounded-tl-none shadow-sm"
                    }`}
                  >
                    {msg.content ?? msg.text}
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
                className="flex-1 bg-gray-50 border-none rounded-2xl px-4 py-3 text-sm focus:ring-2 focus:ring-accent outline-none"
              />
              <button
                type="submit"
                className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
