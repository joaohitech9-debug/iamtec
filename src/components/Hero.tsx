import { Calendar, MessageSquare, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: 'url(/molecules-background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll',
      }}
    >
      {/* Overlay para melhor legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#002147]/85 to-[#001F5C]/85"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="space-y-8 max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Transformando o futuro, uma célula de cada vez.
          </h1>
          <p className="text-lg md:text-xl text-blue-50 leading-relaxed">
            A IAMTEC desenvolve soluções inovadoras em biotecnologia e pesquisa aplicada,
            impulsionando produtividade, segurança e sustentabilidade.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-white text-[#002147] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Calendar size={20} />
              Agendar Reunião
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#002147] transition-all duration-300"
            >
              <MessageSquare size={20} />
              Solicitar Orçamento
            </a>
            <a
              href="https://wa.me/5563984455036"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all duration-300"
            >
              <Phone size={20} />
              WhatsApp Imediato
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
