const game_map = document.getElementById("game_map")


function SetImage(newimagename){
    graphic_window.innerHTML = images[newimagename]
}

let infinityfuel = false

let player_info = {
    "galactic":1,
    "hours":0,

    "x":1,
    "y":1,

    "view_x" : 7,
    "view_y" : 7,

    "range" : 1,

    "max_endurance" : 100,
    "endurance" : 80,

    "max_fuel" : 100,
    "fuel" : 80,
    "fuel_take" : 2,

    "max_food" : 50,
    "food" : 40,
    "food_take" : 1,

    "plantation_produce" : 10,
    "plantation_water" : 0,
    "plantation_seeds" : 0,
    "plantation_coal" : 0,

    "max_capacity" : 75,
    "capacity" : 0,

    "storage" : {
        "water" : 5,
        "oxygen" : 20,
        "hydrogen" : 10,
        "algae" : 0,
        "seeds" : 0,
	    "coal" : 0,
        "iron" : 10,
        "titan" : 0,
        "copper" : 0,
        "nickel" : 0,   
        "silicon" : 0,
        "gold" : 0,
        "uran" : 0,
        
    },
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
    if (player_info["fuel"] < player_info["fuel_take"] && !infinityfuel){
        return
    }

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
        if (map_generated[`position_${ player_info["x"] }_${ player_info["y"] }`]){
            if (map_generated[`position_${ player_info["x"] }_${ player_info["y"] }`]["thing_on"] == "none"){
                player_info["fuel"] -= player_info["fuel_take"]
                player_info["food"] -= player_info["food_take"]
                player_info["hours"] += 1

                if (!Outdated_scan && scan_box.innerHTML != ""){
                    Outdated_scan = true
                    scan_box.innerHTML = "<p class='danger_text'>OUTDATED</p>" + scan_box.innerHTML
                }
                DamagePlayer()
                LoadMapView()
                ReloadPlantation()
                FoodProduce()
                return
            }
        }
    }
    player_info["x"] = SavedPos_x
    player_info["y"] = SavedPos_y
}

function DamagePlayer(){
    player_info["endurance"] -= map_generated[`position_${ player_info["x"] }_${ player_info["y"] }`]["dangerdmg"]
}

const stats = document.getElementById("stats")
function ReloadStats(){
    ReloadPlantation()

    player_info["capacity"] = Object.values(player_info["storage"]).reduce((a, b) => a + b, 0);

    stats.innerHTML = ""
    
    stats.innerHTML += `
        Galaxy: ${player_info["galactic"]} <br>
        Time: 24h*${player_info["hours"]} <br><br>

        Position<br>
        -x: ${player_info["x"]}<br>
        -y: ${player_info["y"]}<br>
        <button onclick="Travel()"> Travel to another galactic (40 Fuel) </button> <br><br>
    `

    if (player_info["endurance"] > 50){
        stats.innerHTML +=`Endurance: ${player_info["endurance"]}/${player_info["max_endurance"]} <br>`
    }
    else if (player_info["endurance"] > 20){
        stats.innerHTML +=`<span class="cautious_text"> Endurance: ${player_info["endurance"]}/${player_info["max_endurance"]} </span> <br>`
    }
    else{
        stats.innerHTML +=`<span class="danger_text"> Endurance: ${player_info["endurance"]}/${player_info["max_endurance"]} </span> <br>`
    }

    if (player_info["fuel"] > 50){
        stats.innerHTML +=`Fuel: ${player_info["fuel"]}/${player_info["max_fuel"]}`
    }
    else if (player_info["fuel"] > 20){
        stats.innerHTML +=`<span class="cautious_text"> Fuel: ${player_info["fuel"]}/${player_info["max_fuel"]} </span>`
    }
    else{
        stats.innerHTML +=`<span class="danger_text"> Fuel: ${player_info["fuel"]}/${player_info["max_fuel"]} </span>`
    }

    if (player_info["food"] > 20){
        stats.innerHTML +=`<br> Food: ${player_info["food"]}/${player_info["max_food"]}`
    }
    else if (player_info["food"] > 10){
        stats.innerHTML +=`<br> <span class="cautious_text"> Food: ${player_info["food"]}/${player_info["max_food"]} </span>`
    }
    else{
        stats.innerHTML +=`<br> <span class="danger_text"> Food: ${player_info["food"]}/${player_info["max_food"]} </span>`
    }

    stats.innerHTML += `
        <br>
        Range: ${player_info["range"]}

        <br><br> 
        <div class="stats_group_text"> Storage (${player_info["capacity"]} / ${player_info["max_capacity"]})</div> <br>
        __water: ${player_info["storage"]["water"]} <button onclick="ThrowAway('water')"> Throw away </button> <br>
        <br>
        <div class="stats_group_text">fuel</div>
        __oxygen: ${player_info["storage"]["oxygen"]} <button onclick="ThrowAway('oxygen')"> Throw away </button> <br>
        __hydrogen: ${player_info["storage"]["hydrogen"]} <button onclick="ThrowAway('hydrogen')"> Throw away </button> <br>
        __uran: ${player_info["storage"]["uran"]} <button onclick="ThrowAway('uran')"> Throw away </button> <br>
        <br>
        <div class="stats_group_text">plants&food</div>
        __algae: ${player_info["storage"]["algae"]} <button onclick="ThrowAway('algae')"> Throw away </button> <br>
        __seeds: ${player_info["storage"]["seeds"]} <button onclick="ThrowAway('seeds')"> Throw away </button> <br>
        __coal: ${player_info["storage"]["coal"]} <button onclick="ThrowAway('coal')"> Throw away </button> <br>
        <br>
        <div class="stats_group_text">crafting</div>
        __iron: ${player_info["storage"]["iron"]} <button onclick="ThrowAway('iron')"> Throw away </button> <br>
        __titan: ${player_info["storage"]["titan"]} <button onclick="ThrowAway('titan')"> Throw away </button> <br>
        __copper: ${player_info["storage"]["copper"]} <button onclick="ThrowAway('copper')"> Throw away </button> <br>
        __nickel: ${player_info["storage"]["nickel"]} <button onclick="ThrowAway('nickel')"> Throw away </button> <br>
        __silicon: ${player_info["storage"]["silicon"]} <button onclick="ThrowAway('silicon')"> Throw away </button> <br>
        __gold: ${player_info["storage"]["gold"]} <button onclick="ThrowAway('gold')"> Throw away </button> <br>
        `
}

function Travel(){
    if (player_info["fuel"] >= 40){
        player_info["fuel"] -= 40
        player_info["galactic"] += 1
        MakeFullMap(parseInt(100 * (galactic * 0.1)), parseInt(100 * (galactic * 0.1)))
    }
}

function ThrowAway(material){
    if (player_info["storage"][material] > 0){
        player_info["storage"][material] -= 1
    }
    ReloadStats()
}

function ProcessingButtonPressed(buttonpressed){
    
    // food
    if (buttonpressed == "algae_to_food" &&
        player_info["storage"]["algae"] >= 1 &&
        player_info["food"] <= player_info["max_food"]-1)
    {
        player_info["storage"]["algae"] -= 1
        player_info["food"] += 1
    }
    else if (buttonpressed == "algae_water_to_food" &&
        player_info["storage"]["algae"] >= 1 &&
        player_info["storage"]["water"] >= 2 &&
        player_info["food"] <= player_info["max_food"]-5
    )
    {
        player_info["storage"]["algae"] -= 1
        player_info["storage"]["water"] -= 2
        player_info["food"] += 5
    }
    else if (buttonpressed == "algae_to_seeds" &&
        player_info["storage"]["algae"] >= 1)
    {
        player_info["storage"]["algae"] -= 1
        player_info["storage"]["seeds"] += 1
    }

    // fuel
    else if (buttonpressed == "water_to_oxy_hydro" &&
        player_info["storage"]["water"] >= 1 &&
        player_info["capacity"] <= player_info["max_capacity"]-2)
    {
        player_info["storage"]["water"] -= 1
        player_info["storage"]["oxygen"] += 1
        player_info["storage"]["hydrogen"] += 1
    }
    else if (buttonpressed == "oxy_hydro_to_fuel" && 
        player_info["storage"]["oxygen"] >= 1 && player_info["storage"]["hydrogen"] >= 1 &&
        player_info["fuel"] <= player_info["max_fuel"]-5)
    {
        player_info["storage"]["oxygen"] -= 1
        player_info["storage"]["hydrogen"] -= 1
        player_info["fuel"] += 5
    }
    else if (buttonpressed == "uran_to_fuel" &&
        player_info["storage"]["uran"] >= 1 &&
        player_info["fuel"] <= player_info["max_fuel"]-50)
    {
        player_info["storage"]["uran"] -= 1
        player_info["fuel"] += 50
    }

    //plantation

    else if (buttonpressed == "water_to_plantation" && player_info["storage"]["water"] >= 1) {
        player_info["storage"]["water"] -= 1
        player_info["plantation_water"] += 1
    }
    else if (buttonpressed == "coal_to_plantation" && player_info["storage"]["coal"] >= 1) {
        player_info["storage"]["coal"] -= 1
        player_info["plantation_coal"] += 1
    }
    else if (buttonpressed == "seeds_to_plantation" && player_info["storage"]["seeds"] >= 1) {
        player_info["storage"]["seeds"] -= 1
        player_info["plantation_seeds"] += 1
    }


    //upgrades

    else if (buttonpressed == "range_upgrade" &&
        player_info["range"] == 1 &&
        player_info["storage"]["silicon"] >= 5 && player_info["storage"]["copper"] >= 5 && 
        player_info["storage"]["iron"] >= 20)
    {
        player_info["storage"]["silicon"] -= 5
        player_info["storage"]["iron"] -= 20
        player_info["storage"]["copper"] -= 5
        player_info["range"] = 2
    }
    else if (buttonpressed == "great_range_upgrade" &&
        player_info["range"] == 1 &&
        player_info["storage"]["silicon"] >= 5 && player_info["storage"]["copper"] >= 5 && 
        player_info["storage"]["iron"] >= 20)
    {
        player_info["storage"]["silicon"] -= 5
        player_info["storage"]["iron"] -= 20
        player_info["storage"]["copper"] -= 5
        player_info["range"] = 3
    }
    else if (buttonpressed == "plantation_upgrade" &&
        player_info["range"] == 1 &&
        player_info["storage"]["silicon"] >= 5 && player_info["storage"]["copper"] >= 5 && 
        player_info["storage"]["iron"] >= 20)
    {
        player_info["storage"]["silicon"] -= 5
        player_info["storage"]["iron"] -= 20
        player_info["storage"]["copper"] -= 5
        player_info["plantation_produce"] = 25
    }
    else if (buttonpressed == "storage_upgrade" &&
        player_info["max_capacity"] == 75 && player_info["max_food"] == 50 &&
        player_info["storage"]["copper"] >= 5 && 
        player_info["storage"]["iron"] >= 20)
    {
        player_info["storage"]["iron"] -= 20
        player_info["storage"]["copper"] -= 5
        player_info["max_capacity"] = 100
        player_info["max_food"] = 75
    }
    else if (buttonpressed == "great_storage_upgrade" &&
        player_info["max_capacity"] == 100 && player_info["max_food"] == 75 &&
        player_info["storage"]["copper"] >= 10 && player_info["storage"]["titan"] >= 20 && 
        player_info["storage"]["iron"] >= 30)
    {
        player_info["storage"]["iron"] -= 30
        player_info["storage"]["copper"] -= 10
        player_info["storage"]["titan"] -= 20
        player_info["max_capacity"] = 150
        player_info["max_food"] = 90
    }

    ProcessingButtonsVisibility()
    ReloadStats()
}

function ProcessingButtonsVisibility(){
    let range_upgrade_button = document.getElementById("range_upgrade")
    let great_range_upgrade_button = document.getElementById("great_range_upgrade")
    let storage_upgrade_button = document.getElementById("storage_upgrade")
    let great_storage_upgrade_button = document.getElementById("great_storage_upgrade")

    if (player_info["range"] >= 2){
        range_upgrade_button.style.display = "none"
    }
    if (player_info["range"] >= 3){
        great_range_upgrade_button.style.display = "none"
    }

    if (player_info["max_capacity"] >= 100 && player_info["max_food"] >= 75){
        storage_upgrade_button.style.display = "none"
    }
    if (player_info["max_capacity"] >= 150 && player_info["max_food"] >= 90){
        great_storage_upgrade_button.style.display = "none"
    }

}

let food_production_time = 0
let food_planted = false
function ReloadPlantation(){
    let plantation_container = document.getElementById("plantation_container")

    if (player_info["food"] > player_info["max_food"]) {player_info["food"] = player_info["max_food"]}

    let new_html = `
        <h3> Plantation </h3>

        <button onclick="ProcessingButtonPressed('water_to_plantation')"> Add water </button>
        <button onclick="ProcessingButtonPressed('seeds_to_plantation')"> Add seeds </button>
        <button onclick="ProcessingButtonPressed('coal_to_plantation')"> Add coal </button>
        <br>
        <p> Food per plantation: ${player_info["plantation_produce"]} </p>
        <br>
        <p>Materials</p>
        <p> __water: ${player_info["plantation_water"]} </p>
        <p> __seeds: ${player_info["plantation_seeds"]} </p>
        <p> __coal: ${player_info["plantation_coal"]} </p>
        <br>
        <p> Food production time: ${food_production_time} days </p>
    `

    plantation_container.innerHTML = new_html
}

function FoodProduce(){
    if (food_planted){
        if (food_production_time >= 1){
            food_production_time -= 1
        }
        else {
            food_planted = false
            player_info["food"] += player_info["plantation_produce"]
        }
    }
    else if (player_info["plantation_water"] >= 5 && player_info["plantation_seeds"] >= 3) {
        player_info["plantation_water"] -= 5
        player_info["plantation_seeds"] -= 3

        if (player_info["plantation_coal"] >= 5) {
            player_info["plantation_coal"] -= 5
            food_production_time = 5
        }
        else {
            food_production_time = 10
        }

        food_planted = true
   }
}

const scan_box = document.getElementById("scan")
let currenscanedspace = []
function SpacePressed(x,y){
    console.log("pressed: ", x, "-", y)
    currenscanedspace[0] = x
    currenscanedspace[1] = y

    ReloadScan(500)
}

function ReloadScan(scantime){
    Outdated_scan = false

    let x = currenscanedspace[0]
    let y = currenscanedspace[1]

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
            newhtml += `distance y: <span class="green_text">${distance_y}</span><br>`
        }
        else{
            newhtml += `distance y: <span class="cautious_text">${distance_y}</span><br>`
        }

        if (distance_x <= player_info["range"] && distance_y <= player_info["range"]){
            newhtml += `<span class="green_text"> In range </span><br><br>`
        }
        else{
            newhtml += `<span class="danger_text"> Not in range </span><br><br>`
        }
        
        newhtml += `Danger:`
        if(map_generated[`position_${x}_${y}`]["dangerdmg"] >= 20){
            newhtml += `<span class="danger_text"> Medium </span><br><br>`
        }
        else if(map_generated[`position_${x}_${y}`]["dangerdmg"] >= 10){
            newhtml += `<span class="cautious_text"> Low </span><br><br>`
        }
        else if(map_generated[`position_${x}_${y}`]["dangerdmg"] >= 5){
            newhtml += `<span class="cautious_text"> Really low </span><br><br>`
        }
        else{
            newhtml += `<span class="green_text"> None </span><br>`
        }

        if (x==player_info["x"] && y==player_info["y"]){
            newhtml += `
                <br>
                Objects: <br>
                -Ship
            `
        }
        else{
            newhtml += `
                <br>
                Objects: <br>
                -${map_generated[`position_${x}_${y}`]["thing_on"]} (${map_generated[`position_${x}_${y}`]["thing_on_scale"]}) <br>

                <br>
                Available materials: <br>
            `
            for (let i=0;i< Object.keys(map_generated[`position_${x}_${y}`]["materials"]).length; i++){
                let key = Object.keys(map_generated[`position_${x}_${y}`]["materials"])[i]

                if (map_generated[`position_${x}_${y}`]["materials"][key] > 0){
                    newhtml += `
                        -${key}
                        (${map_generated[`position_${x}_${y}`]["materials"][key]})
                    `
                    if (distance_x <= player_info["range"] && distance_y <= player_info["range"]){
                        newhtml += `
                            <button onclick="TakeMaterial('position_${x}_${y}', '${key}')"> Take </button>
                        `
                    }

                    newhtml += `
                        <br>
                    `
                }
            }

        }

        scan_box.innerHTML = newhtml
    }, scantime);
}

function TakeMaterial(object_id, material_name){
    if (player_info["capacity"] < player_info["max_capacity"]){
        map_generated[object_id]["materials"][material_name] -= 1
        player_info["storage"][material_name] += 1
    }
    ReloadStats()
    ReloadScan(0)
}

ReloadPlantation()