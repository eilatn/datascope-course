"use strict";

const button = document.querySelector(".menu-button");
const nav = document.querySelector("#primary-navigation");

if (button && nav) {
  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });
}
