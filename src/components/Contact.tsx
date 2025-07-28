import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const whatsappNumber = "5511955967650";
  const whatsappMessage = "Olá! Gostaria de saber mais sobre o curso de Japamala.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-16 bg-gradient-to-br from-beige-50 to-gold-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-earth-800 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-earth-600 max-w-2xl mx-auto">
            Tem dúvidas sobre o curso? Nossa equipe está pronta para te ajudar!
          </p>
        </div>

        <div className="max-w-md mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-beige-200">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            
            <h3 className="text-xl font-serif font-semibold text-earth-800 mb-3">
              Suporte via WhatsApp
            </h3>
            
            <p className="text-earth-600 mb-6">
              Converse diretamente conosco e tire todas as suas dúvidas sobre o curso de Japamala.
            </p>
            
            <Button 
              asChild
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </Button>
            
            <p className="text-sm text-earth-500 mt-3">
              Horário de atendimento: Segunda a Sexta, 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;