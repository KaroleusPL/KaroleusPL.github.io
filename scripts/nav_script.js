
function NavButtonChange(button_id, status){
    let Texts = {
        "nav_home" : ["HOME", "Home page!"],
        "nav_about" : ["ABOUT", "Learn about me!"],
        "nav_projects" : ["PROJECTS", "Check out my projects!"],
        "nav_music" : ["MUSIC", "Listen to my music!"],
        "nav_games" : ["<div id=`PLAYMYGAMES`>WEB GAMES</div>", "<div id=`PLAYMYGAMES`>Play my games.</div>"],
    }

    document.getElementById(button_id).innerHTML = `${Texts[button_id][status]}`
}