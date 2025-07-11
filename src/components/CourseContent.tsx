
const CourseContent = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-beige-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-12">
            🎓 O Que Você Vai Aprender No Curso
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-beige-200">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-terracotta-600 text-2xl">💎</span>
              </div>
              <h3 className="font-semibold text-xl text-earth-800 mb-4">Conhecimento das Pedras</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-terracotta-500 mt-1">✅</span>
                  <span className="text-earth-700">Como escolher as pedras naturais</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-terracotta-500 mt-1">✅</span>
                  <span className="text-earth-700">O significado das pedras que mais vendem</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-beige-200">
              <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-gold-600 text-2xl">🔧</span>
              </div>
              <h3 className="font-semibold text-xl text-earth-800 mb-4">Técnicas de Montagem</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1">✅</span>
                  <span className="text-earth-700">Como montar um Japamala de 108 contas</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1">✅</span>
                  <span className="text-earth-700">Como montar um Japamala de 27 contas</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-beige-200">
              <div className="w-16 h-16 bg-olive-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-olive-600 text-2xl">✨</span>
              </div>
              <h3 className="font-semibold text-xl text-earth-800 mb-4">Acabamento Profissional</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-olive-500 mt-1">✅</span>
                  <span className="text-earth-700">Técnicas de amarração e finalização profissional</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-beige-200">
              <div className="w-16 h-16 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-terracotta-600 text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-xl text-earth-800 mb-4">Estratégia de Vendas</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <span className="text-terracotta-500 mt-1">✅</span>
                  <span className="text-earth-700">Como precificar seus Japamalas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-r from-gold-400 to-terracotta-400 p-8 rounded-2xl text-white mb-8">
            <h3 className="font-serif text-2xl font-bold mb-4">🎁 Bônus Exclusivo</h3>
            <p className="text-lg">
              <strong>Lista de fornecedores dos materiais utilizados</strong> - 
              Saiba exatamente onde comprar tudo que precisa com os melhores preços!
            </p>
          </div>

          <button 
            onClick={() => document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Inscreva-se Agora!
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
