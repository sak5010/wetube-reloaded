const video = document.querySelector("video");
const playBtn = document.querySelector("#play");
const muteBtn = document.querySelector("#mute");
const time = document.querySelector("#time");
const volume = document.querySelector("#volume");

const handlePlayandPause = (e) => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

const handleMute = (e) => {};

const handlePause = (e) => (playBtn.innerText = "Play");
const handlePlay = (e) => (playBtn.innerText = "Pause");

playBtn.addEventListener("click", handlePlayandPause);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
