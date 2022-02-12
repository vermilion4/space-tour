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
var urlHead = window.location.href.split('/')[3];


window.addEventListener("resize", changeBackground)
console.log(url)
function changeBackground(){
  if(urlHead === 'space-tour' && url === '' || url === 'index.html' || url === 'index.html#'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("background-img").src = "./assets/home/background-home-mobile.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementById("background-img").src = "./assets/home/background-home-tablet.jpg";
    }
    else{
      document.getElementById("background-img").src = "./assets/home/background-home-desktop.jpg";
    }
  }
  if(url === 'destination-moon.html' || url === 'destination-mars.html' || url === 'destination-europa.html' || url === 'destination-titan.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("background-img").src = "./assets/destination/background-destination-mobile.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementById("background-img").src = "./assets/destination/background-destination-tablet.jpg";
    }
    else{
      document.getElementById("background-img").src = "./assets/destination/background-destination-desktop.jpg";
    }
  }
  if(url === 'crew-commander.html' || url === 'crew-specialist.html' || url === 'crew-engineer.html' || url === 'crew-pilot.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("background-img").src = "./assets/crew/background-crew-mobile.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementById("background-img").src = "./assets/crew/background-crew-tablet.jpg";
    }
    else{
      document.getElementById("background-img").src = "./assets/crew/background-crew-desktop.jpg";
    }
  }
  if(url === 'technology-vehicle.html' || url === 'technology-spaceport.html' || url === 'technology-capsule.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementById("background-img").src = "./assets/technology/background-technology-mobile.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementById("background-img").src = "./assets/technology/background-technology-tablet.jpg";
    }
    else{
      document.getElementById("background-img").src = "./assets/technology/background-technology-desktop.jpg";
    }
  }
  if(url === 'technology-vehicle.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-launch-vehicle-landscape.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-launch-vehicle-landscape.jpg";
    }
    else{
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-launch-vehicle-portrait.jpg"
    }
  }
  if(url === 'technology-spaceport.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-spaceport-landscape.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-spaceport-landscape.jpg";
    }
    else{
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-spaceport-portrait.jpg"
    }
  }
  if(url === 'technology-capsule.html'){
    if (window.matchMedia("(max-width: 767px)").matches) {
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-space-capsule-landscape.jpg";
    } else if(window.matchMedia("(min-width: 768px) and (max-width: 1151.9px)").matches) {
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-space-capsule-landscape.jpg";
    }
    else{
      document.getElementsByClassName("tech-img").src = "./assets/technology/image-space-capsule-portrait.jpg"
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
