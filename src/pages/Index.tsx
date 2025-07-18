
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import AboutJapamala from "@/components/AboutJapamala";
import ProductGallery from "@/components/ProductGallery";
import Instructor from "@/components/Instructor";
import CourseContent from "@/components/CourseContent";
import PricingSection from "@/components/PricingSection";

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
      <Footer />
    </div>
  );
};

export default Index;
