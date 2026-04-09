# Configuração do Formulário de Contato

## � Como Funciona

As mensagens são enviadas para o email do cliente (raphael@iamtec.com.br) usando **Web3Forms** - uma solução gratuita, simples e sem necessidade de acesso a nenhuma conta de email.

## 🚀 Setup (Leva 2 minutos)

### 1️⃣ Acesse Web3Forms

Vá para: **https://www.web3forms.com**

### 2️⃣ Registre sua Conta (ou Faça Login)

- Clique em **"Get Started Free"**
- Registre com email/Google/GitHub
- Confirme seu email

### 3️⃣ Crie um Novo Formulário

1. Clique em **"+ New Form"**
2. Dê um nome: **IAMTEC Contact Form**
3. Selecione o email de destino: **raphael@iamtec.com.br**
   - (Web3Forms vai enviar um email de confirmação para esse endereço)
   - O dono precisa confirmar **uma única vez**
4. Clique **"Create"**

### 4️⃣ Copie a Access Key

Na página do formulário, você verá a **Access Key** em destaque.

**COPIE essa chave**

### 5️⃣ Cole no Arquivo `.env`

Na raiz do projeto, crie (ou edite) o arquivo `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=cole_sua_access_key_aqui
```

### 6️⃣ Pronto! 🎉

- Reinicie o servidor: `npm run dev`
- Teste o formulário
- **As mensagens chegam automaticamente em raphael@iamtec.com.br**

---

## ✨ Funcionalidades

- ✅ Validação de campos
- ✅ Validação de email
- ✅ Feedback visual (sucesso/erro)
- ✅ Loading state (desabilita durante envio)
- ✅ Mensagens chegam em tempo real
- ✅ Sem necessidade de autorizar conta de email
- ✅ Totalmente gratuito

---

## 📝 O Dono Precisa Fazer?

✅ **Uma única coisa:** Confirmar a autorização do email quando receber a confirmação do Web3Forms

Tudo o mais é automático!

---

## 🔒 Segurança

- A Access Key é específica do seu formulário
- Web3Forms usa HTTPS (seguro)
- Nunca commita o arquivo `.env`

---

**Pronto! Seu formulário está 100% funcional e super simples.** ✨
