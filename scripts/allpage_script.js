let last_updated = "18.12.2025"

function AddNav(){
    document.getElementById("page_nav").innerHTML = `
                <img src="../images/icons/KaroleusLogo.webp">
                <a id="nav_home" onmouseenter="NavButtonChange('nav_home', 1)"  onmouseleave="NavButtonChange('nav_home', 0)" href="../index.html"> HOME </a>
                <a id="nav_about" onmouseenter="NavButtonChange('nav_about', 1)" onmouseleave="NavButtonChange('nav_about', 0)" href="about.html"> ABOUT </a>
                <a id="nav_projects" onmouseenter="NavButtonChange('nav_projects', 1)" onmouseleave="NavButtonChange('nav_projects', 0)" href="projects.html"> PROJECTS </a>
                <a id="nav_music" onmouseenter="NavButtonChange('nav_music', 1)" onmouseleave="NavButtonChange('nav_music', 0)" href="music.html"> MUSIC </a>
                <a id="nav_games" onmouseenter="NavButtonChange('nav_games', 1)" onmouseleave="NavButtonChange('nav_games', 0)" class="LastNav" href="games.html"> WEB GAMES </a>
                <img src="../images/other/PLAYMYGAMES.jpg" id="PLAYMYGAMES" alt="Sonic.exe">
                <p class="lastupdated_label">Last updated at ${last_updated}</p>
    `
}

function MoveBackUp() {
    window.scrollTo(0, 0);
}

function CheckPageAtTop(){
    if (window.scrollY <= 100){
        document.getElementById("BackUpButton").style.display = "none"
    }
    else{
        document.getElementById("BackUpButton").style.display = "block"
    }
}

function loopcheck(){
    setTimeout(function(){
        CheckPageAtTop()
        loopcheck()
    }, 100
)
}

loopcheck()
AddNav()