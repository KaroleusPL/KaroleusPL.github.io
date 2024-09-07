const audio = new Audio('Sounds/WatrobaDrip.mp3')

window.addEventListener("load", function() {
  const watroba = document.getElementById("MrWatroba");

  watroba.addEventListener("click", function() {
    audio.play();
  });
});