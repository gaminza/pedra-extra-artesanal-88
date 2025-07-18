
const Instructor = () => {
  const redirectToOffer = () => {
    window.open('https://chk.eduzz.com/G961RQQYW1', '_blank');
  };

  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              🌟 Conheça Sua Instrutora
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Uma especialista em terapias holísticas que transformou sua paixão em conhecimento
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Images Column */}
            <div className="space-y-6">
              <div className="relative">
                <img src="/lovable-uploads/587d0d19-022e-4500-96ba-55d84c5207df.png" alt="Instrutora segurando japamala" className="w-full rounded-2xl shadow-xl" />
              </div>
              
            </div>

            {/* Content Column */}
            <div className="space-y-8">
              {/* Journey Story */}
              <div className="bg-gradient-to-br from-beige-50 to-gold-50 p-8 rounded-2xl border border-beige-200">
                <h3 className="font-serif text-2xl font-bold text-earth-800 mb-6 flex items-center gap-3">
                  ✨ Uma Jornada de Transformação
                </h3>
                <div className="space-y-4 text-earth-700 leading-relaxed">
                  <p>
                    <strong className="text-earth-800">Desde 2018</strong> atuando no nicho de terapias holísticas e desenvolvimento pessoal, 
                    comecei criando japamalas como parte de um produto de alto valor.
                  </p>
                  <p>
                    Após <strong className="text-earth-800">centenas de pedidos</strong> de pessoas querendo aprender a fazer suas próprias peças, 
                    decidi compartilhar todo meu conhecimento em um curso completo e acessível.
                  </p>
                  <p>
                    <strong className="text-earth-800">Minha missão</strong> é ensinar você não apenas a técnica, mas como transformar 
                    essa arte milenar em uma fonte de renda extra com propósito.
                  </p>
                </div>
              </div>

              {/* Credentials */}
              <div className="bg-white p-6 rounded-xl border-2 border-gold-200 shadow-md">
                <h4 className="font-semibold text-earth-800 mb-4 text-lg flex items-center gap-2">
                  🏆 Por que você pode confiar em mim?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-start gap-3">
                    <span className="text-terracotta-500 mt-1 text-lg">✓</span>
                    <span className="text-earth-700 text-sm">6+ anos de experiência em terapias holísticas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-terracotta-500 mt-1 text-lg">✓</span>
                    <span className="text-earth-700 text-sm">Centenas de japamalas criados com amor</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-terracotta-500 mt-1 text-lg">✓</span>
                    <span className="text-earth-700 text-sm">Técnicas testadas e aprovadas</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-terracotta-500 mt-1 text-lg">✓</span>
                    <span className="text-earth-700 text-sm">Foco em ensinar com propósito</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <button onClick={redirectToOffer} className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto">
                  Quero Aprender Com Você!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Instructor;
