const audio = new Audio('Sounds/WatrobaDrip.mp3')

window.addEventListener("load", function() {
    const watroba = document.getElementById("MrWatroba");
    const Jumpscare = document.getElementById("MrWatrobaJumpscare");

    watroba.addEventListener("click", function() {
        Jumpscare.style.display = "block";
        audio.play();
        setTimeout(function() {
            Jumpscare.style.display = "none";
          }, 7000)
    });
});