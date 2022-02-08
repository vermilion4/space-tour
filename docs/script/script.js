const menuBtn = document.querySelector("[data-menu-btn]");
const navlist = document.querySelector("[data-navlist]");
const closeBtn = document.querySelector("[data-close-btn]");

menuBtn.addEventListener("click", () => {
  navlist.classList.toggle("open");
  
  if(navlist.classList.contains("open")){
    menuBtn.style.display = "none"
  }
  else{
    menuBtn.style.display = "block"
  }
  
});

closeBtn.addEventListener("click", () => {
  navlist.classList.toggle("open");

  if(navlist.classList.contains("open")){
    menuBtn.style.display = "none"
  }
  else{
    menuBtn.style.display = "block"
  }
});

var url = window.location.href.split('/')[4];


window.addEventListener("resize", changeBackground)

function changeBackground(){
  if(url === 'index.html' || url === 'index.html#'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("background-img").src = "./assets/home/background-home-tablet.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementById("background-img").src = "./assets/home/background-home-mobile.jpg";
    }
    else{
      document.getElementById("background-img").src = "./assets/home/background-home-desktop.jpg";
    }
  }
  if(url === 'destination-moon.html' || url === 'destination-mars.html' || url === 'destination-europa.html' || url === 'destination-titan.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("background-img").src = "./assets/destination/background-destination-tablet.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementById("background-img").src = "./assets/destination/background-destination-mobile.jpg";
    }
    else{
      document.getElementById("background-img").src = "./assets/destination/background-destination-desktop.jpg";
    }
  }

}
document.addEventListener("DOMContentLoaded",changeBackground)

// document.addEventListener("DOMContentLoaded", function () {
//   const selector = ".tablet-navlink";
//   const tabLinks = Array.from(document.querySelectorAll(selector));
//   const nav = document.querySelector(".tablet-navlist-items");

//   function makeActive(evt) {
//     const target = evt.target;

//     if (!target || !target.matches(selector)) {
//       return;
//     }

//     tabLinks.forEach((elem) => elem.classList.remove("active"));

//     evt.target.classList.add("active");
//   }
  

//   nav.addEventListener("mousedown", makeActive);
// });
