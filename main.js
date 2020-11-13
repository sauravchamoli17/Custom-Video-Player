// Get Elements
const player = document.querySelector('.player');
// Video
const video = player.querySelector('video');
// Video Progress Bar 
const progress = player.querySelector('.progress');
// Video Active Progress Bar 
const progressBar = player.querySelector('.progress__filled');
// Play/Pause Button
const toggle = player.querySelector('.player__button-toggle');
// Rewind and Forward Buttons 
const skipButtons = player.querySelectorAll('[data-skip]');
// Playback Rate and Volume Slider 
const ranges = player.querySelectorAll('.player__slider');
// Full Screen 
const fullScreen = player.querySelector('.full__screen');

// Build Out Functions 
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    const state = video.paused ? '▶': '❚❚';
    toggle.textContent = state;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = [this.value];
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function fullScreenMode() {
    video.requestFullscreen();
    video.webkitRequestFullscreen();
    video.msRequestFullScreen();
}

// Hook up Event Listeners 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullScreen.addEventListener('click', fullScreenMode);