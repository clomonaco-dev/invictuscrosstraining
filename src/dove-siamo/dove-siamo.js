const slides = document.querySelectorAll(".location-slide");
const prevBtn = document.querySelector("[data-location-prev]");
const nextBtn = document.querySelector("[data-location-next]");

let currentIndex = 0;

function updateCarousel() {
  const total = slides.length;

  slides.forEach((slide, index) => {
    slide.classList.remove("active", "prev", "next");

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    if (index === currentIndex) {
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

function goNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function goPrev() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

if (slides.length > 0) {
  updateCarousel();

  nextBtn.addEventListener("click", goNext);
  prevBtn.addEventListener("click", goPrev);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") goNext();
    if (event.key === "ArrowLeft") goPrev();
  });
}