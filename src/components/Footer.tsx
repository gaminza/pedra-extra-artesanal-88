
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const redirectToOffer = () => {
    window.open('https://chk.eduzz.com/G961RQQYW1', '_blank');
  };

  return (
    <footer className="bg-earth-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold-400">
              Essência das Pedras
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Transforme sua energia em renda criando japamalas únicos com pedras naturais. 
              Aprenda técnicas profissionais e descubra o poder ancestral das pedras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors duration-200">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold-400">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#sobre" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Sobre Japamalas
              </a>
              <a href="#galeria" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Galeria de Produtos
              </a>
              <a href="#instrutora" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Nossa Instrutora
              </a>
              <a href="#conteudo" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Conteúdo do Curso
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold-400">Comece Agora</h4>
            <p className="text-gray-300">
              Não perca a oportunidade de aprender uma arte milenar e criar uma fonte de renda extra.
            </p>
            <button 
              onClick={redirectToOffer}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-200 w-full md:w-auto"
            >
              Quero Aprender Agora!
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-earth-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Essência das Pedras. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1 mt-2 md:mt-0">
              Feito com <Heart size={16} className="text-terracotta-400" fill="currentColor" /> para você
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
