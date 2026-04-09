import { Microscope, UtensilsCrossed, Wind, Droplets, FileText, Drill, Beaker, Sparkles, Apple, Wheat } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Wheat,
      title: 'Análise e Quantificação de Aflatoxinas em Grãos',
      description: 'Detecção e quantificação de aflatoxinas em grãos com precisão analítica.',
    },
    {
      icon: Microscope,
      title: 'Análises Microbiológicas',
      description: 'Laudos e estudos de qualidade microbiológica.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Análise de Alimentos',
      description: 'Segurança e conformidade de produtos alimentícios.',
    },
    {
      icon: Wind,
      title: 'Análise de Ar',
      description: 'Monitoramento microbiológico de ambientes.',
    },
    {
      icon: Droplets,
      title: 'Segurança da Água',
      description: 'Laudos e certificações sanitárias.',
    },
    {
      icon: FileText,
      title: 'Outorga de Água',
      description: 'Assessoria técnica e emissão de documentos.',
    },
    {
      icon: Drill,
      title: 'Perfuração de Poços',
      description: 'Licenciamento e regularização.',
    },
    {
      icon: Beaker,
      title: 'Desenvolvimento de Produtos',
      description: 'Formulações personalizadas sob demanda.',
    },
    {
      icon: Sparkles,
      title: 'Cosméticos Amazônicos',
      description: 'Produtos sustentáveis com ativos vegetais.',
    },
    {
      icon: Apple,
      title: 'Pós-Colheita',
      description: 'Soluções patenteadas para prolongar a vida útil de alimentos.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5C] mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-[#001F5C] mx-auto mb-6"></div>
          <p className="text-lg text-[#8A8A8A] max-w-3xl mx-auto">
            Soluções completas em biotecnologia com rigor científico e tecnologia de ponta
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-[#F2F2F2] hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#001F5C]"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#001F5C] group-hover:bg-[#001F5C] rounded-full mb-4 transition-colors duration-300">
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#001F5C] mb-3">{service.title}</h3>
              <p className="text-[#8A8A8A] leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
