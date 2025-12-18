const body = document.getElementById("body")
const menu = document.getElementById("menu")
const game = document.getElementById("game")
const map = document.getElementById("map")

let PlayerPosition_y=2;
let PlayerPosition_x=2;

let MapSize_y = 5;
let MapSize_x = 5;

let Cherry_y = -1;
let Cherry_x = -1;

let Obstacles = []

let Score = -1

var PlayerRotation = 0

function GenerateTheBoard(){
	let space_size = `${Math.floor(100 / MapSize_x - 1) - 3}%`
	console.log("space_size: ", space_size)

	map.innerHTML = ""
	for (let i = 0; i<MapSize_y; i++){
		map.innerHTML += "<tr>"
		for (let j = 0; j<MapSize_x; j++){
			map.innerHTML += `<img src='imgs/Bg_Space.png' class="space" style="width:${space_size}; height:${space_size};" id="space_${i}_${j}" />`
		}
		map.innerHTML += "</tr>"
	}
	LoadBoard()
}

function LoadBoard(){
	for (let y=0; y < MapSize_y; y++) {
		for (let x=0; x < MapSize_x; x++) {
			document.getElementById(`space_${y}_${x}`).src = "imgs/Bg_Space.png"
			document.getElementById(`space_${y}_${x}`).style.transform = "rotate(0deg)"
		}
	}

	document.getElementById(`space_${PlayerPosition_y}_${PlayerPosition_x}`).src = "imgs/Eater.png"
	document.getElementById(`space_${PlayerPosition_y}_${PlayerPosition_x}`).style.transform = `rotate(${PlayerRotation}deg)`
	
	if (Cherry_x != -1 && Cherry_y != -1){
		document.getElementById(`space_${Cherry_y}_${Cherry_x}`).src = "imgs/Star.png"
	}

	for (let i=0; i < Obstacles.length; i++){
		if (Obstacles[i][0] == PlayerPosition_y && Obstacles[i][1] == PlayerPosition_x || Obstacles[i][0] == Cherry_y && Obstacles[i][1] == Cherry_x){
			Obstacles.splice(i)
		}
		else{
			document.getElementById(`space_${Obstacles[i][0]}_${Obstacles[i][1]}`).src = "imgs/obstacle.png"
		}
	}

	document.getElementById(`score`).innerHTML = `Score: ${Score}`
}

function KeyPressed(event){
	let pressedkey=event.key;

	MoveEater(pressedkey)
}

function MoveEater(movekey){
	const SavedPos_y = PlayerPosition_y
	const SavedPos_x = PlayerPosition_x

	if(movekey=='w'){
		PlayerPosition_y -= 1
		PlayerRotation = 270
	}
	else if(movekey=='s'){
		PlayerPosition_y += 1
		PlayerRotation = 90
	}
	else if(movekey=='a'){
		PlayerPosition_x -= 1
		PlayerRotation = 180
	}
	else if(movekey=='d'){
		PlayerPosition_x += 1
		PlayerRotation = 0
	}

	if (PlayerPosition_y > MapSize_y-1 || PlayerPosition_y < 0){
		PlayerPosition_y = SavedPos_y
	}
	if (PlayerPosition_x > MapSize_x-1 || PlayerPosition_x < 0){
		PlayerPosition_x = SavedPos_x
	}

	for (let i=0; i < Obstacles.length; i++){
		if (Obstacles[i][0] == PlayerPosition_y && Obstacles[i][1] == PlayerPosition_x){
			PlayerPosition_y = SavedPos_y
			PlayerPosition_x = SavedPos_x
		}
	}

	// console.log("pos y: ",PlayerPosition_y)
	// console.log("pos x: ",PlayerPosition_x)

	CheckCherry()
	
	LoadBoard()
}

function CheckCherry(){
	if (Cherry_x == PlayerPosition_x && Cherry_y == PlayerPosition_y ||
		Cherry_x == -1 && Cherry_y == -1){
			Score += 1
			MakeCherry()
		}
}

function MakeCherry(){
	Cherry_y = Math.floor(Math.random() * MapSize_y)
	Cherry_x = Math.floor(Math.random() * MapSize_x)
	if (Cherry_x == PlayerPosition_x && Cherry_y == PlayerPosition_y){
		MakeCherry()
		return
	}
	// console.log("Cherry_y: ", Cherry_y)
	// console.log("Cherry_x: ", Cherry_x)

	MakeObstacles()
}

function MakeObstacles(){
	let ObstaclesCount = Math.floor(0.5 * ((MapSize_y * MapSize_x) / 2))
	let Obstacles_one_space_from_cherry = 0
	let Obstacles_one_space_from_cherry_max = 1
	let Obstacles_one_space_from_player = 0
	let Obstacles_one_space_from_player_max = 1
	let Obstacles_one_space_checkpositions = [
		[1,-1], [1,0], [1,1], [0,-1], [0,1], [-1,-1], [-1,0], [-1,1],
	]

	let Obstacles_two_spaces_from_cherry = 0
	
	Obstacles = []
	for (let i=0; i < ObstaclesCount; i++){
		let Obstacles_newpos = [Math.floor(Math.random() * MapSize_y), Math.floor(Math.random() * MapSize_x)]
		
		let outage = 0

		while (true){
			if (outage > 10) { break }

			if(Obstacles_newpos == [PlayerPosition_y, PlayerPosition_x] || 
			Obstacles_newpos == [Cherry_y, Cherry_x]){
				Obstacles_newpos = [Math.floor(Math.random() * MapSize_y), Math.floor(Math.random() * MapSize_x)]
			}
			else{
				let any_of_spaces_one_detected = false
				
				for (let check_i = 0; check_i < Obstacles_one_space_checkpositions.length; check_i++){
					let check_pos_cherry = [Cherry_y + Obstacles_one_space_checkpositions[check_i][0], Cherry_x + Obstacles_one_space_checkpositions[check_i][1]]
					let check_pos_player = [PlayerPosition_y + Obstacles_one_space_checkpositions[check_i][0], PlayerPosition_x + Obstacles_one_space_checkpositions[check_i][1]]
					if (Obstacles_newpos[0] == check_pos_cherry[0] && Obstacles_newpos[1] == check_pos_cherry[1]){
						any_of_spaces_one_detected = true
						if (Obstacles_one_space_from_cherry <= Obstacles_one_space_from_cherry_max){
							Obstacles_one_space_from_cherry +=1
							Obstacles.push(Obstacles_newpos)
							break
						}
					}

					if (Obstacles_newpos[0] == check_pos_player[0] && Obstacles_newpos[1] == check_pos_player[1]){
						any_of_spaces_one_detected = true
						if (Obstacles_one_space_from_player <= Obstacles_one_space_from_player_max){
							Obstacles_one_space_from_player +=1
							Obstacles.push(Obstacles_newpos)
							break
						}
					}

				}

				if (!any_of_spaces_one_detected){
					Obstacles.push(Obstacles_newpos)
				}
			}

			outage += 1
		}
	}

}

function ReloadMap(){
	MakeCherry()
	LoadBoard()
}

function GameStart(mapsize){

	if (mapsize == "small"){
		MapSize_y = 4;
		MapSize_x = 4;
	}
	else if (mapsize == "medium"){
		MapSize_y = 6;
		MapSize_x = 6;
	}
	else if (mapsize == "big"){
		MapSize_y = 10;
		MapSize_x = 10;
	}

	menu.style.display = "none"
	game.style.display = "block"

	GenerateTheBoard()
	LoadBoard()
}

// CheckCherry()
// AutoWalk()