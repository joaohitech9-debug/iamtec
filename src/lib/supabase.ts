import emailjs from '@emailjs/browser';

// Inicializar EmailJS com sua chave pública
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  if (!EMAILJS_PUBLIC_KEY) {
    throw new Error(
      'EmailJS não está configurado. Adicione VITE_EMAILJS_PUBLIC_KEY no arquivo .env'
    );
  }

  try {
    const templateParams = {
      to_email: 'raphael@iamtec.com.br',
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      reply_to: data.email,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
      templateParams
    );

    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
}
