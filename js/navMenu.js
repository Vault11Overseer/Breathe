/*--------------------------------------------------------------
>>> HAMBURGER MOBILE MENU JS
--------------------------------------------------------------*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const navLink = document.querySelectorAll(".nav_link");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));


function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove('active');
}

/*--------------------------------------------------------------
>>> HAMBURGER MOBILE MENU JS - END
--------------------------------------------------------------*/