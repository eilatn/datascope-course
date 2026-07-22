"use strict";

const rootElement = document.documentElement;
const themeButton = document.querySelector("[data-theme-toggle]");
const mobileMenuButton = document.querySelector("[data-mobile-menu]");
const appNavigation = document.querySelector("[data-app-navigation]");

function getPreferredTheme() {
  const stored = localStorage.getItem("datascope-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function setTheme(theme) {
  rootElement.dataset.theme = theme;
  localStorage.setItem("datascope-theme", theme);

  if (themeButton) {
    const isDark = theme === "dark";
    themeButton.setAttribute("aria-pressed", String(isDark));
    themeButton.setAttribute(
      "aria-label",
      isDark ? "עברו למצב בהיר" : "עברו למצב כהה"
    );
    themeButton.textContent = isDark ? "☀" : "☾";
  }
}

setTheme(getPreferredTheme());

themeButton?.addEventListener("click", () => {
  setTheme(rootElement.dataset.theme === "dark" ? "light" : "dark");
});

mobileMenuButton?.addEventListener("click", () => {
  const isOpen = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", String(!isOpen));
  appNavigation?.classList.toggle("is-open", !isOpen);
});

appNavigation?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    mobileMenuButton?.setAttribute("aria-expanded", "false");
    appNavigation.classList.remove("is-open");
  }
});

const sections = [...document.querySelectorAll("[data-progress-section]")];
const progressBar = document.querySelector("[data-reading-progress]");
const progressText = document.querySelector("[data-progress-text]");
const stepLinks = [...document.querySelectorAll("[data-step-link]")];

if (sections.length && progressBar) {
  const updateProgress = () => {
    const midpoint = window.scrollY + window.innerHeight * 0.35;
    let currentIndex = 0;

    sections.forEach((section, index) => {
      if (section.offsetTop <= midpoint) currentIndex = index;
    });

    const progress = Math.round(((currentIndex + 1) / sections.length) * 100);
    progressBar.style.setProperty("--progress", `${progress}%`);
    progressText && (progressText.textContent = `${progress}%`);

    stepLinks.forEach((link, index) => {
      if (index === currentIndex) {
        link.setAttribute("aria-current", "step");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}
