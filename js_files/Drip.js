const audio = new Audio('Assets/sounds/WatrobaDrip.mp3')

window.addEventListener("load", () => {
    const watroba = document.getElementById("MrWatroba");
    const jumpscare = document.getElementById("MrWatrobaJumpscare");

    watroba.addEventListener("click", () => {
        jumpscare.style.display = "block";
        audio.currentTime = 0;
        audio.play();
        setTimeout(function() {
            jumpscare.style.display = "none";
        }, 7000)
    });
});