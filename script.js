// Botão Marsha - Quero saber primeiro
const btnMarshaNotify = document.querySelector('.btn-marsha-notify');
if (btnMarshaNotify) {
    btnMarshaNotify.addEventListener('click', () => {
        const numeroWhatsApp = '5519991309355';
        const mensagem = 'Olá! Gostaria de saber quando a Marsha for lançada.';
        const mensagemEncoded = encodeURIComponent(mensagem);
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemEncoded}`;
        window.open(urlWhatsApp, '_blank');
    });
}

// Interação dos Cards de Serviços com Modal
const serviceModal = document.getElementById('serviceModal');
const closeServiceModal = document.querySelector('.close-service-modal');
const modalServiceIcon = document.getElementById('modalServiceIcon');
const modalServiceTitle = document.getElementById('modalServiceTitle');
const modalServiceDescription = document.getElementById('modalServiceDescription');

const servicesData = {
    0: {
        title: 'Terapia Individual',
        description: 'A terapia individual pode ser feita conosco, Andrezza ou Michele, ou também com profissionais da nossa equipe. Ao selecionar nossos terapeutas parceiros buscamos ser criteriosas para dar conta de uma ampla gama de necessidades e preferências dos clientes. Temos terapeutas homens, mulheres, mais jovens, com mais experiência, assim como terapeutas com afinidade e experiência em áreas específicas, como transtornos alimentares, transtorno da personalidade borderline, ansiedade e depressão, atendimento para adultos e crianças.'
    },
    1: {
        title: 'Treinamento de Habilidades em DBT',
        description: 'Programa estruturado para desenvolver habilidades de atenção plena, regulação emocional, tolerância ao mal-estar e efetividade interpessoal. Indicado para quem busca mais estabilidade e clareza no dia a dia.'
    },
    2: {
        title: 'Treinamento para Comer Emocional e Compulsivo',
        description: 'Ciclo de encontros focado em compreender o comer impulsivo e construir uma relação mais consciente, funcional e compassiva com a comida. Baseado em DBT e em estratégias comportamentais práticas.'
    },
    3: {
        title: 'Supervisão de Casos para Profissionais',
        description: 'Espaço de estudo, reflexão e aprofundamento clínico voltado a profissionais da saúde mental. A supervisão é guiada pela Análise do Comportamento e pelas Terapias Contextuais, com foco na qualificação técnica e no fortalecimento do raciocínio clínico.'
    },
    4: {
        title: 'Atendimento Psiquiátrico',
        description: 'Avaliação, diagnóstico e acompanhamento medicamentoso conduzidos por profissionais de psiquiatria que integram seu trabalho ao cuidado psicológico, garantindo um tratamento alinhado, responsável e individualizado.'
    },
    5: {
        title: 'Atendimento Nutricional',
        description: 'Atendimento voltado à relação com a alimentação, ao comportamento alimentar e ao cuidado com o corpo de forma compassiva, não restritiva e apoiada em ciência. Ideal para quem busca orientação nutricional alinhada à saúde emocional.'
    }
};

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const serviceId = this.getAttribute('data-service');
        const serviceData = servicesData[serviceId];
        
        // Pega o ícone do card
        const iconSvg = this.querySelector('.service-icon').innerHTML;
        
        // Preenche o modal
        modalServiceIcon.innerHTML = iconSvg;
        modalServiceTitle.textContent = serviceData.title;
        modalServiceDescription.innerHTML = `
            ${serviceId === '0' ? 
                '<span class="service-modal-badge hybrid"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Presencial & Online</span>' : 
                '<span class="service-modal-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>Online</span>'
            }
            <p>${serviceData.description}</p>
            <a href="https://wa.me/5519991309355?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${encodeURIComponent(serviceData.title)}." target="_blank" class="btn-modal-action">Fale Conosco</a>
        `;
        
        // Abre o modal
        serviceModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal de serviço
if (closeServiceModal) {
    closeServiceModal.addEventListener('click', () => {
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Fechar ao clicar fora do modal de serviço
window.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
        serviceModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

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

// Modal de Checkout Marsha
const modalMarsha = document.getElementById('checkoutModalMarsha');
const openCheckoutMarshaBtn = document.getElementById('openCheckoutMarsha');
const closeModalMarsha = document.querySelector('.close-modal-marsha');
const confirmationModal = document.getElementById('confirmationModal');

// Abrir modal Marsha
if (openCheckoutMarshaBtn) {
    openCheckoutMarshaBtn.addEventListener('click', () => {
        modalMarsha.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
}

// Fechar modal Marsha
if (closeModalMarsha) {
    closeModalMarsha.addEventListener('click', () => {
        modalMarsha.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Fechar ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modalMarsha) {
        modalMarsha.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    if (e.target === confirmationModal) {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Máscaras de input Marsha
const telefoneMarsha = document.getElementById('telefoneMarsha');
const cpfMarsha = document.getElementById('cpfMarsha');

if (telefoneMarsha) {
    telefoneMarsha.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
            e.target.value = value;
        }
    });
}

if (cpfMarsha) {
    cpfMarsha.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length <= 11) {
            value = value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, '$1.$2.$3-$4');
            e.target.value = value;
        }
    });
}

// Processar pagamento Marsha (SIMULADO)
const checkoutFormMarsha = document.getElementById('checkoutFormMarsha');
if (checkoutFormMarsha) {
    checkoutFormMarsha.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nome = document.getElementById('nomeMarsha').value;
        const email = document.getElementById('emailMarsha').value;
        const telefone = document.getElementById('telefoneMarsha').value;
        const cpf = document.getElementById('cpfMarsha').value;
        
        // SIMULAÇÃO: Em produção, aqui vai a integração real com Mercado Pago
        // Por enquanto, simula um pagamento bem-sucedido
        
        console.log('Dados do cliente:', { nome, email, telefone, cpf });
        
        // Simula processamento
        const btnSubmit = checkoutFormMarsha.querySelector('.btn-submit');
        btnSubmit.textContent = 'Processando pagamento...';
        btnSubmit.disabled = true;
        
        setTimeout(() => {
            // Fecha modal de checkout
            modalMarsha.style.display = 'none';
            
            // Abre modal de confirmação
            confirmationModal.style.display = 'block';
            
            // Reset form
            checkoutFormMarsha.reset();
            btnSubmit.innerHTML = '<span>Pagar com Mercado Pago</span><span class="mp-icon">💳</span>';
            btnSubmit.disabled = false;
            
            // TODO: Aqui você vai adicionar o código para enviar email para a secretária
            // com os dados do cliente para criar o acesso no Amazon QuickSight
            
        }, 2000);
    });
}

// Fechar modal de confirmação
const btnCloseConfirmation = document.querySelector('.btn-close-confirmation');
if (btnCloseConfirmation) {
    btnCloseConfirmation.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}

// Modal de Checkout Original
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
