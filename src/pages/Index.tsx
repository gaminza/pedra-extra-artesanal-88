
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutJapamala from "@/components/AboutJapamala";
import ProductGallery from "@/components/ProductGallery";
import Instructor from "@/components/Instructor";
import CourseContent from "@/components/CourseContent";
import PricingSection from "@/components/PricingSection";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <div id="sobre">
        <AboutJapamala />
      </div>
      <div id="galeria">
        <ProductGallery />
      </div>
      <div id="instrutora">
        <Instructor />
      </div>
      <div id="conteudo">
        <CourseContent />
      </div>
      <PricingSection />
      <div id="contato">
        <Contact />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
