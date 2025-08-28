// ==================== MENU ====================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Alterna menu aberto/fechado e muda ícone
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-line";
});

// Fecha o menu ao clicar em qualquer link
navLinks.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.className = "ri-menu-line";
  }
});

// ==================== SCROLL REVEAL ====================
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Função utilitária para simplificar o reveal
const revealElements = (selector, options = {}) => ScrollReveal().reveal(selector, { ...scrollRevealOptions, ...options });

// Header
revealElements(".header__container img");
revealElements(".header__container h1", { delay: 500 });
revealElements(".header__container p", { delay: 1000 });
revealElements(".header__btns", { delay: 1500 });

// Projetos
revealElements(".project__card", { interval: 500 });

// Experiência
revealElements(".experience__list li", { interval: 500 });

// Footer
revealElements(".footer__container h2");
revealElements(".footer__container p", { delay: 500 });
revealElements(".footer__container .mail__to", { delay: 1000 });
revealElements(".footer__socials", { delay: 1500 });
