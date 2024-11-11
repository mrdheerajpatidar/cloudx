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
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
