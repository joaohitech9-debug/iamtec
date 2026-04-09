import { Heart, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-[#001F5C] mb-4">IAMTEC</h3>
            <p className="text-[#E5E5E5] leading-relaxed">
              Transformando o futuro através da biotecnologia e inovação científica.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Informações</h4>
            <p className="text-[#E5E5E5] mb-2">
              <strong>CNPJ:</strong> 35.364.212/0001-32
            </p>
            <p className="text-[#E5E5E5] mb-2">
              Palmas – TO, Brasil
            </p>
            <p className="text-[#E5E5E5]">
              <a href="mailto:raphael@iamtec.com.br" className="hover:text-[#001F5C] transition-colors duration-300">
                raphael@iamtec.com.br
              </a>
            </p>
          </div>
        </div>

        <div className="border-t border-[#8A8A8A] pt-8">
          {/* Redes Sociais */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.facebook.com/iamtecdiretoria"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300"
              title="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/iamtec-instituto-amaz%C3%B4nia-de-tecnologias-sustent%C3%A1veis/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/iamtec.tecnologia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E5E5E5] hover:text-[#001F5C] transition-colors duration-300"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-[#E5E5E5] flex items-center justify-center gap-2 text-center">
            © {currentYear} IAMTEC. Todos os direitos reservados. Feito com <Heart size={16} className="text-red-500" fill="currentColor" /> em Palmas – TO
          </p>
        </div>
      </div>
    </footer>
  );
}
