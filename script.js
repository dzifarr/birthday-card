function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  const colors = ["red", "blue", "green", "yellow", "purple", "pink"];
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
  balloon.style.left = Math.random() * 100 + "vw";
  balloon.style.animationDuration = Math.random() * 3 + 3 + "s";

  document.querySelector(".balloons").appendChild(balloon);
  setTimeout(() => {
    balloon.remove();
  }, 5000);
}
setInterval(createBalloon, 500);
