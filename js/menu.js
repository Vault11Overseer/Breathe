// js/menu.js
// MENU

// DOM ELEMENT REFERENCES
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const navLink = document.querySelectorAll(".nav_link");

// TOGGLE MENU OPEN/CLOSE ON HAMBURGER CLICK
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  // TOGGLE ACTIVE STATE ON HAMBURGER ICON (ANIMATION / TRANSFORM)
  hamburger.classList.toggle("active");

  // TOGGLE ACTIVE STATE ON NAV MENU (SHOW / HIDE)
  navMenu.classList.toggle("active");
}

// CLOSE MENU WHEN A LINK IS CLICKED
navLink.forEach(n => n.addEventListener("click", closeMenu));

// CLOSE MENU FUNCTION
function closeMenu() {
  // REMOVE ACTIVE STATE FROM HAMBURGER ICON
  hamburger.classList.remove("active");

  // REMOVE ACTIVE STATE FROM NAV MENU
  navMenu.classList.remove('active');
}
