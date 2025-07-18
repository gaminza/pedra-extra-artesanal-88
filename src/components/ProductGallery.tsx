
const ProductGallery = () => {
  const redirectToOffer = () => {
    window.open('https://chk.eduzz.com/G961RQQYW1', '_blank');
  };

  const products = [
    {
      id: 1,
      image: "/lovable-uploads/a3f671a9-842a-417b-a2f2-a1f9e7be291d.png",
      title: "Japamala Vermelho",
      description: "Cornalina com coração de olho de tigre - para atrair prosperidade e abundância."
    },
    {
      id: 2,
      image: "/lovable-uploads/3735127d-bcbf-4f37-94a2-14b08e018b0c.png",
      title: "Japamala Olho de Tigre e Jaspe Madeira",
      description: "Para trazer proteção."
    },
    {
      id: 3,
      image: "/lovable-uploads/bdc5e157-526e-49a5-b399-31257ae23120.png",
      title: "Japamala Ágata Azul",
      description: "Para te conectar com a espiritualidade."
    },
    {
      id: 4,
      image: "/lovable-uploads/631b1b6d-3c8e-4b3c-b0ee-5d1067aca6b1.png",
      title: "Japamala Ágata Azul e Água Marinha",
      description: "Para expansão da consciência e conexão com o Criador."
    },
    {
      id: 5,
      image: "/lovable-uploads/7ace990f-b10f-440d-9743-1f19b2d9a90c.png",
      title: "Japamala Ametista com Morganita e Olho de Tigre",
      description: "Para trazer paz, harmonia e trabalhar profundamente amor próprio."
    },
    {
      id: 6,
      image: "/lovable-uploads/44fe090a-bc46-4cc3-b086-32b3b7fe3080.png",
      title: "Japamala Hematita",
      description: "Para dar coragem para agir dentro do propósito de vida."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-earth-50 to-beige-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-earth-800 mb-4">
              ✨ Veja a Qualidade dos Nossos Japamalas
            </h2>
            <p className="text-lg text-earth-600 max-w-2xl mx-auto">
              Cada japamala é criado com amor e técnicas profissionais. 
              Veja alguns exemplos do que você aprenderá a fazer no curso!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-earth-800 mb-2">{product.title}</h3>
                  <p className="text-earth-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg text-earth-700 mb-6">
              <strong>Imagine criando peças como essas e vendendo por R$ 150 a R$ 350 cada uma!</strong>
            </p>
            <button 
              onClick={redirectToOffer}
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Quero Aprender a Fazer Japamalas!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
