import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SolutionsSection from "@/components/SolutionsSection";
import BlogSection from "@/components/BlogSection";
import FAQAndContact from "@/components/FAQAndContact";
import Footer from "@/components/Footer";
import FloatingAIBubble from "@/components/FloatingAIBubble";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <SolutionsSection />
        <BlogSection />
        <FAQAndContact />
      </main>
      <Footer />
      {/* <FloatingAIBubble /> */}
    </div>
  );
}
