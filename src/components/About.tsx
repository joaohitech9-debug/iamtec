import { Building2, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5C] mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-[#001F5C] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 rounded-xl bg-[#F2F2F2] hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#001F5C] rounded-full mb-4">
              <Building2 className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#333333] mb-2">Fundação</h3>
            <p className="text-[#8A8A8A]">Estabelecida em 2019 em Palmas – TO</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#F2F2F2] hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#001F5C] rounded-full mb-4">
              <Award className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#333333] mb-2">Inovação</h3>
            <p className="text-[#8A8A8A]">Diversas patentes em biotecnologia</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-[#F2F2F2] hover:shadow-lg transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#001F5C] rounded-full mb-4">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#333333] mb-2">Foco</h3>
            <p className="text-[#8A8A8A]">Rigor técnico e científico</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-[#333333] leading-relaxed">
            A IAMTEC é uma empresa de base tecnológica especializada em <strong className="text-[#001F5C]">biotecnologia</strong>,
            <strong className="text-[#001F5C]"> pesquisa aplicada</strong> e soluções inovadoras voltadas a
            produtividade, segurança e sustentabilidade. Com diversas patentes em biotecnologia e tecnologias
            de alimentos, atuamos com foco científico e rigor técnico para transformar desafios em oportunidades.
          </p>
        </div>
      </div>
    </section>
  );
}
