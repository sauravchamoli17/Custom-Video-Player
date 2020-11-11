// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('video');
// Video Progress Bar 
const progress = player.querySelector('.progress');
// Video Active Progress Bar 
const progressBar = player.querySelector('.progress__filled');
// Play/Pause Button 
const toggle = player.querySelector('.toggle');
// Rewind and Forward Buttons 
const skipButtons = player.querySelector('[data-skip]');
// Playback Rate and Volume Slider 
const ranges = player.querySelector('.player__slider'); 

// Build Out Functions 
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Hook up Event Listeners 
video.addEventListener('click', togglePlay);