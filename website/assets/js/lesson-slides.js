"use strict";

const slides = [...document.querySelectorAll("[data-lesson-slide]")];
const outlineLinks = [...document.querySelectorAll("[data-slide-link]")];
const nextButton = document.querySelector("[data-slide-next]");
const prevButton = document.querySelector("[data-slide-prev]");
const count = document.querySelector("[data-slide-count]");
const progress = document.querySelector("[data-lesson-progress]");
let current = 0;

function showSlide(index, updateHash = true) {
  if (!slides.length) return;
  current = Math.max(0, Math.min(index, slides.length - 1));

  slides.forEach((slide, i) => {
    const active = i === current;
    slide.classList.toggle("is-active", active);
    slide.hidden = !active;
    slide.setAttribute("aria-hidden", String(!active));
  });

  outlineLinks.forEach((link, i) => {
    if (i === current) link.setAttribute("aria-current", "step");
    else link.removeAttribute("aria-current");
  });

  if (count) count.textContent = `${current + 1} / ${slides.length}`;
  if (progress) progress.style.setProperty("--progress", `${((current + 1) / slides.length) * 100}%`);

  if (prevButton) prevButton.disabled = current === 0;
  if (nextButton) nextButton.disabled = current === slides.length - 1;

  const activeSlide = slides[current];
  if (updateHash && activeSlide?.id) history.replaceState(null, "", `#${activeSlide.id}`);
  activeSlide?.querySelector("h1")?.focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

outlineLinks.forEach((link, i) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    showSlide(i);
  });
});
nextButton?.addEventListener("click", () => showSlide(current + 1));
prevButton?.addEventListener("click", () => showSlide(current - 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") showSlide(current + 1);
  if (event.key === "ArrowRight") showSlide(current - 1);
});

const initialHash = location.hash.replace("#", "");
const initialIndex = slides.findIndex((slide) => slide.id === initialHash);
showSlide(initialIndex >= 0 ? initialIndex : 0, false);
