const Cards = {

    "Livers" : {
        "Liver shooter" : {
            "hp" : 3,
            "dmg" : 2,

            "type" : "shooter",

            "shoot_speed" : 1,
        },
        
    },

    "Monsters" : {
        "Cockroach" : {
            "hp" : 10,
            "dmg" : 1,
            "speed" : 1,
            "dmg_speed" : 3

        },
    },

}

function get_cards(type){
    return Object.keys(Cards[type])
}

let chosen_cards = {

    "Livers" : [],
    "Monsters" : []

}