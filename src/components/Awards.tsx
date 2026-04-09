import { Trophy, Globe, Lightbulb, Star } from 'lucide-react';

export default function Awards() {
  const awards = [
    { icon: Trophy, title: 'SantanderX', year: '2025', color: 'bg-[#001F5C]' },
    { icon: Trophy, title: 'Venture Cup China', year: '2023', color: 'bg-[#001F5C]' },
    { icon: Globe, title: 'Exnode Contest China', year: '2023', color: 'bg-[#001F5C]' },
    { icon: Star, title: 'Missão Portugal', year: '2022', color: 'bg-[#001F5C]' },
    { icon: Lightbulb, title: 'Inova Amazônia', year: '2021, 2022, 2023', color: 'bg-[#001F5C]' },
  ];

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5C] mb-4">
            Prêmios e Reconhecimentos
          </h2>
          <div className="w-24 h-1 bg-[#001F5C] mx-auto mb-6"></div>
          <p className="text-lg text-[#8A8A8A] max-w-3xl mx-auto">
            Reconhecida nacionalmente e internacionalmente por nossa excelência em inovação e biotecnologia
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${award.color} rounded-full mb-4`}>
                <award.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-[#001F5C] mb-2">{award.title}</h3>
              <p className="text-[#8A8A8A] font-semibold">{award.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="inline-block bg-white px-8 py-4 rounded-lg shadow-md">
            <p className="text-[#333333] font-semibold">
              🏆 Programa Startup Nordeste
            </p>
          </div>
          <div className="inline-block bg-white px-8 py-4 rounded-lg shadow-md ml-4">
            <p className="text-[#333333] font-semibold">
              🌟 Reconhecimentos Nacionais e Internacionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
