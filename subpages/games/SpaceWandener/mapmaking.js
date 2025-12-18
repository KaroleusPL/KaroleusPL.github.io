let map_size = {
    "x":50,
    "y":50,
}
let map_generated = {
}
function MakeFullMap(){
    for (let x = 0; x < map_size["x"]; x++){
        for (let y = 0; y < map_size["y"]; y++){

            let player_on
            // console.log([x,y] , " - ", [player_info["x"], player_info["y"]])
            if (x == player_info["x"] && y == player_info["y"]){
                player_on = true
            }
            else{
                player_on = false
            }

            map_generated[`position_${x}_${y}`] = {
                "player_on" : player_on,
                "pos" : [x,y],
                "thing_on" : "none"
            }
        }
    }

    console.log(map_generated)
    PlaceObjects()
}

function removeIfExists(arr, value) {
    const index = arr.indexOf(value)
    if (index !== -1) {
        arr.splice(index, 1)
    }
}

let UnusedPlaces = []

function DeleteAround(x,y){
    removeIfExists(UnusedPlaces, `position_${x}_${y}`)
    removeIfExists(UnusedPlaces, `position_${x+1}_${y}`)
    removeIfExists(UnusedPlaces, `position_${x-1}_${y}`)
    removeIfExists(UnusedPlaces, `position_${x}_${y+1}`)
    removeIfExists(UnusedPlaces, `position_${x}_${y-1}`)
    removeIfExists(UnusedPlaces, `position_${x+1}_${y+1}`)
    removeIfExists(UnusedPlaces, `position_${x+1}_${y-1}`)
    removeIfExists(UnusedPlaces, `position_${x-1}_${y-1}`)
    removeIfExists(UnusedPlaces, `position_${x-1}_${y+1}`)
}

function NewObjcect(name){
    if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            let Place = GetRandomIndex(UnusedPlaces)
            let new_pos = map_generated[Place]

            let x = new_pos["pos"][0] 
            let y = new_pos["pos"][1] 

            if (player_info["x"] != x && player_info["x"] != y){
                new_pos["thing_on"] = name
                // console.log("New", x, "-", y)
            }
            DeleteAround(x,y)
        }
}

function PlaceObjects(){
    UnusedPlaces = Object.keys(map_generated)

    let YellowDwarfsCount = GetRandomInt_Range(5,10)
    let RockPlanetCount = GetRandomInt_Range(20,50)
    let GasPlanetCount = GetRandomInt_Range(10,30)

    for (let i=0; i<YellowDwarfsCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("YellowDwarf")
        }
    }

    for (let i=0; i<RockPlanetCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("RockPlanet")
        }
    }

    for (let i=0; i<GasPlanetCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("GasPlanet")
        }
    }

    PlacePlayer()
}

function PlacePlayer(){
    let new_pos = map_generated[GetRandomIndex(UnusedPlaces)]
    player_info["x"] = new_pos["pos"][0] 
    player_info["y"] = new_pos["pos"][1]

    if (player_info["x"] <= 0){
        player_info["x"] += 1
    }
    else if (player_info["x"] >= map_size["x"]){
        player_info["x"] -= 1
    }

    if (player_info["y"] <= 0){
        player_info["y"] += 1
    }
    else if (player_info["y"] >= map_size["y"]){
        player_info["y"] -= 1
    }

    LoadMapView()
}

// 
function LoadMapView(){
    ReloadStats()
    game_map.innerHTML = ""
    for (let y = 0; y < player_info["view_y"]; y++){
        for (let x = 0; x < player_info["view_x"]; x++){
            let x_pos = player_info["x"] - Math.floor(player_info["view_x"]/2) + x
            let y_pos = player_info["y"] + Math.floor(player_info["view_y"]/2) - y

            let new_html = ""

            if (x_pos < map_size["x"] && x_pos > 0 && y_pos < map_size["y"] && y_pos > 0){
                new_html += `
                    <div onclick="SpacePressed(${x_pos},${y_pos})">
                `
                // <p>${x_pos}_${y_pos}</p>
                if (x_pos == player_info["x"] && y_pos == player_info["y"]){
                    new_html += `<img class="player_img" src="imgs/SpaceShip_1.png">`
                }
                else if(map_generated[`position_${x_pos}_${y_pos}`]){
                    if(map_generated[`position_${x_pos}_${y_pos}`]["thing_on"] != "none"){
                        new_html += `<img class="player_img ${map_generated[`position_${x_pos}_${y_pos}`]["thing_on"]}_glow" src="imgs/${map_generated[`position_${x_pos}_${y_pos}`]["thing_on"]}.png">`
                    }
                }
            }
            else{
                new_html += `
                    <div class="invisible_space">
                `
            }

            new_html += `</div>`
            game_map.innerHTML += new_html
        }
        game_map.innerHTML += `<br>`
    }
}

MakeFullMap()