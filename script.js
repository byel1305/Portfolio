const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

// Scroll suave ao clicar + ativa menu no clique
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    // Ativa o link clicado imediatamente
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Ativar menu conforme rolagem da página
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
