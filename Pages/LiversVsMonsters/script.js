const GameContainer= document.getElementById("GameContainer")

function SetGameContainer(scene){

    if (scene == "howtoplay"){
        GameContainer.innerHTML = `

            <p> Player 1 - Livers </p>
            <p> Player 2 - Monsters </p>

            <h3> Movement: </h3>
            <p> Player 1 - WASD </p>
            <p> Player 2 - Arrows </p>

            <h3> Confirm: </h3>
            <p> Player 1 - Space </p>
            <p> Player 2 - Enter </p>


            <button onclick="SetGameContainer('selection')"> Cards selection </button>
        `
    }
    else if (scene == "selection"){
        let new_html = `<div class="selection_box"> <h2> Livers </h2>`

        
        for (let i=0; i < get_cards("Livers").length; i++){
            console.log("i: ", i)
            console.log("get_cards(Livers)[i]: ", get_cards("Livers")[i])
            console.log("Cards[get_cards(Livers)[i]: ", Cards["Livers"][get_cards("Livers")[i]])
            new_html += `<input type="checkbox"> <span> ${get_cards("Livers")[i]} </span>`
        }

        new_html += `</div>`

        new_html += `<div class="selection_box"> <h2> Monsters </h2>`

        
        for (let i=0; i < get_cards("Monsters").length; i++){
            console.log("i: ", i)
            console.log("get_cards(Monsters)[i]: ", get_cards("Monsters")[i])
            console.log("Cards[get_cards(Monsters)[i]: ", Cards["Monsters"][get_cards("Monsters")[i]])
            new_html += `<input type="checkbox"> <span> ${get_cards("Monsters")[i]} </span>`
        }

        new_html += `</div>`

        GameContainer.innerHTML = new_html
    }

}