let materials = {
    "water" : {
        "desc" : "Needed for hydration/plant growing/upgrades, can be turned into Oxygen/Fuel",
    },


    "coal" : {
        "desc" : "Needed for plant growing.",
    },

    "iron" : {
        "desc" : "Needed for upgrades.",
    },
    "titan":{
        "desc" : "Needed for upgrades.",
    },
    "copper":{
        "desc" : "Needed for upgrades.",
    },
    "nickel":{
        "desc" : "Repairs the engine and needed fot upgrades.",
    },

    "silicon":{
        "desc" : "Needed for electronics",
    },
    "gold":{
        "desc" : "Needed for electronics",
    },

// 

   "hydrogen" : {

    },

    "uran":{

    },
}

let materials_by_objects = {
    "IronPlanet" : ["iron"],
    "Terrestrial planet" : ["water", "iron", "titan", "silicon",],
    "OceanPlanet" : ["water", "hydrogen"],
}

function GetObjectMaterials(object_name){
    return materials_by_objects[object_name]
}

function MakeRandomObjectMaterials(materials){
    for (let i=0; i<materials.length; i++){
        console.log("i: ", i)
        console.log("materials i: ", materials[i])
    }
}

function SetMaterialsOnPlanet(){
    
}