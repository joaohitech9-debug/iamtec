import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#001F5C] to-[#002147]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Quer transformar seu negócio com soluções em biotecnologia?
        </h2>
        <p className="text-xl text-blue-50 mb-10 leading-relaxed">
          Fale com nossos especialistas e descubra como podemos ajudar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-white text-[#001F5C] px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <ArrowRight size={20} />
            Solicitar Análise
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#001F5C] transition-all duration-300 transform hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            Falar com Especialista
          </a>
        </div>
      </div>
    </section>
  );
}
