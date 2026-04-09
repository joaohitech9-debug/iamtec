import { UserCircle2 } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Dr. Raphael Sanzio Pimenta',
      role: 'Diretor Científico',
      color: 'bg-[#002147]',
      image: '/dr-raphael.png',
    },
    {
      name: 'Lucas Bergental',
      role: 'Comercial',
      color: 'bg-[#001F5C]',
      image: '/lucas-bergental.png',
    },
    {
      name: 'Dra. Juliana F. Moreira da Silva',
      role: 'Diretora de Produtos e Processos',
      color: 'bg-[#001F5C]',
      image: '/dra-juliana.png',
    },
    {
      name: 'Dra. Fabrícia Bom Tempo',
      role: 'Coordenadora de P&D',
      color: 'bg-[#002147]',
      image: '/dra-fabricia.png',
    },
    {
      name: 'Eng. Paulo Henrique Macedo',
      role: 'Apoio Técnico',
      color: 'bg-[#001F5C]',
      image: '/eng-paulo.png',
    },
    {
      name: 'Luiza Moreira Pimenta',
      role: 'Administradora',
      color: 'bg-[#002147]',
      image: '/luiza.png',
    },
  ];

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#002147] mb-4">
            Nossa Equipe
          </h2>
          <div className="w-24 h-1 bg-[#001F5C] mx-auto mb-6"></div>
          <p className="text-lg text-[#8A8A8A] max-w-3xl mx-auto">
            Profissionais altamente qualificados dedicados à excelência científica
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="mb-4 relative inline-block">
                <div className={`w-32 h-32 ${member.color} rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300 overflow-hidden ${member.name === 'Lucas Bergental' ? 'border-4 border-[#001F5C]' : ''}`}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <UserCircle2 className="text-white" size={80} />
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-[#333333] mb-2">{member.name}</h3>
              <p className="text-[#8A8A8A] text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
