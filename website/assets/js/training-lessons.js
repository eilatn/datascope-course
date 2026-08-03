"use strict";

document.querySelectorAll("[data-lesson]").forEach((lesson) => {
  const slides = [...lesson.querySelectorAll("[data-slide]")];
  const previous = lesson.querySelector("[data-previous]");
  const next = lesson.querySelector("[data-next]");
  const currentLabel = lesson.querySelector("[data-current]");
  const totalLabel = lesson.querySelector("[data-total]");
  let current = 0;

  totalLabel.textContent = String(slides.length);

  function render() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("is-active", index === current);
      slide.setAttribute("aria-hidden", String(index !== current));
    });

    currentLabel.textContent = String(current + 1);
    previous.disabled = current === 0;
    next.disabled = current === slides.length - 1;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  previous.addEventListener("click", () => {
    if (current > 0) {
      current -= 1;
      render();
    }
  });

  next.addEventListener("click", () => {
    if (current < slides.length - 1) {
      current += 1;
      render();
    }
  });

  render();
});
