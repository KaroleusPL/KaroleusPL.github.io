let music_player = document.getElementById("music_player")
let music_img = document.getElementById("music_img")
let music_name = document.getElementById("music_name")
let platform_buttons = document.getElementById("platform_buttons")
let audio_player = document.getElementById("audio_player")

let music_stop_button = document.getElementById("music_stop_button")

let music_header = document.getElementById("music_header")
let music_selection = document.getElementById("music_selection")
let folder_selection = document.getElementById("folder_selection")

let musicinfo = {
    //Colors of another

    "UntitledAdventure" : {
        "name": "Untitled adventure",
        "preview": true,
        "bpm": "162",
        "time": [4,4],
        "tags": ["piano", "amen break"],
        "spotify": "        https://open.spotify.com/track/3aSp4oofY5syUcs4MpXnQi?si=17c2da3a4bf94d3f", 
        "soundcloud": "https://soundcloud.com/karoleus-pl/untitled-adventure?si=764e437e5e9f43578bdef4e0dd8153a9&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    "WhoToldYouToGo" : {
        "name": "Who told you to go?",
        "preview": true,
        "bpm": "160",
        "time": [4,4],
        "tags": ["author's favourites","piano", "amen break"],
        "spotify": "https://open.spotify.com/track/3ugr6xbX4VWGPodexm0LNJ?si=54cba29c40484cb4",
        "soundcloud": "https://soundcloud.com/karoleus-pl/who-told-you-to-go?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    "HoldOn" : {
        "name": "Hold on!",
        "cover": "ColorsOfAnotherP2",
        "tags": ["piano", "amen break"],
        "spotify": "https://open.spotify.com/track/41EdkRQUG5sHgfAtvttFmx?si=9b3463d7f2b84bcd", 
        "soundcloud": "https://soundcloud.com/karoleus-pl/hold-on",
    },
    "YouLookNervous" : {
        "name": "You look nervous",
        "cover": "ColorsOfAnotherP2",
        "tags": ["piano", "amen break"],
        "spotify": "https://open.spotify.com/track/2C1OVJQ2vINAYqg3yAziJ8?si=9f900fd53bf64609",
        "soundcloud": "https://open.spotify.com/track/3ugr6xbX4VWGPodexm0LNJ?si=54cba29c40484cb4",
    },

    //Curse of Heavens

    "Falling" : {
        "name": "Falling",
        "cover": "CurseOfHeavensACTI",
        "tags": ["piano"],
        "spotify": "https://open.spotify.com/track/3aSp4oofY5syUcs4MpXnQi?si=17c2da3a4bf94d3f", 
        "youtube": "https://youtu.be/ZgyLUvQji-w",
    },
    "PrideOfZadkiel" : {
        "name": "Pride of Zadkiel",
        "cover": "CurseOfHeavensACTI",
        "tags": ["author's favourites","piano", "drum&bass"],
        "spotify": "https://open.spotify.com/track/3ugr6xbX4VWGPodexm0LNJ?si=54cba29c40484cb4",
        "youtube": "https://youtu.be/ZgyLUvQji-w",
    },
    "DustOfYeasterday" : {
        "name": "Dust of yeasterday",
        "cover": "CurseOfHeavensACTI",
        "tags": [],
        "spotify": "https://open.spotify.com/track/3ugr6xbX4VWGPodexm0LNJ?si=54cba29c40484cb4",
        "youtube": "https://youtu.be/ZgyLUvQji-w",
    },


    // 2025
    "Meadow" : {
        "name": "Meadow",
        "spotify": "https://open.spotify.com/track/033FB3O0LjWJwAYvX5zD8V?si=f0e899b8fbb54a4e",
        "soundcloud": "https://soundcloud.com/karoleus-pl/meadow",
    },
    "IncompleteStar" : {
        "name": "Incomplete star",
        "spotify": "https://open.spotify.com/track/5bP9cIugypuaZDP67LnAnA?si=a6a96c38f7dd43a5",
        "soundcloud": "https://soundcloud.com/karoleus-pl/incomplete-star",
    },
    "SchoolhouseTroubleCover" : {
        "name": "Schoolhouse trouble cover",
        "soundcloud": "https://soundcloud.com/karoleus-pl/schoolhouse-trouble-karoleuspl-cover?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=a6661fc1449846338eee247779ffea86",
    },
    "TheyreComing" : {
        "name": "They're coming",
        "spotify": "https://open.spotify.com/track/3gP7Ff0mrcnmIhBkXHRKAA?si=3bb13e3bf9204873",
        "soundcloud": "https://soundcloud.com/karoleus-pl/theyre-comming",
    },
    "GPURenewal" : {
        "name": "GPU Renewal",
        "preview": true,
        "bpm": "164",
        "time": [4,4],
        "spotify": "https://open.spotify.com/track/1iUY0G2ObUs380mA2RyZ7B?si=6db0e1cbdd994d06",
        "soundcloud": "https://soundcloud.com/karoleus-pl/gpu-renewal?si=8b1cc78d1584416285877b5e6424f5b1&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    "DeathEggCover" : {
        "name": "Death egg cover",
        "soundcloud": "https://soundcloud.com/karoleus-pl/death-egg-death-egg-robot-cover-by-karoleuspl?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&si=6f2cd36a119e4707b39130ca68fc8147",
    },
    "BoysNewFriends" : {
        "name": "Boy's new friends",
        "spotify": "https://open.spotify.com/track/2nsEjugjodVcj4cymVAcmU?si=f712e97970604c9c",
        "soundcloud": "https://soundcloud.com/karoleus-pl/boys-new-friends-kumi-hitsune-utau-song",
    },

    // 2024
    "TheFrostRemastered" : {
        "name": "The Frost Remastered",
        "youtube": "https://www.youtube.com/watch?v=qfPm-l5XCcs",
    },
    "UsseewaBreakcore" : {
        "name": "Usseewa Breakcore",
        "youtube": "https://youtu.be/nXSntwqJCI0",
    },
    "IHateYouButItHurts" : {
        "name": "I hate you, but it hurts.",
        "spotify": "https://open.spotify.com/track/6dLdl9NHDKT384wjFxsQ2G?si=e92c0dea03524436",
        "youtube": "https://youtu.be/XogQUmuuBQc",
    },
    "BeholdTheSkeleton" : {
        "name": "Behold the skeleton",
        "spotify": "https://open.spotify.com/track/1chDn4CSSu75E6uOeomqGa?si=aa6dd309269d4a7c",
        "soundcloud": "https://soundcloud.com/karoleus-pl/behold-the-skeleton?si=fa8441a7bd264ebabe0ea4511045a275&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    "Desires" : {
        "name": "Desires",
        "spotify": "https://open.spotify.com/track/1K7aomahk9ZH7vPbpeF6Q5?si=aa13d3a038724417",
        "soundcloud": "https://soundcloud.com/karoleus-pl/desires?si=0840a557a9d04a35bdd253afa0f46426&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing",
    },
    "Loneliness" : {
        "name": "Loneliness",
        "spotify": "https://open.spotify.com/track/44vdGqb1mdE5FYVXXl3P6X?si=ab3aa71ec5df467f",
        "soundcloud": "https://soundcloud.com/karoleus-pl/loneliness",
    },
    "ChaoticReflection" : {
        "name": "Chaotic reflection",
        "spotify": "https://open.spotify.com/track/0KRQBtEyNRJEFRl84IRCSY?si=262f9451ac83427f",
        "soundcloud": "https://soundcloud.com/karoleus-pl/chaotic-reflection",
    },
    "DripWatroba" : {
        "name": "Drip Wątroba",
        "spotify": "https://open.spotify.com/track/1SvUh7XEB0ccFFCvtsXdxH?si=167dbfab62544134",
        "soundcloud": "https://soundcloud.com/karoleus-pl/drip-watroba",
    },
    "AllThatRemains" : {
        "name": "All that remains",
        "spotify": "https://open.spotify.com/track/5cGeetOSkX0ZWQa9aJUKM7?si=dd146b6107b14831",
        "soundcloud": "https://soundcloud.com/karoleus-pl/all-that-remains",
    },

    // 2023 

    "HyperGlitch" : {
        "name": "Hyper glitch",
        "youtube": "https://youtu.be/kBsm-KbtNkw",
    },
    "Chronophobia" : {
        "name": "Chronophobia",
        "youtube": "https://youtu.be/tCIKwkS4n1U",
    },
    "Alchmophobia" : {
        "name": "Alchmophobia",
        "youtube": "https://youtu.be/kgFzcyd6WTI",
    },
    "Ommetaphobia" : {
        "name": "Ommetaphobia",
        "youtube": "https://youtu.be/U_mYdy8kNp4",
    },
    "CrystalShogun" : {
        "name": "Shogun of the Crystal",
        "spotify": "https://open.spotify.com/track/7shqbpySIh9Z8c23YnMCu7?si=375be1d6dc8f43f8",
        "soundcloud": "https://soundcloud.com/karoleus-pl/crystal_shogun",
    },
    "FinaleFlower" : {
        "name": "Finale flower",
        "youtube": "https://youtu.be/6I3bcNK0S9E",
    },
    "GlitchedSword" : {
        "name": "Glitched sword",
        "spotify": "https://open.spotify.com/track/7pXP0yuVdYjQliJgXtYaIS?si=892121f8b9464b29",
        "soundcloud": "https://soundcloud.com/karoleus-pl/glitched-sword",
    },
    "Athazagoraphilia" : {
        "name": "Athazagoraphilia",
        "youtube": "https://youtu.be/USIdUTsFQzI",
    },
    "Tristophobia" : {
        "name": "Tristophobia",
        "youtube": "https://youtu.be/xw_-Ye9LAC8?si=80zhJ9Orm4Khg2Sm",
    },
    "Visiosubrideophobia" : {
        "name": "Visiosubrideophobia",
        "youtube": "https://www.youtube.com/watch?v=mIEKzQ6IhAM",
    },
    "Stressful" : {
        "name": "Stressful",
        "youtube": "https://www.youtube.com/watch?v=vh30pB6KJUM&feature=youtu.be",
    },
    "TheEmptiness" : {
        "name": "The Emptiness",
        "spotify": "https://open.spotify.com/track/70cwel2foGmTclgufYfHYe?si=583d8120fcd64bb0",
        "soundcloud": "https://soundcloud.com/karoleus-pl/the-emptiness",
        "youtube": "https://youtu.be/EZOJFADhtVQ?si=8q_140eQtw3nXW14",
    },
    "LiverworthyPiano" : {
        "name": "Liver-worthy Piano",
        "youtube": "https://www.youtube.com/watch?v=n8bEFL8-jso",
    },
    "SteampunkEye" : {
        "name": "Steampunk eye",
        "spotify": "https://open.spotify.com/track/6udMGDQn3JVBPh1krGMcKv?si=915524f2a1064c95",
        "soundcloud": "https://soundcloud.com/karoleus-pl/steampunk-eye",
    },
    "FightAgainstMyself" : {
        "name": "Fight Against Myself",
        "soundcloud": "https://soundcloud.com/karoleus-pl/fight-aganist-myself",
    },
    "EVAD17" : {
        "name": "EVA D17",
        "youtube": "https://youtu.be/sYHgINItU_8",
    },

    // 2022
    "Pianolovania" : {
        "name": "Pianolovania",
        "youtube": "https://www.youtube.com/watch?v=ocpLxa8M9tA&feature=youtu.be",
    },
    "TheFrost" : {
        "name": "The Frost",
        "youtube": "https://www.youtube.com/watch?v=tPPryp6fEno",
    },
    "IslandInTheSky" : {
        "name": "Island in the sky",
        "youtube": "https://www.youtube.com/watch?v=UHEYHyjstTc&feature=youtu.be",
    },
    "ChristmasTrollge" : {
        "name": "Christmas Trollge",
        "youtube": "https://www.youtube.com/watch?v=oxniJHimwik",
    },
    "Watrobolovania" : {
        "name": "Wątrobolovania",
        "youtube": "https://www.youtube.com/watch?v=kBsm-KbtNkw",
    },
}

let musicsections = {
    "Colors of another" : ["UntitledAdventure","WhoToldYouToGo", "HoldOn", "YouLookNervous"],
    "Curse of Heavens" : ["Falling","PrideOfZadkiel", "DustOfYeasterday"],
    "2025 singles" : ["Meadow", "IncompleteStar", "SchoolhouseTroubleCover", "TheyreComing", "GPURenewal", "DeathEggCover", "BoysNewFriends"].reverse(),
    "2024 singles" : ["TheFrostRemastered","UsseewaBreakcore","IHateYouButItHurts","BeholdTheSkeleton","Desires","Loneliness","ChaoticReflection","DripWatroba","AllThatRemains"].reverse(),
    "2023 singles" : ["HyperGlitch","Chronophobia","Alchmophobia","Ommetaphobia","CrystalShogun","FinaleFlower","GlitchedSword","Athazagoraphilia","Tristophobia","Visiosubrideophobia","Stressful","TheEmptiness","LiverworthyPiano","SteampunkEye","FightAgainstMyself","EVAD17"].reverse(),
    "2022 singles" : ["Watrobolovania", "TheFrost", "IslandInTheSky", "ChristmasTrollge", "Pianolovania"],
}

let bpm_counter_sec = 1

function count_sec_by_bpm(bpm,time){
    bpm_counter_sec = ((60 * time[0]) / bpm) * (4/time[1]) * 0.25
}

function PlayMusic(music_file_name){
    music_name.innerHTML = `<b>${musicinfo[music_file_name]["name"]}</b>`
    music_img.src = (`../images/music_covers/${music_file_name}.jpg`);

    platform_buttons.innerHTML = ""
    if (musicinfo[music_file_name]["youtube"]){
        platform_buttons.innerHTML += MakePlatformButton("youtube", music_file_name)
    }
    if (musicinfo[music_file_name]["soundcloud"]){
        platform_buttons.innerHTML += MakePlatformButton("soundcloud", music_file_name)
    }
    if (musicinfo[music_file_name]["spotify"]){
        platform_buttons.innerHTML += MakePlatformButton("spotify", music_file_name)
    }

    audio_player.src = (`../sounds/music/${music_file_name}.mp3`);
    audio_player.play();

    count_sec_by_bpm(musicinfo[music_file_name]["bpm"],musicinfo[music_file_name]["time"])
    MusicBoomLoop()
}

function StopMusic(){
    audio_player.pause()
}

function VolumeChange(newvolume){
    audio_player.volume = `Volume: ${newvolume}`;
}

function MakePlatformButton(platform, file_name){
    let returnhtml = `
        <button>
            <a href="${musicinfo[file_name][platform]}" target="_blank">
                <img src="../images/icons/${platform}_color.png">
            </a>
        </button>
    `
    return returnhtml
}

function MakePlatformButton_musicbutton(platform, file_name){
    let returnhtml = `
        <button>
            <a href="${musicinfo[file_name][platform]}" target="_blank">
                <img src="../images/icons/${platform}_color.png">
            </a>
        </button>
    `
    return returnhtml
}


// ======

function MusciHeaderChange(name){
    music_header.innerHTML = name
}

function OpenSection(section_name){
    music_selection.innerHTML = ""
    
    for (let i=0; i < musicsections[section_name].length; i++){
        if (i == musicsections[section_name].length - 1){
            MakeMusicButton(musicsections[section_name][i], true, 0.02*i+1)
        }
        else{
            MakeMusicButton(musicsections[section_name][i], false, 0.02*i+1)
        }
    }

    MusciHeaderChange(section_name)
}

function MakeSectionButtons(){
    music_selection.innerHTML = ""

    MakeSectionButton("Colors of another", false)
    MakeSectionButton("Curse of Heavens", false)
    MakeSectionButton("2025 singles",false)
    MakeSectionButton("2024 singles",false)
    MakeSectionButton("2023 singles",false)
    MakeSectionButton("2022 singles",true)
}

function MakeSectionButton(name, last){
    if (last){
        folder_selection.innerHTML += `
            <button onclick="OpenSection('${name}')" class="selection_button last_selection_button"> <a href="#music_anchor"> ${name} </a> </button>
        `
    }
    else {
        folder_selection.innerHTML += `
            <button onclick="OpenSection('${name}')" class="selection_button"> <a href="#music_anchor"> ${name} </a> </button>
        `
    }
}


function MakeMusicButton(name, last, appear_offset){
    let tochangehtml = ""

    if (last){
        tochangehtml += `
            <button class="music_button last_music_button" style="animation: musicbutton_appear ${appear_offset}s;">
        `
    }
    else{
        tochangehtml += `
            <button class="music_button" style="animation: musicbutton_appear ${appear_offset}s;">
        `
    }

    if (musicinfo[name]["preview"]){
        tochangehtml += `
            <a onclick="PlayMusic('${name}')">
    `
    }

    if (musicinfo[name]["cover"]){
        tochangehtml += `
            <img src='../images/music_covers/${musicinfo[name]["cover"]}.jpg'>
        `
    }
    else{
        tochangehtml += `
            <img src='../images/music_covers/${name}.jpg'>
        `
    }

    tochangehtml += `
        <span class="music_button_name">${musicinfo[name]["name"]}
    `

    if (musicinfo[name]["preview"]){
        tochangehtml += `<p class="music_button_press_to_play"> Press for preview </p> </a>`
    }

    tochangehtml += `
    </span>
    <div class="music_button_tags_container"></div>
    <div class='platform_buttons_musicbutton' id="${name}_platform_button">`
    
    console.log("musicinfo[name]: ", musicinfo[name])

    tochangehtml += `
            </div>
            </button>
        `
    
    music_selection.insertAdjacentHTML('beforeend', tochangehtml)

    if (musicinfo[name]["youtube"]){
        let addhtml = MakePlatformButton_musicbutton("youtube", name)
        document.getElementById(`${name}_platform_button`).innerHTML += addhtml
    }
    if (musicinfo[name]["soundcloud"]){
        console.log("Soundcloud")
        let addhtml = MakePlatformButton_musicbutton("soundcloud", name)
        document.getElementById(`${name}_platform_button`).innerHTML += addhtml
    }
    if (musicinfo[name]["spotify"]){
        let addhtml = MakePlatformButton("spotify", name)
        document.getElementById(`${name}_platform_button`).innerHTML += addhtml
    }
}

function CheckLoop(){
    setTimeout(() => {
        if (!audio_player.paused) {
            music_player.style.display = "block"
            music_stop_button.style.display = "block"
        } else {
            music_player.style.display = "none"
            music_stop_button.style.display = "none"
        }
        CheckLoop()
    }, 100);
}

let audio_boom_playing = false
function MusicBoomLoop(){
    setTimeout(() => {
        if (!audio_player.paused){
            if (!audio_boom_playing){
                audio_boom_playing = true
                music_player.style.animation = 'none';
                music_stop_button.style.animation = 'none';
                void music_player.offsetWidth;
                void music_stop_button.offsetWidth;
                music_player.style.animation = `music_boom ${bpm_counter_sec}s ease forwards`;
                music_stop_button.style.animation = `music_boom ${bpm_counter_sec}s ease forwards`;
                setTimeout(() => {
                    audio_boom_playing = false
                }, bpm_counter_sec * 1000)
            }
            MusicBoomLoop()
        }

    }, 1);
}

CheckLoop()
MakeSectionButtons()
OpenSection("Colors of another")