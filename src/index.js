import styleSheet from "./style.css";
import DropDown from "./drop-down";
import "devicon";

DropDown();

const colorModeEl = document.querySelector(".color-mode");
const r = document.querySelector(":root");

let colorMode = "dark";

const switchColorMode = () => {
  colorMode = colorMode == "light" ? "dark" : "light";

  console.log(colorMode);

  r.style.setProperty("--current-primary", `var(--${colorMode}-mode-primary)`);
  r.style.setProperty(
    "--current-secondary",
    `var(--${colorMode}-mode-secondary)`
  );

  if (colorMode == "light") {
    colorModeEl.children[0].style.display = "flex";
    colorModeEl.children[1].style.display = "none";
  } else {
    colorModeEl.children[0].style.display = "none";
    colorModeEl.children[1].style.display = "flex";
  }
};

colorModeEl.addEventListener("click", switchColorMode);

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

let header = document.querySelector(".header");
let container = document.querySelector(".container");
let footer = document.querySelector(".footer");

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    header.style.opacity = "100%";
    container.style.opacity = "100%";
    footer.style.opacity = "100%";

    //document.querySelector(".intro-profile > img").src = lobster;
    switchColorMode();
  }, 250);
});
