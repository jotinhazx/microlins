
// Função para lidar com cliques no botão WhatsApp (geral)
function handleWhatsAppClick() {
    const message = encodeURIComponent("Olá! Tenho interesse em saber mais sobre os cursos profissionalizantes do Instituto Profissional. Poderiam me ajudar?");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
}

// Função para lidar com cliques no botão WhatsApp (curso específico)
function handleCourseWhatsApp(courseName) {
    const message = encodeURIComponent(`Olá! Tenho interesse no curso de ${courseName} e gostaria de mais informações sobre valores e matrícula. Poderiam me ajudar?`);
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
}

// Função para lidar com cliques no botão WhatsApp (CTA final detalhado)
function handleWhatsAppClickDetailed() {
    const message = encodeURIComponent("Olá, equipe do Instituto Profissional! Visitei o site e estou muito interessado(a) nos cursos profissionalizantes. Gostaria de conversar com um consultor para entender melhor as opções disponíveis, os valores, formas de pagamento e o processo de matrícula. Poderíamos agendar um atendimento ou vocês poderiam me passar essas informações por aqui?");
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank");
}

// Função para alternar o menu mobile
function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const hamburgerIcon = document.querySelector(".hamburger-menu i");
    mobileMenu.classList.toggle("open");
    if (mobileMenu.classList.contains("open")) {
        hamburgerIcon.classList.remove("fa-bars");
        hamburgerIcon.classList.add("fa-times");
    } else {
        hamburgerIcon.classList.remove("fa-times");
        hamburgerIcon.classList.add("fa-bars");
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