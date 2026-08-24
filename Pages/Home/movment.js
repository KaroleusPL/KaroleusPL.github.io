const Planets_Nav = document.getElementById("Planets_Nav")
const Planet_L_F = document.getElementById("Planet_L_F")
const Planet_L = document.getElementById("Planet_L")
const Planet_M = document.getElementById("Planet_M")
const Planet_R = document.getElementById("Planet_R")
const Planet_R_F = document.getElementById("Planet_R_F")

let Planets = ["HOME", "ABOUT", "PROJECTS", "MUSIC", "WEB GAMES", "PAGES"]

let Planet_ID = 0

function ReloadPlanets(){
    let L_F_id = Planet_ID - 2
    let L_id = Planet_ID - 1
    let M_id = Planet_ID
    let R_id = Planet_ID + 1
    let R_F_id = Planet_ID + 2

    if (L_F_id < -1) {
        L_F_id = Planets.length -2
    }
    else if (L_F_id < 0) {
        L_F_id = Planets.length -1
    }

    if (L_id < 0) {
        L_id = Planets.length -1
    }

    if (R_id > Planets.length -1) {
        R_id = 0
    }

    if (R_F_id > Planets.length) {
        R_F_id = 1
    }
    else if (R_F_id > Planets.length -1) {
        R_F_id = 0
    }

    Planet_L_F.innerHTML = `<p>${Planets[L_F_id]}</p>`
    Planet_L.innerHTML = `<p>${Planets[L_id]}</p>`
    Planet_M.innerHTML = `<p>${Planets[M_id]}</p>`
    Planet_R.innerHTML = `<p>${Planets[R_id]}</p>`
    Planet_R_F.innerHTML = `<p>${Planets[R_F_id]}</p>`
    
    Planet_L_F.className = `Nav_${Planets[L_F_id].replaceAll(" ", "")}`
    Planet_L.className = `Nav_${Planets[L_id].replaceAll(" ", "")}`
    Planet_M.className = `Nav_${Planets[M_id].replaceAll(" ", "")}`
    Planet_R.className = `Nav_${Planets[R_id].replaceAll(" ", "")}`
    Planet_R_F.className = `Nav_${Planets[R_F_id].replaceAll(" ", "")}`

    LoadContent(Planets[M_id])
}

function UpdateHash(){
    window.location.hash = Planets[Planet_ID].toLowerCase().replaceAll(" ", "-")
    document.title = `${Planets[Planet_ID]} - KaroleusPL`
    //console.log("window.location.hash: ", window.location.hash)
}

function LoadHash(){
    let cur_hash = window.location.hash.toUpperCase().replaceAll("-", " ").replaceAll("#", "")

    if (cur_hash == "") {
        cur_hash = "HOME"
    }

    //console.log("Cur_hash: ", cur_hash)
    Planet_ID = Planets.indexOf(cur_hash)

    document.title = `${Planets[Planet_ID]} - KaroleusPL`
}

function ReloadHash_Special(){
    setTimeout(function(){
        LoadHash();
        ReloadPlanets();
        }, 100
    )

}

function PlanetMove(move_by){
    Planet_ID += move_by

    if (Planet_ID < 0) {
        Planet_ID = Planets.length -1
    }

    if (Planet_ID > Planets.length -1) {
        Planet_ID = 0
    }

    ReloadPlanets()
    UpdateHash()
    ScrollToId("page_anchor")
}

function ScrollToId(id) {
    console.log("Scrolling to: ", id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

LoadHash()
ReloadPlanets()