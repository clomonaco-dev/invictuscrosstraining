// MENU MOBILE
const navToggle = document.querySelector("[data-nav-toggle]");
const nav = document.querySelector("[data-nav]");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

// HEADER SCROLL
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 20);
  }
});

// ANIMAZIONI REVEAL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// FORM CONTATTI
const form = document.querySelector("#contactForm");
const status = document.querySelector("[data-form-status]");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = new FormData(form).get("nome") || "Atleta";

    status.textContent = `Grazie ${nome}! Richiesta demo registrata. Collega qui WhatsApp, email o backend.`;

    form.reset();
  });
}

// CAROUSEL 3D DOVE SIAMO
const locationSlides = document.querySelectorAll(".location-slide");
const locationPrev = document.querySelector("[data-location-prev]");
const locationNext = document.querySelector("[data-location-next]");

let locationIndex = 0;

function updateLocationCarousel() {
  locationSlides.forEach((slide, index) => {
    slide.classList.remove("active", "prev", "next");

    const prevIndex =
      (locationIndex - 1 + locationSlides.length) % locationSlides.length;

    const nextIndex = (locationIndex + 1) % locationSlides.length;

    if (index === locationIndex) {
      slide.classList.add("active");
    }

    if (index === prevIndex) {
      slide.classList.add("prev");
    }

    if (index === nextIndex) {
      slide.classList.add("next");
    }
  });
}

if (locationSlides.length > 0) {
  updateLocationCarousel();

  if (locationNext) {
    locationNext.addEventListener("click", () => {
      locationIndex = (locationIndex + 1) % locationSlides.length;
      updateLocationCarousel();
    });
  }

  if (locationPrev) {
    locationPrev.addEventListener("click", () => {
      locationIndex =
        (locationIndex - 1 + locationSlides.length) % locationSlides.length;

      updateLocationCarousel();
    });
  }
}