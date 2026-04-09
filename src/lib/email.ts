export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error(
      'Web3Forms não está configurado. Adicione VITE_WEB3FORMS_ACCESS_KEY no arquivo .env'
    );
  }

  const formData = new FormData();
  formData.append('access_key', accessKey);
  formData.append('name', data.name);
  formData.append('email', data.email);
  formData.append('phone', data.phone);
  formData.append('message', data.message);
  formData.append('subject', `Nova mensagem de ${data.name} - Website IAMTEC`);
  formData.append('from_name', 'Website IAMTEC');
  formData.append('redirect', window.location.href);

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (!result.success) {
      throw new Error(result.message || 'Erro ao enviar mensagem');
    }

    return { success: true };
  } catch (error) {
    console.error('Erro ao enviar formulário:', error);
    throw error;
  }
}
