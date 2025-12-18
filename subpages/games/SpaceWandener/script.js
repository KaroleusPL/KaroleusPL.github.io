const game_map = document.getElementById("game_map")


function SetImage(newimagename){
    graphic_window.innerHTML = images[newimagename]
}

let player_info = {
    "x":1,
    "y":1,

    "view_x" : 7,
    "view_y" : 7,

    "range" : 1,

    "fuel" : 80,
    "fuel_take" : 2,

    "max_capacity" : 20,
    "capacity" : 0,

    "storage" : [],
}

function KeyPressed(event){
	let pressedkey=event.key;

	Move(pressedkey)
}

function GetRandomInt_Range(min = 0, max = 1){
    return min + Math.floor((Math.random() * max))
}
function GetRandomIndex(array = {}){
    return array[GetRandomInt_Range(0, array.length)]
}

function GetDistance(x1,y1,x2,y2){
    return Math.sqrt( (x1 - x2) ** 2 + (y1 - y2) ** 2 )
}

function GetDistance_x(x1,x2){
    // console.log("GetDistance_x: x1-",x1," x2-", x2, " = ", Math.sqrt( (x1 - x2) ** 2))
    return Math.sqrt( (x1 - x2) ** 2)
}
function GetDistance_y(y1,y2){
    // console.log("GetDistance_y: y1-",y1," y2-", y2, " = ", Math.sqrt( (y1 - y2) ** 2))
    return Math.sqrt( (y1 - y2) ** 2 )
}

let Outdated_scan = false
function Move(movekey){
    const SavedPos_x = player_info["x"]
	const SavedPos_y = player_info["y"]

	if(movekey=='w'){
        player_info["y"] += 1
    }
    else if (movekey=='s'){
        player_info["y"] -= 1
    }
    else if (movekey=='a'){
        player_info["x"] -= 1
    }
    else if (movekey=='d'){
        player_info["x"] += 1
    }
    else{
        return
    }

    if (player_info["x"] < map_size["x"] && player_info["x"] > 0 && player_info["y"] < map_size["y"] && player_info["y"] > 0){  
        console.log(player_info["x"], " " ,player_info["y"])
        if (map_generated[`position_${ player_info["x"] }_${ player_info["y"] }`]){
            if (map_generated[`position_${ player_info["x"] }_${ player_info["y"] }`]["thing_on"] == "none"){
                player_info["fuel"] -= player_info["fuel_take"]

                if (!Outdated_scan && scan_box.innerHTML != ""){
                    Outdated_scan = true
                    scan_box.innerHTML = "<p class='danger_text'>OUTDATED</p>" + scan_box.innerHTML
                }

                LoadMapView()
                return
            }
        }
    }
    player_info["x"] = SavedPos_x
    player_info["y"] = SavedPos_y
}

const stats = document.getElementById("stats")
function ReloadStats(){
    stats.innerHTML = ""
    
    stats.innerHTML += `
        Position<br>
        -x: ${player_info["x"]}<br>
        -y: ${player_info["y"]}<br><br>`

    if (player_info["fuel"] > 50){
        stats.innerHTML +=`Fuel: ${player_info["fuel"]}`
    }
    else if (player_info["fuel"] > 20){
        stats.innerHTML +=`<div class="cautious_text"> Fuel: ${player_info["fuel"]} </div>`
    }
    else{
        stats.innerHTML +=`<div class="danger_text"> Fuel: ${player_info["fuel"]} </div>`
    }
}


const scan_box = document.getElementById("scan")
function SpacePressed(x,y){
    console.log("pressed: ", x, "-", y)
    Outdated_scan = false

    scan_box.innerHTML = "<div class='green_text'>scaning...<div>"

    let distance_x = GetDistance_x(player_info["x"], x)
    let distance_y = GetDistance_y(player_info["y"], y)

    let newhtml = ""

    setTimeout(() => {
        newhtml = `
            Position: <br>
            -x: ${map_generated[`position_${x}_${y}`]["pos"][0]}<br>
            -y: ${map_generated[`position_${x}_${y}`]["pos"][1]}<br>
        `

        if (distance_x <= player_info["range"]){
            newhtml += `distance x: <span class="green_text">${distance_x}</span><br>`
        }
        else{
            newhtml += `distance x: <span class="cautious_text">${distance_x}</span><br>`
        }

        if (distance_y <= player_info["range"]){
            newhtml += `distance y: <span class="green_text">${distance_y}</span><br><br>`
        }
        else{
            newhtml += `distance y: <span class="cautious_text">${distance_y}</span><br><br>`
        }
        
        if (x==player_info["x"] && y==player_info["y"]){
            newhtml += `
                Objects: <br>
                -Ship
            `
        }
        else{
            newhtml += `
                Objects: <br>
                -${map_generated[`position_${x}_${y}`]["thing_on"]}
            `
        }

        scan_box.innerHTML = newhtml
    }, 500);
}