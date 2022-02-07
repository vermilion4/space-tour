const menuBtn = document.querySelector("[data-menu-btn]");
const navlist = document.querySelector("[data-navlist]");
const closeBtn = document.querySelector("[data-close-btn]");

menuBtn.addEventListener("click", () => {
  navlist.classList.toggle("open");
});

closeBtn.addEventListener("click", () => {
  navlist.classList.toggle("open");
});

window.addEventListener("resize",()=>{
    if (window.matchMedia("(min-width: 768px)").matches) {
        document.getElementById("background-img").src = "./assets/home/background-home-tablet.jpg";
      } else {
        document.getElementById("background-img").src = "./assets/home/background-home-mobile.jpg";
      }
})


document.addEventListener("DOMContentLoaded", function () {
  const selector = ".tablet-navlink";
  const tabLinks = Array.from(document.querySelectorAll(selector));
  const nav = document.querySelector(".tablet-navlist-items");

  function makeActive(evt) {
    const target = evt.target;

    if (!target || !target.matches(selector)) {
      return;
    }

    tabLinks.forEach((elem) => elem.classList.remove("active"));

    evt.target.classList.add("active");
  }

  nav.addEventListener("mousedown", makeActive);
});
