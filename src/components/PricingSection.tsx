
const PricingSection = () => {
  return (
    <section id="offer" className="py-16 bg-gradient-to-br from-terracotta-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-6">
            🔥 Oferta Especial por Tempo Limitado!
          </h2>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 border-4 border-gold-200">
            <div className="mb-6">
              <span className="bg-terracotta-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                DESCONTO ESPECIAL
              </span>
            </div>
            
            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-earth-500 line-through">De R$ 297,00</span>
                <span className="text-4xl md:text-5xl font-bold text-terracotta-600">
                  Por apenas R$ 97,90
                </span>
              </div>
              <p className="text-earth-600">
                <strong>Economia de R$ 199,10!</strong> Investimento que se paga com a venda de apenas 1 japamala!
              </p>
            </div>

            <div className="bg-gradient-to-r from-gold-100 to-beige-100 p-6 rounded-xl mb-8">
              <h3 className="font-serif text-xl font-bold text-earth-800 mb-4">
                💰 Retorno Garantido do Seu Investimento
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold text-earth-800 mb-2">Japamala de 27 contas:</h4>
                  <ul className="space-y-1 text-earth-700">
                    <li>• Custo dos materiais: R$ 25-35</li>
                    <li>• Preço de venda: R$ 150-200</li>
                    <li className="font-semibold text-terracotta-600">• Lucro: R$ 115-165 por peça</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-earth-800 mb-2">Japamala de 108 contas:</h4>
                  <ul className="space-y-1 text-earth-700">
                    <li>• Custo dos materiais: R$ 40-60</li>
                    <li>• Preço de venda: R$ 250-350</li>
                    <li className="font-semibold text-terracotta-600">• Lucro: R$ 190-290 por peça</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-green-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold">Acesso Vitalício ao Curso</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold">Garantia de 7 Dias</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold">Lista de Fornecedores Incluída</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-green-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-semibold">Suporte Completo</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-terracotta-500 to-terracotta-600 hover:from-terracotta-600 hover:to-terracotta-700 text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 animate-pulse-gentle">
              🔥 QUERO APRENDER A FAZER JAPAMALAS AGORA!
            </button>
            
            <p className="text-sm text-earth-500 mt-4">
              ⚡ Vagas limitadas! Oferta pode encerrar a qualquer momento
            </p>
          </div>

          <div className="bg-gradient-to-r from-gold-400 to-terracotta-400 p-6 rounded-2xl text-white">
            <h3 className="font-serif text-2xl font-bold mb-4">💎 Garantia Incondicional de 7 Dias</h3>
            <p className="text-lg">
              Se por qualquer motivo você não ficar satisfeito com o curso, 
              devolvemos <strong>100% do seu dinheiro</strong> sem perguntas. 
              Seu risco é ZERO!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
