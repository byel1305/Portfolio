const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

/* ========================= */
/* MENU SCROLL SUAVE */
/* ========================= */

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute("href"));

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

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

/* ========================= */
/* CARROSSEL */
/* ========================= */

const carousels = document.querySelectorAll(".project-carousel");

carousels.forEach(carousel => {
  const images = carousel.querySelectorAll("img");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  let currentIndex = 0;

  // Criar bolinhas
  images.forEach((_, index) => {
    const dot = document.createElement("span");
    if(index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      showSlide(index);
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll("span");

  function showSlide(index) {
    images.forEach(img => img.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    images[index].classList.add("active");
    dots[index].classList.add("active");

    currentIndex = index;
  }

  nextBtn.addEventListener("click", () => {
    let newIndex = (currentIndex + 1) % images.length;
    showSlide(newIndex);
  });

  prevBtn.addEventListener("click", () => {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(newIndex);
  });

  // Auto slide
  setInterval(() => {
    let newIndex = (currentIndex + 1) % images.length;
    showSlide(newIndex);
  }, 4000);
});
