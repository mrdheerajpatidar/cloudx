const video = document.getElementById("myVideo");
const playOverlay = document.getElementById("playOverlay");

video.removeAttribute("controls");

video.addEventListener("click", () => {
  if (video.paused) {
    video
      .play()
      .then(() => {
        playOverlay.style.display = "none";
        video.setAttribute("controls", "true");
      })
      .catch((error) => {
        console.log("Playback failed:", error);
      });
  } else {
    video.pause();
    playOverlay.style.display = "block";
    video.removeAttribute("controls");
  }
});
