const video = document.querySelector("video");
const play = document.querySelector(".play");
const stopPlay = document.querySelector(".stop");
const progress = document.querySelector(".progress");
const timing = document.querySelector(".timing");


video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener("play", updatePlayIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stopPlay.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);


// toggle video status
function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

//update play icon
function updatePlayIcon () {
   if (video.paused) {
       play.innerHTML = `<i class="fas fa-play"></i>`;
    } else {
       play.innerHTML = `<i class="fas fa-pause"></i>`;
    }
}

// update progress

function updateProgress () {
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = "0" + String(minutes);
    } 
    //get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = "0" + String(seconds);
    } 

    timing.innerHTML = `${minutes}:${seconds}`;
}

//stop video

function stopVideo () {
    video.currentTime = 0;
    video.pause();
}
//set video progress

function setVideoProgress () {
  video.currentTime = (+progress.value * video.duration) / 100;
}

console.log(play);