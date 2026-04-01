// js/music.js
// MUSIC

// DOM ELEMENT REFERENCES
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('music-title');
const cover = document.getElementById('music-cover');

// SONG LIST
// ADD OR REMOVE TRACKS HERE. FILE NAMES MUST MATCH EXACTLY IN /music AND /images DIRECTORIES.
const songs = [
  'Show Reel',
  'Ambient Piano',
  'Emotional Piano',
  'Far From Home',
  'First Focus',
  'Just Relax',
  'Relax',
  'Relaxing Light',
  'Reorder',
  'Sleep',
  'Spirit Blossom',
  'Summer Sun'
];

// CURRENT SONG INDEX TRACKER
let songIndex = 0;

// INITIAL LOAD
// LOAD FIRST SONG INTO UI AND AUDIO ELEMENT
document.addEventListener('DOMContentLoaded', () => {
  loadSong(songs[songIndex]);
});

// LOAD SONG DATA INTO UI + AUDIO SOURCE
function loadSong(song) {
  // SET DISPLAY TITLE
  title.innerText = song;

  // SET AUDIO SOURCE FILE
  audio.src = `./assets/music/${song}.mp3`;

  // SET COVER IMAGE
  cover.src = `./assets/images/album_covers/${song}.webp`;
}

// PLAY AUDIO
function playSong() {
  // ADD PLAY STATE CLASS
  musicContainer.classList.add('play');

  // UPDATE PLAY BUTTON ICON (PLAY → PAUSE)
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  // START AUDIO PLAYBACK
  audio.play();
}

// PAUSE AUDIO
function pauseSong() {
  // REMOVE PLAY STATE CLASS
  musicContainer.classList.remove('play');

  // UPDATE PLAY BUTTON ICON (PAUSE → PLAY)
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  // PAUSE AUDIO PLAYBACK
  audio.pause();
}

// PLAY PREVIOUS SONG
function prevSong() {
  // DECREMENT INDEX
  songIndex--;

  // WRAP TO END IF OUT OF RANGE
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  // LOAD AND AUTO PLAY
  loadSong(songs[songIndex]);
  playSong();
}

// PLAY NEXT SONG
function nextSong() {
  // INCREMENT INDEX
  songIndex++;

  // WRAP TO START IF OUT OF RANGE
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  // LOAD AND AUTO PLAY
  loadSong(songs[songIndex]);
  playSong();
}

// UPDATE PROGRESS BAR BASED ON CURRENT PLAYBACK TIME
function updateProgress(e) {
  const {
    duration,
    currentTime
  } = e.srcElement;

  // CALCULATE PERCENTAGE COMPLETED
  const progressPercent = (currentTime / duration) * 100;

  // UPDATE PROGRESS BAR WIDTH
  progress.style.width = `${progressPercent}%`;
}

// SEEK AUDIO POSITION BASED ON CLICK LOCATION IN PROGRESS BAR
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  // CALCULATE NEW CURRENT TIME BASED ON CLICK POSITION
  audio.currentTime = (clickX / width) * duration;
}

/*--------------------------------
 EVENT LISTENERS
 ------------------------------ */

// PLAY / PAUSE TOGGLE BUTTON
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// PREVIOUS / NEXT TRACK CONTROLS
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// UPDATE PROGRESS BAR AS AUDIO PLAYS
audio.addEventListener('timeupdate', updateProgress);

// ALLOW USER TO CLICK PROGRESS BAR TO SEEK
progressContainer.addEventListener('click', setProgress);

// AUTO-ADVANCE TO NEXT SONG WHEN CURRENT SONG ENDS
audio.addEventListener('ended', nextSong);