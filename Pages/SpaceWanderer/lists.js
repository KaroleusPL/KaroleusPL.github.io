let materials_info = {
    "water" : {
        "desc" : "Needed for hydration/plant growing/upgrades, can be turned into Oxygen/Fuel",
        "spawncount" : {
            "OceanPlanet" : [10,20],
        },
    },
    "oxygen" : {
        "desc" : "Breathing and plant growing",
        "spawncount" : {
            "GasPlanet" : [1,5],
        },
    },
    "hydrogen" : {
        "desc" : "Fuel",
        "spawncount" : {
            "OceanPlanet" : [5,10],
            "GasPlanet" : [10,20],
            "YellowDwarf" : [10,20],
            "RedGiant" : [8,15],
        },
    },

    "algae" : {
        "desc" : "Needed for making food.",
        "spawncount" : {
            "OceanPlanet" : [3,10],
        },
    },
    "coal" : {
        "desc" : "Needed for making food.",
        "spawncount" : {
            "RockPlanet" : [5,20],
        },
    },

    "iron" : {
        "desc" : "Needed for upgrades.",
        "spawncount" : {
            "RockPlanet" : [5,20],
        },
    },
    "titan":{
        "desc" : "Needed for upgrades.",
        "spawncount" : {
            "RockPlanet" : [-5,10],
        },
    },
    "copper":{
        "desc" : "Needed for upgrades.",
        "spawncount" : {
            "RockPlanet" : [-5,20],
        },
    },
    "nickel":{
        "desc" : "Repairs the engine and needed fot upgrades.",
        "spawncount" : {
            "RockPlanet" : [-2,5],
        },
    },

    "silicon":{
        "desc" : "Needed for electronics",
        "spawncount" : {
            "RockPlanet" : [-2,15],
        },
    },
    "gold":{
        "desc" : "Needed for electronics",
        "spawncount" : {
            "RockPlanet" : [-2,2],
        },
    },


    "uran":{
        "desc" : "Used as fuel",
        "spawncount" : {
            "RockPlanet" : [0,2],
        },
    },
}

let materials_by_objects = {
    "YellowDwarf" : ["hydrogen"],
    "RedGiant" : ["hydrogen"],
    "RockPlanet" : ["iron", "titan", "copper", "nickel", "silicon", "gold", "coal"],
    "GasPlanet" : ["hydrogen", "oxygen"],
    "TerrestrialPlanet" : ["water","oxygen", "iron", "titan", "silicon",],
    "OceanPlanet" : ["water", "hydrogen", "algae"],
}

function GetObjectMaterials(object_name){
    return materials_by_objects[object_name]
}

function MakeRandomObjectMaterials(object_name, size){
    let materials = GetObjectMaterials(object_name)
    let return_dict = {}

    if (materials == undefined) {return}

    let size_multiplier
    console.log("The size: ", size)
    if (size == "tiny"){
        size_multiplier = 0.2
    }
    else if (size == "small"){
        size_multiplier = 0.5
    }
    else if (size == "big"){
        size_multiplier = 2
    }
    else{
        size_multiplier = 1
    }

    // console.log("The mulityplier: ", size_multiplier)
    // console.log("materials: ", materials)
    material_len = materials.length
    // console.log("material_len: ", material_len)

    for (let i=0; i<material_len; i++){
        console.log("cur i: ", i)
        console.log("materials: ", materials)
        console.log("materials i: ", materials[i])
        console.log("materials_info: ", materials_info[materials[i]])
        return_dict[materials[i]] = Math.floor(
            GetRandomInt_Range(
                materials_info[materials[i]]["spawncount"][object_name][0], 
                materials_info[materials[i]]["spawncount"][object_name][1]
            ) * size_multiplier
        )
    }

    return return_dict
}

function SetMaterialsOnPlanet(object_name, size="medium"){
    return MakeRandomObjectMaterials(object_name, size)
}