
const AboutJapamala = () => {
  const redirectToOffer = () => {
    window.open('https://chk.eduzz.com/G961RQQYW1', '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* What is Japamala */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-6">
              📿 O que é um Japamala?
            </h2>
            <div className="bg-beige-50 p-8 rounded-2xl border border-beige-200">
              <p className="text-lg text-earth-700 leading-relaxed mb-4">
                Japamalas são cordões de contas usados para meditação. O japamala é muito parecido com um terço (rosário), 
                possui <strong className="text-terracotta-600">108 contas</strong> para você marcar quantas vezes repete mantras, afirmações e meditações.
              </p>
              <p className="text-lg text-earth-700 leading-relaxed">
                Segundo a cultura Havaiana, quando você completar as 108 contas do japamala você alcança sua conexão com o divino, 
                por esse motivo acredita-se que <strong className="text-gold-600">se pode alcançar tudo que deseja</strong>.
              </p>
            </div>
          </div>

          {/* Why Learn */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-8">
              ✨ Por que aprender a fazer Japamalas?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Desenvolve sua criatividade e intuição</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Artesanato terapêutico</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Fortalece sua autoestima ao ver suas próprias criações</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Ideal para quem busca um novo começo com propósito</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Um ofício que pode ser feito em casa, no seu ritmo</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Terapia manual que alivia o estresse</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Um mercado lucrativo para quem deseja vender</span>
                </div>
                <div className="flex items-start gap-3 text-left">
                  <span className="text-terracotta-500 text-xl mt-1">✔</span>
                  <span className="text-earth-700">Personalização para cada cliente ou para uso pessoal</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button 
              onClick={redirectToOffer}
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Comece Agora!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJapamala;
