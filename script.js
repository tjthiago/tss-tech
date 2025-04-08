document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile (mesmo código)
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', () => {
            mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        });
    }

    // Botão Voltar ao Topo (mesmo código)
    const backToTopBtn = document.getElementById('back-to-top-btn');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Banner com Rolagem Automática (mesmo código)
    const bannerSlider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentIndex = 0;
    const slideInterval = 5000;
    let intervalId;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100 + '%';
        bannerSlider.style.transform = 'translateX(' + translateValue + ')';
    }

    function startSlider() {
        intervalId = setInterval(nextSlide, slideInterval);
    }

    function stopSlider() {
        clearInterval(intervalId);
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => {
            stopSlider();
            prevSlide();
            startSlider();
        });

        nextButton.addEventListener('click', () => {
            stopSlider();
            nextSlide();
            startSlider();
        });
    }

    startSlider();

    // Envio do formulário de contato (mesmo código)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            formMessage.textContent = 'Mensagem enviada com sucesso! (Simulação)';
            contactForm.reset();
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000);
        });
    }

    // Scroll suave para as seções ao clicar no menu
    const navLinks = document.querySelectorAll('.main-nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    const videos = document.querySelectorAll('.video-item video');

    function isElementInViewport(el) {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVideosVisibility() {
        videos.forEach(video => {
            if (isElementInViewport(video) && video.paused) {
                video.play();
            } else if (!isElementInViewport(video) && !video.paused) {
                video.pause(); // Opcional: pausar o vídeo quando sair da tela
            }
        });
    }

    window.addEventListener('scroll', checkVideosVisibility);
    window.addEventListener('resize', checkVideosVisibility); // Para lidar com mudanças no tamanho da janela
    checkVideosVisibility(); // Verificar a visibilidade dos vídeos no carregamento inicial da página
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    const loginModal = document.getElementById('login-modal');
    const openLoginModalBtn = document.getElementById('open-login-modal');
    const closeButton = document.querySelector('.close-button');
    const openRegisterFormLink = document.getElementById('open-register-form');
    const openLoginFormLink = document.getElementById('open-login-form');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');

    if (openLoginModalBtn) {
        openLoginModalBtn.addEventListener('click', () => {
            loginModal.style.display = 'block';
            loginFormContainer.style.display = 'block';
            registerFormContainer.style.display = 'none';
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
    }

    if (openRegisterFormLink) {
        openRegisterFormLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginFormContainer.style.display = 'none';
            registerFormContainer.style.display = 'block';
        });
    }

    if (openLoginFormLink) {
        openLoginFormLink.addEventListener('click', (e) => {
            e.preventDefault();
            registerFormContainer.style.display = 'none';
            loginFormContainer.style.display = 'block';
        });
    }

    // Fechar o modal se o usuário clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Simulação de envio do formulário de login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulário de login enviado (simulação)!');
            loginModal.style.display = 'none';
            // Aqui você implementaria a lógica real de autenticação
        });
    }

    // Simulação de envio do formulário de cadastro
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Formulário de cadastro enviado (simulação)!');
            loginModal.style.display = 'none';
            // Aqui você implementaria a lógica real de cadastro de usuário
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    function updateFinancialData() {
        // ========================================================================
        // IMPORTANTÍSSIMO: ESTE CÓDIGO É UMA SIMULAÇÃO DE DADOS FINANCEIROS.
        // PARA OBTER COTAÇÕES REAIS, VOCÊ PRECISA INTEGRAR UMA API DE DADOS FINANCEIROS.
        // ========================================================================

        // Exemplo de como você *poderia* buscar dados de uma API (este é apenas um exemplo conceitual):
        // fetch('URL_DA_API_DE_COTACOES')
        //     .then(response => response.json())
        //     .then(data => {
        //         // Processar os dados da API e atualizar os elementos HTML
        //         const usdBrl = data.rates.BRL; // Exemplo hipotético
        //         document.getElementById('usd-brl').querySelector('.value').textContent = usdBrl.toFixed(2);
        //         // ... faça o mesmo para outras moedas e bolsas ...
        //     })
        //     .catch(error => {
        //         console.error('Erro ao buscar dados financeiros:', error);
        //     });

        // Simulação de dados financeiros (PARA SUBSTITUIR PELA INTEGRAÇÃO REAL)
        const currencyData = {
            "USD/BRL": (Math.random() * 0.5 + 5.0).toFixed(2),
            "EUR/BRL": (Math.random() * 0.5 + 5.5).toFixed(2),
            "GBP/BRL": (Math.random() * 0.5 + 6.2).toFixed(2),
            "JPY/BRL": (Math.random() * 0.01 + 0.04).toFixed(3)
        };

        const stockData = {
            "Ibovespa": (Math.random() * 5000 + 120000).toFixed(0),
            "S&P 500": (Math.random() * 100 + 4500).toFixed(2),
            "Nasdaq": (Math.random() * 500 + 14000).toFixed(2),
            "Dow Jones": (Math.random() * 300 + 38000).toFixed(2)
        };

        // Atualiza os elementos HTML com os dados (simulados ou reais)
        document.getElementById('usd-brl').querySelector('.value').textContent = currencyData["USD/BRL"];
        document.getElementById('eur-brl').querySelector('.value').textContent = currencyData["EUR/BRL"];
        document.getElementById('gbp-brl').querySelector('.value').textContent = currencyData["GBP/BRL"];
        document.getElementById('jpy-brl').querySelector('.value').textContent = currencyData["JPY/BRL"];

        document.getElementById('ibovespa').querySelector('.value').textContent = stockData["Ibovespa"];
        document.getElementById('sp500').querySelector('.value').textContent = stockData["S&P 500"];
        document.getElementById('nasdaq').querySelector('.value').textContent = stockData["Nasdaq"];
        document.getElementById('dow-jones').querySelector('.value').textContent = stockData["Dow Jones"];
    }

    // Chama a função para atualizar os dados inicialmente
    updateFinancialData();

    // Atualiza os dados a cada 10 segundos (ajuste conforme necessário)
    setInterval(updateFinancialData, 10000);
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    function loadNewsTicker() {
        fetch('news.json')
            .then(response => response.json())
            .then(data => {
                const tickerContainer = document.querySelector('.breaking-news-ticker');
                if (tickerContainer) {
                    tickerContainer.innerHTML = ''; // Limpa o conteúdo existente
                    data.forEach(news => {
                        const link = document.createElement('a');
                        link.href = '#'; // Você pode adicionar links específicos aqui
                        link.classList.add('breaking-news-item');
                        link.textContent = news.headline;
                        tickerContainer.appendChild(link);
                    });
                    // Recarrega a animação (pode ser necessário um pequeno timeout para o DOM atualizar)
                    setTimeout(() => {
                        const newTickerContainer = document.querySelector('.breaking-news-ticker');
                        if (newTickerContainer) {
                            newTickerContainer.style.animationPlayState = 'running';
                        }
                    }, 100);
                }
            })
            .catch(error => {
                console.error('Erro ao carregar notícias:', error);
            });
    }

    // Chama a função para carregar o ticker de notícias quando a página carrega
    loadNewsTicker();

    // Você pode adicionar um intervalo para atualizar as notícias periodicamente, se desejar
    // setInterval(loadNewsTicker, 300000); // Atualiza a cada 5 minutos
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const emailInput = loginForm.querySelector('input[type="email"]');
            const passwordInput = loginForm.querySelector('input[type="password"]');
            let isValid = true;

            if (!emailInput.value.trim()) {
                alert('Por favor, insira seu e-mail.');
                isValid = false;
            }

            if (!passwordInput.value.trim()) {
                alert('Por favor, insira sua senha.');
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Impede o envio do formulário se a validação falhar
            }
        });
    }

    // Você pode adicionar lógica de validação semelhante para o formulário de registro
});
document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente) ...

    const navLinks = document.querySelectorAll('.main-nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.classList.add('hovered'); // Adicione uma classe CSS 'hovered'
        });
        link.addEventListener('mouseout', function() {
            this.classList.remove('hovered'); // Remova a classe 'hovered'
        });
    });
});