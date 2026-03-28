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












// BREATHING TEXT
var biboText = ["BREATHE IN!", "breathe out!"];
// TRACK BREATHING STATE INDEX
var biboCounter = 0;
// GET BREATHING TEXT ELEMENT FROM DOM
var biboWord = document.getElementById("breathe");

const FADE_DURATION = 500; // Milliseconds, matches CSS transition duration for opacity
const CYCLE_DURATION = 4000; // Milliseconds, the interval for text change

function animateBreatheText() {
  // Set the current text and ensure it's visible (fade-in)
  biboWord.innerHTML = biboText[biboCounter];
  biboWord.classList.remove('fade-out');

  // Prepare for the next text in the sequence
  biboCounter++;
  if (biboCounter >= biboText.length) {
    biboCounter = 0;
  }

  // Schedule the fade-out to start before the next text change
  setTimeout(() => {
    biboWord.classList.add('fade-out');
  }, CYCLE_DURATION - FADE_DURATION);

  // Schedule the next text update and fade-in cycle
  setTimeout(() => {
    animateBreatheText(); // Recursive call for the next cycle
  }, CYCLE_DURATION);
}

// INITIALIZE BREATHING TEXT
animateBreatheText();