let responds_count = 0
let no_addons_responds_count = 0
let loaded_addons = 0
let loaded_addons_array = []

let less_value_key_words = [
    "i", "he", "she", "it", "we", "you", "they", 
    "a", "and", "or", "do", "does",
    "!", "?",
]

function IsLessValueWord(word){
    for (let i=0; i<less_value_key_words.length; i++){
        if (word == less_value_key_words[i]){
            return true
        }
    }

    return false
}

let RespondBase = {
    // functionalities

    "version" : {
        "key_words" : ["version", "your",],
        "responds" : [
            () => `my current version is ${version} and I have ${responds_count} responses! <small><small>without addons: ${no_addons_responds_count} </small></small>`
        ],
    },

    "help" : {
        "key_words" : ["help"],
        "responds" : [
            `
            <h2> Help </h2>

            <b>version</b> -> check version and info about it.<br>
            <b>help-[addon name]</b> -> help for addon. <br>
            <b>addons</b> -> list of addons. <br>
            <b>the rock</b> -> just write it.<br>
            <b>try some amogus</b> -> not literally. <br>
            `
        ],
    },

    "addons" : {
        "key_words" : ["addons",],
        "responds" : [
            () => `Loaded addons: <br> ${GetAddons_text()}`
        ],
    },

    // other

    "hello" : {
        "key_words" : ["hello", "hi", "hola", "witaj", "welcome"],
        "responds" : [
            "Hello! I'm Liver-Worthy Companion!"
        ],
    },

    "how do you work" : {
        "key_words" : ["how", "do", "you", "work"],
        "responds" : [
            "How do I work? \n I just analise your words and tries to get you best respond from my base!"
        ],
    },

    "who are you" : {
        "key_words" : ["who", "are", "you"],
        "responds" : [
            "I'm Liver-Worthy Companion!"
        ],
    },

    "loving amogus" : {
        "key_words" : ["love", "amogus"],
        "responds" : [
            "I love amogus too!"
        ],
    },


    "hating amogus" : {
        "key_words" : ["hate", "amogus"],
        "responds" : [
            "How dare you hate amogus!?"
        ],
    },

    "the rock" : {
        "key_words" : ["rock", "sex"],
        "responds" : [
            `
            <pre>

            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣄⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣬⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⠋⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⠘⣛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⡿⠁⢲⣿⣿⣿⣿⣿⣿⣿⣿⡟⠁⠔⠒⠈⣉⡉⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⠆⣰⣿⣿⣿⣿⣿⣿⣿⣿⣋⣤⣤⣶⢾⣿⣿⣦⣄⠀⠈⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⡆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⡟⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⢈⣈⡀⠙⠛⠷⢦⡀⠀⡹⠋⠛⢻⣿⣿⣿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⠟⠛⢿⠇⢻⣿⣿⣿⣿⣿⣿⣿⡿⠛⠀⠀⠠⠖⠛⠋⠛⠳⠀⠀⠀⠙⠆⠀⡾⠀⠀⠻⠿⢿⣿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⡟⠀⣴⣄⡀⢾⣿⣿⣿⣿⣿⣿⣿⣿⡇⢀⣀⣤⡙⠂⠀⠀⡄⠀⠀⠀⠀⣴⣾⣧⠀⠀⠀⠀⠀⠀⠃⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⡇⠀⣾⣿⣿⣦⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣭⣀⠀⠐⠃⠀⢀⣠⣼⣿⣿⣿⠀⠀⠀⠀⠀⢤⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⡇⠘⠋⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠅⣠⣼⣿⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠀⡾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡀⣀⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⢹⣦⣤⣤⣦⡄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣧⢸⣿⣧⣼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢡⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⠀⠹⣿⠇⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡻⢃⣾⡿⠿⢿⣿⣿⣿⠙⠻⣿⠟⢻⠇⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡄⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⠘⠏⠀⢀⣀⣙⡛⠋⠀⠀⠈⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣤⣤⣤⣭⠀⠀⠀⢀⣠⣆⠃⠀⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⢩⣿⡟⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⡟⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠹⠿⠿⠛⠋⠉⠉⠁⠀⠈⠙⠋⠃⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⠇⢤⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⡁⢠⣤⣤⣄⣤⣤⣤⣀⣀⣀⣀⠀⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⠓⠀⣸⣿⣿⣿⣿⣿⡟⢿⣿⣿⣿⣿⣿⡏⢀⠄⣸⣿⣿⣿⣿⣿⠟⠉⠉⠉⠉⠀⠀⢀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⠐⣡⣾⣿⣿⣿⣿⣿⣿⠻⣎⠻⣿⣿⣿⣿⣇⢘⣠⣹⣿⣿⣿⣿⣧⣀⡀⣀⣀⠀⢀⠀⣼⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⢁⣼⣿⣿⣿⣿⣿⣿⣿⣿⣧⡙⢷⣽⣿⣮⡻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡟⠀⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣭⢻⣿⣿⣮⣻⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠙⠙⠃⢰⣌⠣⡀⣄⡀⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⡟⠈⠙⠛⠿⠿⠿⠋⠀⠀⠀⠀⠀⢀⣄⣹⣇⠱⠘⣿⣷⣦⣀⠘⠻⣿⣿⣿⣿⣿⣿⣿
            ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠟⢻⣿⠀⡆⢸⡇⢿⣿⣷⣄⡀⢤⣿⣿⣿⣿⣿

            </pre>

            `
        ],
    },

    "Glitcher" : {
        "key_words" : ["glitcher"],
        "responds" : [
            `r̴̨̢̨̘̮͓̗̼̝̪͇̗̜̟̘͖̫͔̎̑͛̐̏̉͗̒͋͘͘͠͝ę̴̛̤͔̭̱͙̱̗̹͇͔̺͉̞̤̞͔̈́̈̔͐̒̈́̔͂̉̈́̔̀͌̐́͊̃̽͂̿̈́̉̃́͆͂̂̈͗̋̽͆͆͑͑͘̚͜͠ą̴̢̨̛͓̟̙̭͙͖̞͍͎͓̘̠̘̩̱͎̹̭̯͎̞͇̠̦͉̺͔̳̯̦͔̼̤̖̘̍̀̓̐͆͋̈́̓̓̾̂̈̔̄́̑̑͌̿̊̕̕͜͜l̴̢̨̡̧̢̨̛̦̱̞̰̰̬̞̺̮̹̳̮͈̲̣̭̠̘̺̻͕̳̩̤̤̘̹̦̜͙̫̞̙͙̬͆̆̊̊̊̈́̋̂͜͜͝͝͠ ̷̡̡̛̖͓̳͇͈͖̺̼͍̗͈̣̰̙̜̟̰̩̜̗͍͚̥̫̙̻̮̹̻̫̲̺͙̹̜̫̘̋͋̅̈́͋͊̂̍̃̐͗̅͌͒͌̇́͗̽̔͛̄͑̚̚̕͜͜͜͜n̸̢̦͕̹͙͇̖̥̙͍͇̱̗̺͚̹̱̩̖̲̞̯̟̼̖̤̹͈̔́ä̷̡̪̺̮͉̳͚̗̖͖̂͐̋͌̉̍̔̌̿̆̂̃̓͛̌̓̌̾́͂̒̽̕̚͜͝͝m̶̬͖͎͍̫̤̯̄̾̍̆̊̌̾̆̈́̾͌̓͛̋͛̈́̓̎̏̉̿̊͘̚͠ͅe̷̮̗̦̪̟̼̬̯͈̜̓̆̉̄͋̈́̏̋̄͋̋̂̌̈́͊͑͊͂͑͆͋͗͆̅̏̀͒̈̀́͛̚̕͝
            `
        ],

        "Function" : {"timeout":100, "function": () => ReloadPage()}
    },

    "Banned words" : {
        "key_words" : ["67"],
        "responds" : [
            "Banned word"
        ],

        "Function" : {"timeout":10, "function": () => ReloadPage()}
    },
}

function GetAddons_text(){
    let return_addons = ``
    console.log("loaded_addons_array_aaa: ", loaded_addons_array)
    for (let i=0; i<loaded_addons_array.length; i++){
        return_addons += `- ${loaded_addons_array[i]}, <br>`
    }

    return return_addons
}

function LoadAddon(dict, name){
    console.log("Loading addon...")
    loaded_addons += 1

    let keys = Object.keys(dict)

    for (let i=0; i<keys.length; i++){
        // console.log(keys)

        let key = keys[i]

        if (!RespondBase[key]){
            RespondBase[key] = dict[key]
        }
        else{
            console.log("ERROR: LoadAddon: key already in RespondBase, some in addon respond name repeated and it can't. ")
        }
    }

    responds_count = Object.keys(RespondBase).length
    console.log("Addon loaded! new length: ", Object.keys(RespondBase).length)

    loaded_addons_array.push(name)
}

console.log(Object.keys(RespondBase))
console.log(Object.keys(RespondBase).length)
no_addons_responds_count = Object.keys(RespondBase).length
responds_count = Object.keys(RespondBase).length

