// js/quotation.js
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
var word = document.getElementById("quote-text")

// GET AUTHOR TEXT ELEMENT FROM DOM
var maker = document.getElementById("quote-author")

// SET INTERVAL TIMER TO ROTATE QUOTES
var inst = setInterval(revolvingQuotes, 12000)

// UPDATE QUOTE DISPLAY
function revolvingQuotes() {
    // SET QUOTE TEXT
    word.innerHTML = QUOTES[counter].quote

    // SET AUTHOR TEXT
    maker.innerHTML = QUOTES[counter].author

    // INCREMENT INDEX
    counter++

    // RESET INDEX WHEN END OF ARRAY IS REACHED
    if (counter >= QUOTES.length) {
        counter = 0
    }
}

// INITIALIZE FIRST QUOTE
revolvingQuotes()

// BREATHING TEXT ARRAY
var biboText = ["Breathe IN", "Breathe out"]
// TRACK BREATHING STATE INDEX
var biboCounter = 0
// GET BREATHING TEXT ELEMENT FROM DOM
var biboWord = document.getElementById("word")
// GET BREATHING CONTAINER ELEMENTS (OPTIONAL FOR STYLING)
var biboColor = document.getElementsByClassName("word-container")
// SET INTERVAL TIMER FOR BREATHING TEXT CHANGES
var biboInst = setInterval(change, 4000)

// UPDATE BREATHING TEXT
function change() {
    // SET BREATHING PHRASE TEXT
    biboWord.innerHTML = biboText[biboCounter]
    biboCounter++

    // RESET INDEX WHEN END IS REACHED
    if (biboCounter >= biboText.length) {
        biboCounter = 0
    }
}

// INITIALIZE BREATHING TEXT
change()