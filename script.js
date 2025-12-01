// Animação do Chat Demo da Marsha
const chatDemo = document.getElementById('chatDemo');

if (chatDemo) {
    const messages = [
        { type: 'bot', text: 'Olá! Sou a Marsha, sua assistente de bem-estar. Como posso te ajudar hoje?', delay: 500 },
        { type: 'user', text: 'Estou me sentindo ansioso...', delay: 2500 },
        { type: 'bot', text: 'Entendo. A ansiedade é uma resposta natural. Vamos trabalhar juntos algumas técnicas de respiração que podem te ajudar agora.', delay: 4000 }
    ];

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'typing-indicator';
        indicator.innerHTML = '<span></span><span></span><span></span>';
        chatDemo.appendChild(indicator);
        return indicator;
    }

    function addMessage(type, text) {
        const bubble = document.createElement('div');
        bubble.className = `chat-bubble ${type}`;
        bubble.style.opacity = '0';
        
        const p = document.createElement('p');
        p.textContent = text;
        bubble.appendChild(p);
        
        chatDemo.appendChild(bubble);
        
        setTimeout(() => {
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
        }, 50);
        
        chatDemo.scrollTop = chatDemo.scrollHeight;
    }

    function animateChat() {
        messages.forEach((msg, index) => {
            setTimeout(() => {
                if (msg.type === 'bot' && index > 0) {
                    const indicator = showTypingIndicator();
                    setTimeout(() => {
                        indicator.remove();
                        addMessage(msg.type, msg.text);
                    }, 1500);
                } else {
                    addMessage(msg.type, msg.text);
                }
            }, msg.delay);
        });
    }

    // Inicia a animação quando a seção fica visível
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateChat();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    observer.observe(chatDemo);
}

// Botão Voltar ao Topo
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Menu toggle para mobile
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Modal de Checkout
const modal = document.getElementById('checkoutModal');
const openCheckoutBtn = document.getElementById('openCheckout');
const closeModal = document.querySelector('.close-modal');

// Abrir modal
openCheckoutBtn.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Fechar modal
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Fechar ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Máscaras de input
document.getElementById('telefone').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
        e.target.value = value;
    }
});

document.getElementById('cpf').addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
        e.target.value = value;
    }
});

// Enviar formulário via WhatsApp
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cpf = document.getElementById('cpf').value;
    const pagamento = document.querySelector('input[name="pagamento"]:checked').value;
    
    // Número de WhatsApp da clínica
    const numeroWhatsApp = '5519991309355';
    
    const mensagem = `
🤖 *PEDIDO - Agente de IA MS Psicologia*

*Produto:* Assistente MS - Agente de IA
*Valor:* R$ 97,00/mês

*DADOS DO CLIENTE:*
👤 Nome: ${nome}
📧 E-mail: ${email}
📱 WhatsApp: ${telefone}
🆔 CPF: ${cpf}
💳 Forma de Pagamento: ${pagamento.toUpperCase()}

Aguardo instruções para pagamento!
    `.trim();
    
    const mensagemEncoded = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
    
    // Abrir WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Fechar modal e resetar formulário
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        document.getElementById('checkoutForm').reset();
        alert('Pedido enviado! Você será redirecionado para o WhatsApp.');
    }, 500);
});
