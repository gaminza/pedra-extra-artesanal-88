
import Hero from "@/components/Hero";
import AboutJapamala from "@/components/AboutJapamala";
import ProductGallery from "@/components/ProductGallery";
import Instructor from "@/components/Instructor";
import CourseContent from "@/components/CourseContent";
import PricingSection from "@/components/PricingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <AboutJapamala />
      <ProductGallery />
      <Instructor />
      <CourseContent />
      <PricingSection />
    </div>
  );
};

export default Index;
