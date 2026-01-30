import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ServiceItem = {
  title: string;
  description: string;
};

type ServiceStep = {
  title: string;
  description: string;
};

type ServiceCta = {
  title: string;
  description: string;
  href: string;
  label: string;
};

type HeroVariant =
  | "split"
  | "image-full"
  | "floating"
  | "minimal"
  | "image-side";
type BenefitsVariant = "grid" | "rows" | "chips";
type StepsVariant = "cards" | "timeline";
type CtaVariant = "banner" | "compact";

type ServicePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  benefits: ServiceItem[];
  steps: ServiceStep[];
  cta: ServiceCta;
  heroVariant?: HeroVariant;
  benefitsVariant?: BenefitsVariant;
  stepsVariant?: StepsVariant;
  ctaVariant?: CtaVariant;
  heroImage?: string;
  sectionOrder?: Array<"benefits" | "steps" | "cta">;
};

export default function ServicePage({
  eyebrow,
  title,
  subtitle,
  description,
  highlights,
  benefits,
  steps,
  cta,
  heroVariant = "split",
  benefitsVariant = "grid",
  stepsVariant = "cards",
  ctaVariant = "banner",
  heroImage,
  sectionOrder = ["benefits", "steps", "cta"],
}: ServicePageProps) {
  const heroImageSrc =
    heroImage ||
    "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1600";

  const renderHighlights = (wrapClassName = "grid sm:grid-cols-2 gap-4") => (
    <div className={wrapClassName}>
      {highlights.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 bg-white/90 border border-gray-100 rounded-2xl px-4 py-3 shadow-sm"
        >
          <CheckCircle2 className="w-5 h-5 text-gradient" />
          <span className="text-sm font-semibold text-primary">{item}</span>
        </div>
      ))}
    </div>
  );

  const renderHero = () => {
    if (heroVariant === "image-full") {
      return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden">
          <Image
            src={heroImageSrc}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
            <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
              {eyebrow}
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mt-6 mb-6 tracking-tighter leading-[1.05]">
              {title} <span className="text-gradient">{subtitle}</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>
            {renderHighlights("grid sm:grid-cols-2 gap-4 max-w-2xl")}
          </div>
        </section>
      );
    }

    if (heroVariant === "floating") {
      return (
        <section className="relative overflow-hidden pt-24 pb-16">
          <div className="absolute -top-24 -right-20 w-72 h-72 bg-accent/10 blur-[80px] rounded-full" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
              <div>
                <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                  {eyebrow}
                </span>
                <h1 className="text-5xl md:text-6xl font-black text-primary mt-6 mb-6 tracking-tighter leading-[1.05]">
                  {title} <span className="text-gradient">{subtitle}</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed mb-10">
                  {description}
                </p>
                {renderHighlights("flex flex-wrap gap-3")}
              </div>
              <div className="grid gap-6">
                {benefits.slice(0, 2).map((benefit) => (
                  <div
                    key={benefit.title}
                    className="p-6 rounded-[28px] bg-white border border-gray-100 shadow-2xl shadow-primary/10"
                  >
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
                <div className="p-6 rounded-[28px] bg-primary text-white shadow-xl">
                  <div className="flex items-center gap-3 font-bold mb-3">
                    <Sparkles className="w-5 h-5 text-gradient" />
                    Atendimento inteligente
                  </div>
                  <p className="text-sm text-white/80">
                    Combine tecnologia e suporte humano para acelerar sua
                    rotina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    if (heroVariant === "minimal") {
      return (
        <section className="pt-24 pb-16">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
              {eyebrow}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-primary mt-6 mb-6 tracking-tighter">
              {title} <span className="text-gradient">{subtitle}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {description}
            </p>
            {renderHighlights("flex flex-wrap justify-center gap-3")}
          </div>
        </section>
      );
    }

    if (heroVariant === "image-side") {
      return (
        <section className="pt-24 pb-16">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
                {eyebrow}
              </span>
              <h1 className="text-5xl md:text-6xl font-black text-primary mt-6 mb-6 tracking-tighter leading-[1.05]">
                {title} <span className="text-gradient">{subtitle}</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-10">
                {description}
              </p>
              {renderHighlights("grid sm:grid-cols-2 gap-4")}
            </div>
            <div className="relative h-[420px] rounded-[36px] overflow-hidden shadow-2xl">
              <Image src={heroImageSrc} alt="" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-5 py-4 rounded-2xl shadow-lg">
                <p className="text-sm font-bold text-primary">
                  Atendimento consultivo e próximo
                </p>
                <p className="text-xs text-gray-500">
                  Fale direto com especialistas.
                </p>
              </div>
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <span className="text-gradient font-black tracking-[0.2em] text-xs uppercase">
              {eyebrow}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-primary mt-6 mb-6 tracking-tighter leading-[1.05]">
              {title} <span className="text-gradient">{subtitle}</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {description}
            </p>
            {renderHighlights()}
          </div>

          <div className="bg-white border border-gray-100 rounded-[36px] p-8 shadow-2xl shadow-primary/5 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-primary/5 blur-[60px]" />
            <div className="flex items-center gap-3 text-primary font-bold mb-6">
              <div className="w-10 h-10 rounded-2xl bg-accent/10 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-gradient" />
              </div>
              Por que escolher a VIZSIL
            </div>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Atendimento consultivo, processos digitais e suporte contínuo
                para você tomar decisões com segurança e crescer sem burocracia.
              </p>
              <p>
                Nossa equipe acompanha cada etapa e garante conformidade fiscal
                com foco em economia tributária e previsibilidade.
              </p>
            </div>
            <Link
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-gradient transition-colors"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  };

  const renderBenefits = () => {
    if (benefitsVariant === "rows") {
      return (
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-10">
            Benefícios que{" "}
            <span className="text-gradient">fazem diferença</span>
          </h2>
          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-[28px] bg-gray-50 border border-gray-100"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-primary text-sm font-bold">
                  <CheckCircle2 className="w-5 h-5 text-gradient" />
                  Inclusão no pacote
                </div>
              </div>
            ))}
          </div>
        </section>
      );
    }

    if (benefitsVariant === "chips") {
      return (
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-primary text-white rounded-[40px] p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Benefícios em destaque
            </h2>
            <div className="flex flex-wrap gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="flex items-center gap-2 bg-white/10 px-4 py-3 rounded-2xl"
                >
                  <CheckCircle2 className="w-4 h-4 text-gradient" />
                  <span className="text-sm font-semibold">{benefit.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 text-sm text-white/70">
              {benefits[0]?.description}
            </div>
          </div>
        </section>
      );
    }

    return (
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <h2 className="text-3xl md:text-4xl font-black text-primary mb-10">
          Benefícios que <span className="text-gradient">fazem diferença</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-[28px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all"
            >
              <h3 className="text-lg font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  const renderSteps = () => {
    if (stepsVariant === "timeline") {
      return (
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-10">
            Como funciona na prática
          </h2>
          <div className="border-l border-gray-200 pl-6 space-y-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="absolute -left-[34px] top-1 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-black">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      );
    }

    return (
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-primary text-white rounded-[40px] p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-black mb-8">
            Como funciona na prática
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="flex gap-4">
                <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center font-black">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const renderCta = () => {
    if (ctaVariant === "compact") {
      return (
        <section className="max-w-7xl mx-auto px-6 mt-20">
          <div className="bg-accent/10 border border-accent/20 rounded-[32px] p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-2">
                {cta.title}
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {cta.description}
              </p>
            </div>
            <Link
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-accent transition-all shadow-lg shadow-primary/20"
            >
              {cta.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      );
    }

    return (
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-white border border-gray-100 rounded-[40px] p-10 md:p-14 shadow-2xl shadow-primary/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-primary mb-4">
              {cta.title}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {cta.description}
            </p>
          </div>
          <Link
            href={cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-2xl font-black text-sm hover:bg-accent transition-all shadow-xl shadow-primary/20"
          >
            {cta.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        {renderHero()}
        {sectionOrder.map((sectionKey) => {
          if (sectionKey === "benefits") {
            return (
              <React.Fragment key="benefits">{renderBenefits()}</React.Fragment>
            );
          }
          if (sectionKey === "steps") {
            return <React.Fragment key="steps">{renderSteps()}</React.Fragment>;
          }
          return <React.Fragment key="cta">{renderCta()}</React.Fragment>;
        })}
      </main>

      <Footer />
    </div>
  );
}
