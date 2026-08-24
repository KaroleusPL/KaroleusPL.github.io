let map_size = {
    "x":100,
    "y":100,
}

let mapsizespaces = map_size["x"] * map_size["y"]

let map_generated = {
}
function MakeFullMap(size_x, size_y){
    map_size = {
        "x":size_x,
        "y":size_y,
    }
    mapsizespaces = map_size["x"] * map_size["y"]


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
                "thing_on" : "none",
                "thing_on_type" : "none",
                "thing_on_scale" : "medium",
                "materials" : {},

                "dangerdmg" : 0,
            }
        }
    }

    PlaceObjects()
}

function removeIfExists(arr, value) {
    const index = arr.indexOf(value)
    if (index !== -1) {
        arr.splice(index, 1)
    }
}

let UnusedPlaces = []

function DeleteAround(x, y, radius = 2) {
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      removeIfExists(
        UnusedPlaces,
        `position_${x + dx}_${y + dy}`
      );
    }
  }
}

function SetDangerDmg(x, y, radius = 1, newdmg = 1) {
  for (let dx = -radius; dx <= radius; dx++) {
    for (let dy = -radius; dy <= radius; dy++) {
      let key = `position_${x + dx}_${y + dy}`
      if (map_generated[key]) {
        map_generated[key].dangerdmg = newdmg
      }
    }
  }
}

function NewObjcect(name, size="medium", type="planet", dangers=[[0,0]]){
    if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            let Place = GetRandomIndex(UnusedPlaces)
            let new_pos = map_generated[Place]

            let x = new_pos["pos"][0] 
            let y = new_pos["pos"][1] 

            if (player_info["x"] != x && player_info["x"] != y){
                new_pos["thing_on"] = name
                new_pos["thing_on_type"] = type
                new_pos["thing_on_scale"] = size
                new_pos["materials"] = SetMaterialsOnPlanet(name,size)

                console.log("dangers: ", dangers)
                console.log("dangers: ", dangers.length)

                let dangers_length =  dangers.length

                for (let dangers_i=0; dangers_i<dangers_length; dangers_i++){
                    //                 radius,dmg
                    SetDangerDmg(x, y, dangers[dangers_i][0], dangers[dangers_i][1])
                }

                // if (name == "YellowDwarf"){
                //     new_pos["dangerdmg"] = 100
                //     SetDangerDmg(x,y,2,5)
                //     SetDangerDmg(x,y,1,20)
                // }
                // console.log("New", x, "-", y)
            }
            DeleteAround(x,y)
        }
}

// ===

function PlaceObjects(){
    UnusedPlaces = Object.keys(map_generated)

    let YellowDwarfsCount = GetRandomInt_Range(5,10)
    let RedGiantCount = GetRandomInt_Range(3,8)

    let RockPlanetTinyCount = GetRandomInt_Range(30,50)
    let RockPlanetSmallCount = GetRandomInt_Range(15,30)
    let RockPlanetMediumCount = GetRandomInt_Range(10,20)

    let GasPlanetSmallCount = GetRandomInt_Range(5,10)
    let GasPlanetMediumCount = GetRandomInt_Range(5,10)
    let GasPlanetBigCount = GetRandomInt_Range(5,10)

    let OceanPlanetSmallCount = GetRandomInt_Range(35,60)
    let OceanPlanetMediumCount = GetRandomInt_Range(30,40)

    for (let i=0; i<YellowDwarfsCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("YellowDwarf", "medium", "star", [[2,5], [1,20]])
        }
    }

    for (let i=0; i<RedGiantCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("RedGiant", "big", "star", [[4,5],[3,10],[2,20],[1,50]])
        }
    }

    for (let i=0; i<RockPlanetTinyCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("RockPlanet", "tiny")
        }
    }
    for (let i=0; i<RockPlanetSmallCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("RockPlanet", "small")
        }
    }
    for (let i=0; i<RockPlanetMediumCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("RockPlanet", "medium")
        }
    }

    for (let i=0; i<GasPlanetSmallCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("GasPlanet", "small")
        }
    }
    for (let i=0; i<GasPlanetMediumCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("GasPlanet", "medium", [[1,2]])
        }
    }
    for (let i=0; i<GasPlanetBigCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("GasPlanet", "big", [[1,5]])
        }
    }


    for (let i=0; i<OceanPlanetSmallCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("OceanPlanet", "small")
        }
    }   
    for (let i=0; i<OceanPlanetMediumCount; i++){
        if (UnusedPlaces.length > (map_size["x"] * map_size["y"]) / 20){
            NewObjcect("OceanPlanet", "medium")
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
    let new_html = ""
    for (let y = 0; y < player_info["view_y"]; y++){
        for (let x = 0; x < player_info["view_x"]; x++){
            let x_pos = player_info["x"] - Math.floor(player_info["view_x"]/2) + x
            let y_pos = player_info["y"] + Math.floor(player_info["view_y"]/2) - y

            if (x_pos < map_size["x"] && x_pos > 0 && y_pos < map_size["y"]  && y_pos > 0){
                new_html += `
                    <div onclick="SpacePressed(${x_pos},${y_pos})">
                `
                // <p>${x_pos}_${y_pos}</p>
                if (x_pos == player_info["x"] && y_pos == player_info["y"]){
                    new_html += `<img class="space_img" src="imgs/SpaceShip_1.png">`
                }
                else if(map_generated[`position_${x_pos}_${y_pos}`]){
                    if(map_generated[`position_${x_pos}_${y_pos}`]["thing_on"] != "none"){
                        new_html += `<img class="space_img  ${map_generated[`position_${x_pos}_${y_pos}`]["thing_on_type"]}_${map_generated[`position_${x_pos}_${y_pos}`]["thing_on_scale"]}_scale ${map_generated[`position_${x_pos}_${y_pos}`]["thing_on"]}_glow" src="imgs/${map_generated[`position_${x_pos}_${y_pos}`]["thing_on"]}.png">`
                    }
                }
            }
            else{
                new_html += `
                    <div class="invisible_space">
                `
            }

            new_html += `</div>`
        }
        new_html += `<br>`
    }

    game_map.innerHTML = new_html
}

MakeFullMap(100, 100)