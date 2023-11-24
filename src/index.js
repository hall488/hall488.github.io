import styleSheet from "./style.css";
import DropDown from "./drop-down";
import "devicon";
import HomeHTML from "./home.html";
import Projects from "./projects";
import ProjectsHTML from "./projects.html";
import Blog from "./blog";
import BlogHTML from "./blog.html";
import Resume from "./resume";
import ResumeHTML from "./resume.html";

DropDown();

let firstTime = localStorage.getItem("first_time");
if (!firstTime) {
  localStorage.setItem("first_time", "1");
  window.location.href = "https://ghp.christopherh.org/Personal-Portfolio/";
}

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

  let rs = getComputedStyle(r);

  let strokeColor = rs.getPropertyValue("--current-secondary");

  document.querySelector("#layer1").style.stroke = strokeColor;

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

container.innerHTML = HomeHTML;

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    header.style.opacity = "100%";
    container.style.opacity = "100%";
    footer.style.opacity = "100%";

    //document.querySelector(".intro-profile > img").src = lobster;
    switchColorMode();
  }, 250);
});

const Home = () => {};

const navigatePage = (page) => {
  let html;
  let js;
  switch (page) {
    case "Home":
      js = Home;
      html = HomeHTML;
      break;
    case "Projects":
      js = Projects;
      html = ProjectsHTML;
      break;
    case "Blog":
      js = Blog;
      html = BlogHTML;
      break;
    case "Resume":
      js = Resume;
      html = ResumeHTML;
      break;
  }

  container.innerHTML = html;
  js();
};

const menuBtns = document.querySelectorAll(".drop-down > .menu > li");

[...menuBtns].forEach((b) => {
  b.addEventListener("click", () => {
    let page = b.querySelector("div").textContent;
    navigatePage(page);
  });
});
