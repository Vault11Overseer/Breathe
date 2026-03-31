// js/media.js
// MEDIA


// MENU
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");
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




// BACKGROUND CHANGE FUNCTIONS
function changeBackground(fileName, linkId) {
  // Update background image
  document.getElementById("background").style.backgroundImage = `url('./assets/images/backgrounds/${fileName}.webp')`;

  // Show all links, then hide the clicked one
  document.querySelectorAll('.nav_link').forEach(link => {
    link.classList.remove('active-bg');
  });
  document.getElementById(linkId).classList.add('active-bg');
}

// Set initial state for Red Shift on load
window.onload = () => {
  document.getElementById('redshift').classList.add('active-bg');
};



// QUOTES
// ARRAY OF QUOTES USED FOR ROTATION DISPLAY
const QUOTES = [
  {
    id: 1,
    quote: "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves",
    author: "~Buddah~"
  },
  {
    id: 2,
    quote: "Tension is who you think you should be. Relaxation is who you are.",
    author: "~Ude Ibiam Ufiem~"
  },
  {
    id: 3,
    quote: "To resist change, to try to cling to life, is therefore like holding your breath, if you persist you kill yourself.",
    author: "~Alan Watts~"
  },
  {
    id: 4,
    quote: "Relax and take a deep breath. No one else knows what they’re doing either.",
    author: "~Ricky Gervais~"
  },
  {
    id: 5,
    quote: "Your mind will answer most questions if you learn to relax and wait for the answer.",
    author: "~William Burroughs~"
  }
]

// TRACK CURRENT QUOTE INDEX
var counter = 0

// GET QUOTE TEXT ELEMENT FROM DOM
var quote = document.getElementById("quote-text")

// GET AUTHOR TEXT ELEMENT FROM DOM
var author = document.getElementById("quote-author")

// SET INTERVAL TIMER TO ROTATE QUOTES
var inst = setInterval(revolvingQuotes, 12000)

// UPDATE QUOTE DISPLAY
function revolvingQuotes() {
  // SET QUOTE TEXT
  quote.innerHTML = QUOTES[counter].quote

  // SET AUTHOR TEXT
  author.innerHTML = QUOTES[counter].author

  // INCREMENT INDEX
  counter++

  // RESET INDEX WHEN END OF ARRAY IS REACHED
  if (counter >= QUOTES.length) {
    counter = 0
  }
}

// INITIALIZE FIRST QUOTE
revolvingQuotes()












// // BREATHING TEXT
const textEl = document.getElementById("breathe");
const circle = document.querySelector(".circle-container");

let isInhale = true;

circle.addEventListener("animationiteration", () => {
  isInhale = !isInhale;

  textEl.classList.add("fade-out");

  setTimeout(() => {
    if (isInhale) {
      textEl.textContent = "BREATHE IN !";
      textEl.classList.remove("exhale");
      textEl.classList.add("inhale");
    } else {
      textEl.textContent = "~ breathe out ~";
      textEl.classList.remove("inhale");
      textEl.classList.add("exhale");
    }

    textEl.classList.remove("fade-out");
  }, 200);
});