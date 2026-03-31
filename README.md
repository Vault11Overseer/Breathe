# Breathe

A responsive breathing and relaxation web application designed to help users reduce stress using guided breathing, ambient music, visual animations, and rotating inspirational quotes.

## Demo

Live demo: https://jaredmatta.com/Breathe/

---

## Overview

Breathe is a lightweight browser-based application built using vanilla HTML, CSS, and JavaScript. It provides an interactive relaxation environment that combines breathing prompts, background visuals, music playback, and motivational quotes.

The goal of the project is to create a "Zen" experience—a simple, distraction-free tool that users can access on desktop or mobile devices during moments of stress, focus sessions, or meditation. It utilizes smooth CSS transitions and synchronized JavaScript logic to create a cohesive atmosphere.

---

## Features

- **Guided Breathing Engine**: Dynamic text prompts ("BREATHE IN!" / "~ breathe out ~") synchronized with a pulsating visual circle animation.
- **Dynamic Environment System**: Seamlessly switch between five immersive background scenes (Temple, Mountain, Red Shift, Monastery, and Wormhole) via the navigation menu.
- **Integrated Music Suite**: A custom-built HTML5 audio player featuring a curated playlist of 12 ambient tracks, real-time progress tracking, and album art rotation.
- **Inspirational Quote Engine**: A rotating display of wisdom from figures like Alan Watts and Buddha, cycling every 12 seconds with smooth transitions.
- Ambient music player with play, pause, skip, and progress controls
- Rotating inspirational quotes
- Responsive design for mobile, tablet, and desktop
- Hamburger navigation menu for mobile usability
- Touch and click interaction support
- Minimal, dependency-free implementation

---

## Tech Stack

- **HTML5**: Semantic structure and Audio API for media playback.
- **CSS3**: Advanced animations (Keyframes), Flexbox layout, and custom gradients.
- **Vanilla JavaScript (ES6+)**: DOM manipulation, event-driven architecture, and interval management.
- **Font Awesome**: High-quality vector icons for UI controls.
- Google Fonts

---

## Getting Started

### Prerequisites

- Any modern web browser
- Optional: Local server for development

### Installation

1. Clone the repository:
git clone <repository-url>

2. Navigate into the project:
cd breathe

3. Run locally (optional):
python -m http.server

Then open:
http://localhost:8000

Or open the `index.html` file directly in a browser.

---

## Usage

### Desktop

- Use the navigation menu to switch background scenes
- Use the music player controls to play, pause, or skip tracks
- Watch breathing prompts and follow the rhythm
- Read rotating quotes displayed in the UI
- Interact with controls using mouse clicks

### Mobile

- Tap the hamburger menu to access navigation options
- Tap to interact with music controls
- Follow breathing prompts displayed on screen
- Swipe/tap interactions supported for general UI elements
- Designed to be responsive across screen sizes

### Settings / Controls (if applicable)

- Navigation menu (hamburger icon) to switch scenes:
  - Red Shift
  - Mountain Top
  - Temple Tree
  - Temple
  - Wormhole
- Music controls:
  - Play / Pause
  - Previous / Next track
  - Interactive progress bar (click to seek)
- Breathing display updates automatically on interval

---

## Key Improvements / Updates

- **Synchronized Animation Logic**: Implemented `animationiteration` listeners to perfectly sync text changes with the visual pulse of the breathing circles.
- **Advanced Mobile UX**: Integrated a sliding hamburger navigation menu and optimized touch targets for mobile users.
- Integrated audio player with UI controls
- Added rotating quote system
- Added breathing prompt animations/text cycling
- Improved UI organization and accessibility
- Modularized JavaScript into separate feature files

---

## Future Improvements

- User accounts and login system
- Custom playlists and audio uploads
- Adjustable breathing pace settings
- Dark/Light mode persistence
- Theme customization and presets
- Expanded animation and visual effects
- Enhanced accessibility options (ARIA support, reduced motion mode)

---

## Contributing

1. Fork the repository  
2. Create a feature branch  
3. Commit your changes  
4. Open a pull request  

---

## Issues

If you encounter bugs or unexpected behavior, please report them via the repository’s issue tracker or contact the maintainer.

---

## License

No license specified. Add a license if redistribution or reuse is intended.

---

## Notes

This project emphasizes simplicity, responsiveness, and usability without external frameworks. It is designed to run entirely in the browser with minimal setup.
