// Função para lidar com cliques no WhatsApp
function handleWhatsAppClick() {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Gostaria de saber mais sobre os cursos do Instituto Profissional.";
    const whatsappURL = `https://wa.me/${5569999878187}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Função para lidar com cliques específicos de cursos
function handleCourseWhatsApp(courseName) {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = `Olá! Gostaria de saber mais sobre o curso de ${courseName}.`;
    const whatsappURL = `https://wa.me/${5569999878187}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Função para alternar o menu mobile
function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburgerIcon = document.querySelector(".hamburger-menu i");

    if (mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
        document.body.style.overflow = "";
    } else {
        mobileMenu.classList.add("open");
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
        document.body.style.overflow = "hidden";
    }
}

// Função para rolagem suave para a seção de cursos
function scrollToCourses() {
    document.getElementById("cursos").scrollIntoView({ behavior: "smooth" });
}

// Adicionar evento de clique para fechar o menu mobile ao clicar fora
document.addEventListener("click", function (event) {
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnHamburger = hamburgerMenu.contains(event.target);

    if (mobileMenu.classList.contains("open") && !isClickInsideMenu && !isClickOnHamburger) {
        toggleMenu();
    }
});

// Fechar menu mobile ao redimensionar a tela para desktop
window.addEventListener("resize", function () {
    const mobileMenu = document.getElementById("mobileMenu");
    if (window.innerWidth > 768 && mobileMenu.classList.contains("open")) {
        toggleMenu();
    }
});

// Funcionalidade de esconder/mostrar header ao rolar
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Rolando para baixo e passou de 100px
        header.classList.add('hidden');
    } else {
        // Rolando para cima
        header.classList.remove('hidden');
    }
    lastScrollTop = scrollTop;
});

// Carrossel de parceiros
const partnersCarousel = document.getElementById('partnersCarousel');
const partnersTrack = document.querySelector('.partners-track');
const partnerLogos = document.querySelectorAll('.partners-track img');

let currentPartnerIndex = 0;

// Ajusta o tamanho do carrossel com base na largura da tela
function updatePartnersCarouselSize() {
    if (!partnersTrack || partnerLogos.length === 0) return;
    const size = partnersCarousel.offsetWidth;
    partnersTrack.style.transform = 'translateX(' + (-size * currentPartnerIndex) + 'px)';
}

// Função de Avanço Automático
function autoSlidePartners() {
    const size = partnersCarousel.offsetWidth;
    partnersTrack.style.transition = "transform 0.5s ease-in-out";
    currentPartnerIndex++;
    if (currentPartnerIndex >= partnerLogos.length) {
        currentPartnerIndex = 0;
    }
    partnersTrack.style.transform = 'translateX(' + (-size * currentPartnerIndex) + 'px)';
}

// Controle pelos botões
function movePartnersCarousel(direction) {
    const size = partnersCarousel.offsetWidth;
    partnersTrack.style.transition = "transform 0.5s ease-in-out";
    currentPartnerIndex += direction;

    if (currentPartnerIndex < 0) {
        currentPartnerIndex = partnerLogos.length - 1;
    } else if (currentPartnerIndex >= partnerLogos.length) {
        currentPartnerIndex = 0;
    }
    partnersTrack.style.transform = 'translateX(' + (-size * currentPartnerIndex) + 'px)';
}

// Configuração de intervalo para slide automático
setInterval(autoSlidePartners, 3000);

// Ajusta o carrossel ao redimensionar a tela
window.addEventListener('resize', updatePartnersCarouselSize);

// Inicializa o tamanho do carrossel
window.addEventListener('load', updatePartnersCarouselSize);
