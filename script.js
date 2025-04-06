// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', () => {
            mobileNav.classList.toggle('open');
            mobileMenuButton.classList.toggle('open');
        });
    }

    // Scroll to Top Button
    const scrollToTopButton = document.getElementById('scroll-to-top');

    if (scrollToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollToTopButton.classList.add('show');
            } else {
                scrollToTopButton.classList.remove('show');
            }
        });

        scrollToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Simulação de envio de formulário de contato (apenas no frontend)
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    if (contactForm && formMessage) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Impede o envio real do formulário
            formMessage.textContent = 'Mensagem enviada com sucesso!';
            contactForm.reset(); // Limpa o formulário
            setTimeout(() => {
                formMessage.textContent = '';
            }, 3000); // Limpa a mensagem após 3 segundos
        });
    }
});
// script.js

document.addEventListener('DOMContentLoaded', function() {
    // ... (seu código JavaScript existente para menu mobile e scroll to top) ...

    // Banner com Rolagem Automática
    const bannerSlider = document.querySelector('.banner-slider');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');
    let currentIndex = 0;
    const slideInterval = 5000; // Intervalo de 5 segundos entre os slides
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

    startSlider(); // Inicia a rolagem automática

    // ... (seu código JavaScript existente para envio de formulário) ...
});