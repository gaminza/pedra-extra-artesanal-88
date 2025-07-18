
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const redirectToOffer = () => {
    window.open('https://chk.eduzz.com/G961RQQYW1', '_blank');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-terracotta-600">
              Essência das Pedras
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200"
            >
              Sobre Japamalas
            </button>
            <button 
              onClick={() => scrollToSection('galeria')}
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200"
            >
              Galeria
            </button>
            <button 
              onClick={() => scrollToSection('instrutora')}
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200"
            >
              Instrutora
            </button>
            <button 
              onClick={() => scrollToSection('conteudo')}
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200"
            >
              Conteúdo
            </button>
            <button 
              onClick={redirectToOffer}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-200"
            >
              Inscrever-se
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-terracotta-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="py-4 space-y-4 border-t border-gray-200">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left text-gray-700 hover:text-terracotta-600 transition-colors duration-200 py-2"
              >
                Sobre Japamalas
              </button>
              <button 
                onClick={() => scrollToSection('galeria')}
                className="block w-full text-left text-gray-700 hover:text-terracotta-600 transition-colors duration-200 py-2"
              >
                Galeria
              </button>
              <button 
                onClick={() => scrollToSection('instrutora')}
                className="block w-full text-left text-gray-700 hover:text-terracotta-600 transition-colors duration-200 py-2"
              >
                Instrutora
              </button>
              <button 
                onClick={() => scrollToSection('conteudo')}
                className="block w-full text-left text-gray-700 hover:text-terracotta-600 transition-colors duration-200 py-2"
              >
                Conteúdo
              </button>
              <button 
                onClick={redirectToOffer}
                className="block w-full bg-terracotta-500 hover:bg-terracotta-600 text-white px-6 py-3 rounded-full font-semibold text-center mt-4"
              >
                Inscrever-se
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
