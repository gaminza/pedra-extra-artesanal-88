
import { Button } from "@/components/ui/button";

const Hero = () => {
  const redirectToOffer = () => {
    window.open('https://chk.eduzz.com/G961RQQYW1', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-beige-100 via-beige-50 to-gold-50 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C47F5A' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content Column */}
          <div className="text-center lg:text-left animate-fade-in">
            {/* Main Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-earth-800 mb-6 leading-tight">
              Crie Japamalas Poderosos e{" "}
              <span className="text-terracotta-500 relative">
                Transforme Sua Energia
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gold-400 opacity-60 rounded-full"></div>
              </span>
              {" "}em Renda Extra
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-earth-600 mb-8 font-light">
              Tenha renda extra com propósito através da arte milenar dos japamalas
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-4 mb-10 text-left">
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-beige-200 animate-scale-in">
                <div className="w-10 h-10 bg-terracotta-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-terracotta-600 text-lg">✨</span>
                </div>
                <h3 className="font-semibold text-earth-800 mb-2 text-sm">Fácil de Aprender</h3>
                <p className="text-earth-600 text-xs">Mesmo sem experiência, você domina as técnicas</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-beige-200 animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="w-10 h-10 bg-gold-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-gold-600 text-lg">🧘</span>
                </div>
                <h3 className="font-semibold text-earth-800 mb-2 text-sm">Conexão & Propósito</h3>
                <p className="text-earth-600 text-xs">Gere renda extra com significado espiritual</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-beige-200 animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="w-10 h-10 bg-olive-100 rounded-full flex items-center justify-center mb-3">
                  <span className="text-olive-600 text-lg">💎</span>
                </div>
                <h3 className="font-semibold text-earth-800 mb-2 text-sm">Nicho Valorizado</h3>
                <p className="text-earth-600 text-xs">Mercado crescente e lucrativo</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button 
              onClick={redirectToOffer}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-6"
            >
              🔥 Quero Aprender Agora!
            </Button>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-earth-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Acesso Imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Suporte Completo</span>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              {/* Main japamala image */}
              <img 
                src="/lovable-uploads/036d28c8-97ff-46d9-8786-f3e9f17495ed.png" 
                alt="Japamala artesanal com pedras naturais e tassel em ambiente natural"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-500"
              />
              
              {/* Decorative glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-200/20 to-terracotta-200/20 rounded-2xl blur-2xl -z-10 transform scale-110"></div>
            </div>

            {/* Floating elements around the image */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold-200 rounded-full opacity-30 animate-pulse-gentle"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-terracotta-200 rounded-full opacity-25 animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/4 -right-8 w-12 h-12 bg-olive-200 rounded-full opacity-20 animate-pulse-gentle" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gold-200 rounded-full opacity-15 animate-pulse-gentle"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-terracotta-200 rounded-full opacity-20 animate-pulse-gentle" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default Hero;
