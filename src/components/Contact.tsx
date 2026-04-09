import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { submitContactForm } from '../lib/email';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Validação básica
      if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
        setErrorMessage('Por favor, preencha todos os campos.');
        setLoading(false);
        return;
      }

      // Validação de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrorMessage('Por favor, insira um email válido.');
        setLoading(false);
        return;
      }

      // Enviar para Supabase
      await submitContactForm(formData);

      setSuccessMessage('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

      // Limpar mensagem de sucesso após 5 segundos
      setTimeout(() => setSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      setErrorMessage(
        'Erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato pelo WhatsApp/Email.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001F5C] mb-4">
            Entre em Contato
          </h2>
          <div className="w-24 h-1 bg-[#001F5C] mx-auto mb-6"></div>
          <p className="text-lg text-[#8A8A8A] max-w-3xl mx-auto">
            Estamos prontos para atender suas necessidades. Fale conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#001F5C] rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Endereço</h3>
                <p className="text-[#8A8A8A] leading-relaxed">
                  105 Norte, Alameda 01, Lote 01<br />
                  Plano Diretor Norte<br />
                  Palmas – TO
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#001F5C] rounded-lg flex items-center justify-center">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Telefone / WhatsApp</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-semibold">Raphael (Geral)</p>
                    <a href="tel:+5563984455036" className="text-[#001F5C] hover:underline text-lg font-semibold">
                      (63) 98445-5036
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-semibold">Lucas (Comercial)</p>
                    <a href="tel:+5563981032654" className="text-[#001F5C] hover:underline text-lg font-semibold">
                      (63) 98103-2654
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#001F5C] rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#333333] mb-2">Email</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-semibold">Raphael (Geral)</p>
                    <a href="mailto:raphael@iamtec.com.br" className="text-[#001F5C] hover:underline text-lg">
                      raphael@iamtec.com.br
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-semibold">Lucas (Comercial)</p>
                    <a href="mailto:lucasbergental@iamtec.com.br" className="text-[#001F5C] hover:underline text-lg">
                      lucasbergental@iamtec.com.br
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-[#8A8A8A] font-semibold">Dra. Juliana</p>
                    <a href="mailto:juliana@iamtec.com.br" className="text-[#001F5C] hover:underline text-lg">
                      juliana@iamtec.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-[#333333] mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/iamtecdiretoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F2F2F2] hover:bg-[#001F5C] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <Facebook className="text-[#8A8A8A] group-hover:text-white" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/iamtec.tecnologia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F2F2F2] hover:bg-[#001F5C] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <Instagram className="text-[#8A8A8A] group-hover:text-white" size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/company/iamtec-instituto-amaz%C3%B4nia-de-tecnologias-sustent%C3%A1veis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F2F2F2] hover:bg-[#001F5C] rounded-full flex items-center justify-center transition-colors duration-300 group"
                >
                  <Linkedin className="text-[#8A8A8A] group-hover:text-white" size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-[#F2F2F2] p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#001F5C] mb-6">Envie uma Mensagem</h3>

            {successMessage && (
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 rounded flex gap-3 items-start">
                <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-green-800 font-medium">{successMessage}</p>
              </div>
            )}

            {errorMessage && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded flex gap-3 items-start">
                <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-red-800 font-medium">{errorMessage}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#333333] mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E5E5] focus:border-[#001F5C] outline-none transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E5E5] focus:border-[#001F5C] outline-none transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#333333] mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E5E5] focus:border-[#001F5C] outline-none transition-colors duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#333333] mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#E5E5E5] focus:border-[#001F5C] outline-none transition-colors duration-300 resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#001F5C] hover:bg-[#001549] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                {loading ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
