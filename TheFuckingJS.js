const audio = new Audio('Sounds/WatrobaDrip.mp3')

window.addEventListener("load", () => {
    const watroba = document.getElementById("MrWatroba");
    const Jumpscare = document.getElementById("MrWatrobaJumpscare");

    watroba.addEventListener("click", () => {
        Jumpscare.style.display = "block";
        audio.currentTime = 0;
        audio.play();
        setTimeout(function() {
            Jumpscare.style.display = "none";
        }, 7000)
    });

    /*
    const NewestMusic = document.querySelector("audio");

    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");

    playButton.addEventListener("click", () => {
        NewestMusic.play();
    });

    pauseButton.addEventListener("click", () => {
        NewestMusic.pause();
    });
    */

});