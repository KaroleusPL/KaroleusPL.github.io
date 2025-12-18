const project_selection = document.getElementById("project_selection")
const project_window = document.getElementById("project_window")


let project_windows_dictionary = {
    "The Great Doors of Door AAAA" : {
        "name" : "The Great Doors of Door AAAA",
        "description" : `
            One day you get robbed by a mysterious creature. You wake up in a weird place.
            Then you meet a mysterious person, he seems to be confused by you... ESCAPE. <br><br>
            Meme parody of the DOORS by LSPLASH but we put too much effort in it so we ended up making a whole story and adding unique mechanics. <br>
            It's playable on roblox.<br><br>
            Made by Liver-worthy Studio`,
        "cover" : "TGDoD_2.png",
        "buttons_section" : `
            <a class="ProjectsLinkButton_full" href="https://www.roblox.com/pl/games/10748929809/The-Great-Doors-of-Door-AAAA" target="_blank"> Play now! </a>
        `,
    },

    "Computer Renewal" : {
        "name" : "Computer Renewal",
        "description" : `
           An arcade game where you move a spark around 9 fields while avoiding viruses to music.<br><br>
            I created two levels and decided to publish them.<br>
            I have more songs ready, but i haven't charted them yet.<br><br>
            Contains Windows and Linux version. 
            `,
        "cover" : "ComputerRenewal_1.png",
        "buttons_section" : `
            <a class="ProjectsLinkButton_full" href=https://karoleuspl.itch.io/computer-renewal" target="_blank"> Play the demo now! </a>
        `
    },

    "Curse of Heavens" : {
        "name" : "Curse of Heavens",
        "description" : `
            Drum&Bass/Soundtrack instrumental music album with story of Gabriel after fall of heavens. <br>
            The heavens mysteriously got destroyed after all of Archangels were taken by 7 deadly sins. <br>
            Gabriel as the only one left, needs to come back to the heavenly wasteland and find out how to save everything.
            `,
        "cover" : "CurseOfHeavens_cover.webp",
        "buttons_section" : `
            <a class="ProjectsLinkButton_part" href="https://www.youtube.com/watch?v=ZgyLUvQji-w" target="_blank"> ACT I </a>
        `
    },

    "KaroleusPL Page" : {
        "name" : "KaroleusPL Page",
        "description" : `
            I'm still planing to upgrade the page. makes some more web games and a reading page where I will upload lore of my characters.
        `,
        "cover" : "ComputerRenewal_1.png",
    },
}

function Load(){
    MakeSelectTab("Games")
    MakeSelectButton("The Great Doors of Door AAAA", "TGDoD_icon.webp")
    MakeSelectButton("Computer Renewal", "ComputerRenewal_icon.webp")
    MakeSelectTab("Music")
    MakeSelectButton("Curse of Heavens", "CurseOfHeavensLogo.png")
    MakeSelectTab("Other")
    MakeSelectButton("KaroleusPL Page", "KaroleusLogo.webp")
    
}

function MakeSelectTab(name){
    project_selection.innerHTML += `
        <div class="content_selection_projects_tab">${name}</div>
    `
}

function MakeSelectButton(text, icon){
    project_selection.innerHTML += `
        <button onclick="SelectButtonPressed('${text}')"><img src="../images/icons/${icon}"><p>${text}</p></button>
    `
}

function SelectButtonPressed(name){
    console.log("a:", name)
    LoadWindow(name)
}

function LoadWindow(name){
    let info = project_windows_dictionary[name]

    project_window.innerHTML = `
        <h2>  ${info["name"]} </h2>
        <img class="project_window_img" src="../images/covers/${info["cover"]}">
        <section class="project_window_box">
            <p class="large_font">
                ${info["description"]}
            </p>
        </section>
    `

    if (info["buttons_section"]){
        project_window.innerHTML += `
        <br>
            <h2>  Links </h2>
            ${info["buttons_section"]}
        `
    }

    console.log("AAA")
}

Load()
SelectButtonPressed("The Great Doors of Door AAAA")