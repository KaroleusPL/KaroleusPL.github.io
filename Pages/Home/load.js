const Content = document.getElementById("Content")

// HOME PAGE
let Experience_Languages
function Experience_NewLanguage(name, level) {
    Experience_Languages.innerHTML += `

        <div class="A4_Content_Container">
            <p class="label"> ${name.replace("_", " ")} </p>
            <img src="../../Assets/Images/Icons/Icon_${name}.png" alt="${name} thumbnail image">
            <p class="level" style="color: var(--Level_${level});"> ${level.replace("_", " ")} </p>
        </div>

    `
}

let Experience_Programs
function Experience_NewProgram(name, program) {
    Experience_Programs.innerHTML += `

        <div class="A4_Content_Container">
            <p class="label"> ${name.replace("_", " ").replace("_", " ")} </p>
            <img src="../../Assets/Images/Icons/Icon_${name}.png" alt="${name} thumbnail image">
            <p class="level" style="color: var(--Program_${program});"> ${program.replace("_", " ").replace("_", " ")} </p>
        </div>

    `
}

let Socials
function Socials_New(name, link, desc) {
    Socials.innerHTML += `

        <a href="${link}" target="_blank">
        <div class="A4_Content_Container">
            <p class="label"> ${name.replace("_", " ").replace("_", " ")} </p>
            <img src="../../Assets/Images/Icons/Icon_${name}.png" alt="${name} thumbnail image">
            <p class="social_desc"> ${desc} </p>
        </div>
        </a>

    `
}

let Interesing
function Interesing_New(name, img_name, link, target, desc) {

    let to_add = ``

    to_add += `

        <div class="Interesing_Content_Container">
            <div class="Interesing_Info">
                <p class="title"> ${name} </p>
                <a href="${link}" target="${target}" onclick="ReloadHash_Special()"> Check out </a>
                <p class="desc"> ${desc} </p>
            </div>`

    if (img_name != "None"){
        to_add += `
        <div class="zoom_container">
            <img src="../../Assets/Images/Thumbnails/Thumbnail_${img_name}.png" alt="${name} thumbnail image">
        </div>`
    }
    to_add += `</div>`

    Interesing.innerHTML += to_add
}

let People
function People_New(name, link, desc) {
    People.innerHTML += `

        <div class="People_Content_Container">
            <div class="zoom_container">
                <img src="../../Assets/Images/Icons/Icon_${name}.png" alt="${name} thumbnail image">
            </div>

            <div class="People_Info">
                <p class="title"> ${name} </p>
                <a href="${link}" target="_blank"> Check out </a>
                <p class="desc"> ${desc} </p>
            </div>
        </div>

    `
}

// ABOUT

let About = document.getElementById("About")
let About_nav = document.getElementById("About_nav")

function NewAbout(title, content){

    About.innerHTML += `
        <h2> ${title} </h2>

        <span class="anchor" id="${title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()}"></span>

        <section>
            ${content}
        </section>
    `
    About_nav.innerHTML += `
        <a onclick="ScrollToId('${title.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()}')"> ${title} </a>
    `
}

// PROJECTS

let Projects
let Current

function NewProject(title, img_name){
    Projects.innerHTML += `
        <button onclick="LoadNew('${title}')">
            <img src="../../Assets/Images/Icons/Icon_${img_name}.png" alt="">
            <p><b>${title}</b></p>
        </button>
    `
}

function NewProject_Section(title){
    Projects.innerHTML += `
        <h2> ${title} </h2>
    `
}

// webagames

let webgames_container

function NewWebGame(name, link){
    webgames_container.innerHTML += `

        <a href="../../Pages/${link}" target="_blank">
            <b>${name}</b>
        </a>

    `
}

// pages

let pages_container

function NewPageButton(name, link, desc){
    pages_container.innerHTML += `

        <a href="../../Pages/${link}" target="_blank">
            <b>${name}</b> - ${desc}
        </a>

    `
}

function LoadCurrent(title, img_name, content, links_info){
    let new_html = `
        <h2> ${title} </h2>

        <div>
            <div class="img_container">
                <img src="../../Assets/Images/Thumbnails/Thumbnail_${img_name}.png" alt="no image">
            </div>
            <section>
                ${content}
            </section>
        </div>`

    if (Object.keys(links_info).length > 0){
        new_html += `
            <h2> Links </h2>
            <div class="current_links">
            `

        let keys = Object.keys(links_info)

        for (let i=0; i < keys.length; i++){
            let cur = links_info[keys[i]]
            console.log("cur: ", cur)
            
            new_html += `
                <a href="${cur["link"]}" target="_blank"> ${cur["link_title"]} </a>
            `
        }

        new_html += "</div>"
    }
    
    Current.innerHTML = new_html
}

function LoadNew(title){
    ScrollToId("Current")

    switch(title){
        case "Soon":
            LoadCurrent("Soon", "Soon",
                `
                    <p>
                        Content not available yet 
                    </p>
                `,
                [
                ])
            break

        case "The Great Doors of Door AAAA":
            LoadCurrent("The Great Doors of Door AAAA", "TGDoD",
                `
                    <p>
                    One day you get robbed by a mysterious creature. You wake up in a weird place. Then you meet a mysterious person, he seems to be confused by you... ESCAPE.
                    <br><br>
                    Meme parody of the DOORS by LSPLASH but we put too much effort in it so we ended up making a whole story and adding unique mechanics.<br>
                    It's playable on roblox.<br><br>

                    Made by Liver-worthy Studio<br><br>

                    <b>Sadly the game might not work since roblox game rotting.. <br>
                    To honor the memory of the first "liver-worthy studio" project, the music album "The Legacy of The Place" was created.<br>
                    The album contains remasters of The Great Doors of Door AAAA soundtracks. </b>
                    </p>
                `,
                [
                    {
                        "link_title" : "Play here",
                        "link" : "https://www.roblox.com/pl/games/10748929809/The-Great-Doors-of-Door-AAAA"
                    },
                ])
            break
        
        case "Computer Renewal":
            LoadCurrent("Computer Renewal", "ComputerRenewal",
                `
                    <p>
                        An arcade game where you move a spark around 9 fields while avoiding viruses to music.<br><br>

                        I created two levels and decided to publish them.<br>
                        I have more songs ready, but i haven't charted them yet.<br><br>

                        Contains Windows and Linux version. 
                    </p>
                `,
                [
                    {
                        "link_title" : "Play here",
                        "link" : "https://karoleuspl.itch.io/computer-renewal"
                    },
                ])
            break
        
        case "Curse of Heavens":
            LoadCurrent("Curse of Heavens", "CurseOfHeavens",
                `
                    <p>
                        Drum&Bass/Soundtrack instrumental music album with story of Gabriel after fall of heavens.<br><br>
                        The heavens mysteriously got destroyed after all of Archangels were taken by 7 deadly sins.<br>
                        Gabriel as the only one left, needs to come back to the heavenly wasteland and find out how to save everything. 
                    </p>
                `,
                [
                    {
                        "link_title" : "ACT I",
                        "link" : "https://youtu.be/ZgyLUvQji-w?si=l2XkdotoUAInIfHp",
                    },
                    {
                        "link_title" : "ACT II",
                        "link" : "https://www.youtube.com/watch?v=kxhN3kPGIHI&list=OLAK5uy_n6QHndkQWrPvP2OBU9XdqSUoCT7DIV4Ao",
                    },
                ])
            break
        
        case "KaroleusPL Page":
            LoadCurrent("KaroleusPL Page", "KaroleusPage",
                `
                    <p>
                        I'm still planing to upgrade the page. <br>
                        Makes some more web games and a reading page where I will upload lore of my characters. 
                    </p>
                `,
                [
                ])
            break
        
        case "Ratiofinder":
            LoadCurrent("Ratiofinder", "Ratiofinder",
                `
                    <p>
                        Python script to quickly get resolution to ratio you need.
                        Need small 16/9 resolution? You'll find one in secounds!
                    </p>
                `,
                [
                    {
                        "link_title" : "Github",
                        "link" : "https://github.com/KaroleusPL/Ratiofinder",
                    },
                ])
            break

        default:
            LoadCurrent(title, "Soon",
                `
                    <h3> This page doesn't exist yet. </h3>
                `,
                [])
            break
    }
}


// LOADING
function LoadContent(name){

    console.log("name: ", name)

    Content.className = name.replaceAll(" ", "")

    switch(name.replaceAll(" ", "")){

        case "HOME":
            
            Content.innerHTML = `

                <div class="Container_M">

                <h2> Might be interesting </h2>
                <section>
                    <div id="Interesing"></div>
                </section>

                <h2> Experience </h2>
                <section>
                    <h3> Languages </h3>
                    <div id="Experience_Languages"></div>

                    <h3> Programs </h3>
                    <div id="Experience_Programs"></div>
                </section>

                <h2> Socials </h2>
                <section>
                  <div id="Socials"></div>
                </section>

                <h2> People I work with </h2>
                <section>
                    <div id="People"></div>
                </section>

                </div>
            
            `
            Experience_Languages = document.getElementById("Experience_Languages")
            Experience_Programs = document.getElementById("Experience_Programs")
            Socials = document.getElementById("Socials")
            Interesing = document.getElementById("Interesing")
            People = document.getElementById("People")

            Interesing_New("K. Page", "K_Concept", "../Characters/K", "_self", `
                K. is my main oc.
                `)
            
            Interesing_New("Computer Renewal - DEMO", "ComputerRenewal", "https://karoleuspl.itch.io/computer-renewal","_blank", `
                An arcade game where you move a spark around 9 fields while avoiding viruses to music.<br>
                I created two levels and decided to publish them.<br>
                I have more songs ready, but i haven't charted them yet.<br>
                Contains Windows and Linux version. 
                `)
            
            Interesing_New("Liver-worthy Companion", "LiverWorthyCompanion", "../LiverWorthyCompanion","_blank", `
                Companion to have fun with! <small><small> It barely contains anything for this moment.</small></small> <br>
                Chat bot that works with a script similar to browser. <br>
                Every response wrote by hand. <br>
                `)

            Interesing_New("The Great Doors of Door AAAA", "TGDoD", "https://www.roblox.com/games/10748929809/The-Great-Doors-of-Door-AAAA","_blank", `
                Meme parody of the DOORS by LSPLASH but we put too much effort in it so we ended up making a whole story and adding unique mechanics.<br>
                <br>

                <b>Sadly the game might not work since roblox game rotting.. <br>
                To honor the memory of the first "Liver-worthy Studio" project, the music album "The Legacy of The Place" was created.<br>
                The album contains remasters of The Great Doors of Door AAAA soundtracks. </b>
                `)

            Interesing_New("More Projects", "None", "#projects","_self", `
                `)

            Experience_NewLanguage("JavaScript", "Really_Good")
            Experience_NewLanguage("Luau", "Really_Good")
            Experience_NewLanguage("GDScript", "Very_Good")
            Experience_NewLanguage("HTML", "Very_Good")
            Experience_NewLanguage("CSS", "Very_Good")
            Experience_NewLanguage("Python", "Very_Good")
            Experience_NewLanguage("C_Sharp", "Good")
            Experience_NewLanguage("C", "Ok")
            Experience_NewLanguage("C++", "Ok")
            Experience_NewLanguage("MySql", "Learning")

            Experience_NewProgram("Godot", "Programming")
            Experience_NewProgram("Vs_Code", "Programming")
            Experience_NewProgram("VRChat_SDK", "Programming")
            Experience_NewProgram("Unity", "Programming")
            Experience_NewProgram("Git", "Programming")
            Experience_NewProgram("Blender", "Art")
            Experience_NewProgram("Krita", "Art")
            Experience_NewProgram("Ibis_Paint_X", "Art")
            Experience_NewProgram("FL_Mobile", "Music")
            Experience_NewProgram("Da_Vinchi_Resolve", "Video")
            Experience_NewProgram("Kdenlive", "Video")

            Socials_New("Youtube", "https://www.youtube.com/@KaroleusPL", "Practically everything")
            Socials_New("Twitter", "https://x.com/KaroleusPl", "Some art")
            Socials_New("Spotify", "https://open.spotify.com/artist/3ZwdBLVOdjFpk0knPOcbam?si=3wiXUP-OSDWy_jCygV4VVg", "All newest music (music also on other platforms)")
            Socials_New("Soundcloud", "https://soundcloud.com/karoleus-pl", "Some music")
            Socials_New("Deviantart", "https://www.deviantart.com/karoleusyt", "Some art, but mostly forgotten")
            Socials_New("Newgrounds", "https://karoleuspl.newgrounds.com/", "Some art, but mostly forgotten")
            
            People_New("Wolfyxon", "https://wolfyxon.github.io/", `
                "Guy who loves programming and dealing with all kinds of software."<br>
                My friend who taught me how to code and created with me The Great Doors of Door.<br>
                Uses Arch btw. `)
            break
        
        case "ABOUT":
            
            Content.innerHTML = `

                <div class="Container_M">

                <div id="About_nav">  <!-- Couldn't use <nav> for some reason -->
                </div>

                <div id="About">
                </div>

                </div>
            
            `

            About = document.getElementById("About")
            About_nav = document.getElementById("About_nav")
            
            NewAbout("Story of my experience", `
                <b>I'm KaroleusPL</b><br>
                I'm learning codding since year 2016 and started by using Scratch, then swapped to Python.<br>
                First actual game codding I did, was in Roblox Studio by using Luau.<br><br>

                My adventure with drawing in internet started when I made my first animation meme "Mind Brand Meme" (Old) (Remastered).<br>
                Since then I made several animations, mostly about Trollges.<br><br>

                I made my first actually music when I was making The Great Doors of Door AAAA with Wolfyxon in 2022.<br>
                I created my first album that in my opinion is very bad but I already remastered a lot of those songs.<br><br>
            `)

            NewAbout("Coding", `
                My code can be pretty messy, If I'm doing something for the first time.
                That's why I often write something several times so it can look better or be smaller.

                If some language has weird way to do something, I always make a function that is making it easier.

                Example:
                In GDScript to wait 1 sec you need to make:
                <code>
                    await get_tree().create_timer(1).timeout #wait 1 sec<br>
                    await get_tree().process_frame #wait 1 frame
                </code>
                So I created function to make it faster.
                <code>
                func wait(wait_time=0):<br>
                <img class="tab">if wait_time <=0:<br>
                    <img class="tab"><img class="tab"> return get_tree().process_frame<br>
                <img class="tab">else:<br>
                    <img class="tab"><img class="tab"> return get_tree().create_timer(wait_time).timeout<br>
                </code>
                Now, by writing this code it will wait given time, however if time not given it will wait 1 frame.
                <code>
                    await wait(1) #wait 1 sec<br>
                    await wait() #wait 1 frame
                </code>
            `)
            
            NewAbout("Music", `
                I <b>LOVE</b> Breakcore and other drum breaking music! <br>
                        I'm a drummer and I'm trying to learn how to play those songs.<br><br>
                        I started playing drums in around 2015 but for most time I was pretty bad at it, but since 2021 I started making progress and currenly I would say I'm pretty good.<br>
                        I was able to play breakcore song <a class="link" href="https://youtu.be/HZXIMWywMaI?si=A0FtdzhgNBozKP2X" target="_blank">"GLITCH IN YOUR HEART"</a> for the first time in 2025.<br><br>

                        Other music genres I like are electronics and that's what i mostly create as a music producer.<br>
                        I like when music is jumpy or epic or both.<br><br>

                        <b>My favourite tracks</b><br>
                        -<a class="link" href="https://youtu.be/lgRTbYJ8V5g?si=pKTWyKfkEYiA2YRd" target="_blank">The Scrap Boy by Steampianist</a><br>
                        -<a class="link" href="https://youtu.be/HZXIMWywMaI?si=A0FtdzhgNBozKP2X" target="_blank">GLITCH IN YOUR HEART by gabemtnz</a><br>
                        -<a class="link" href="https://youtu.be/Esu__LAsA68?si=6MH6QuKdK1jAsgAC" target="_blank">The Court Jester by thquib, FUKASE</a><br>
                        </p>
            `)

            NewAbout("Games", `
                I really like Adventure such as <br>
                            Metal Gear Rising:Revengeance, Skyrim, Horizon:Zero Dawn/Forbidden West, UNDERTALE, Minecraft: Story Mode,
                            The Legend of Zelda, Subnautica or Detroid:Become Human.<br><br>

                            Games I love too are Rhythmic games, such as <br>
                            Friday Night Funkin, OSU, Geometry Dash, Like a Dino.<br><br>

                            I do also love horror games like Fnaf or Bendy and the Ink Machine/DarkRevival and others.<br><br>

                            But my favourite games are <br>
                            <b>INSCRYPTION, Metal Gear Rising:Revengeance, Bendy and the Dark Revival, Skyrim and UNDERTALE/DELTARUNE.</b>
            `)

            break

        case "PROJECTS":
            
            Content.innerHTML = `
                <div class="Container_Projects">
                    <div id="Current">
                    </div>

                    <div id="Projects">
                    </div>
                </div
            `

            Projects = document.getElementById("Projects")
            Current = document.getElementById("Current")
            
            NewProject_Section("Games")
            NewProject("The Great Doors of Door AAAA", "TGDoD")
            NewProject("Computer Renewal", "ComputerRenewal")
            NewProject_Section("Music")
            NewProject("Curse of Heavens", "CurseOfHeavens")
            NewProject_Section("Codding")
            NewProject("KaroleusPL Page", "KaroleusPL")
            NewProject("Ratiofinder", "Python")
            NewProject_Section("Soon")
            NewProject("Space object wiki", "Soon")

            LoadNew("The Great Doors of Door AAAA")

            break

        case "MUSIC":
            
            Content.innerHTML = `
                <div class="Container_Music">

                    <div id="FolderSelection">
                    </div>
                    
                    <div id="CurrentFolder">
                    </div>

                </div>
            
            `
            LoadFolders()

            break

        case "WEBGAMES":
            
            Content.innerHTML = `
                <div class="Container_M">

                    <div id="WebgamesContainer">
                        <h2> Some games could not work on mobile </h2>
                    </div>

                </div>
            
            `
            
            webgames_container = document.getElementById("WebgamesContainer")
            
            NewWebGame("Space Wanderer", "SpaceWanderer")
            NewWebGame("Star Eater", "StarEater")

            break
        
        case "PAGES":
            
            Content.innerHTML = `
                <div class="Container_M">

                    <div id="PagesContainer">
                    </div>

                </div>
            
            `
            
            pages_container = document.getElementById("PagesContainer")
            
            NewPageButton("Liver-worthy Code", "LiverWorthyCode", "Simple text encryption tool")
            NewPageButton("Liver-worthy Companion", "LiverWorthyCompanion", "Search like companion")
            NewPageButton("K. Page", "Characters/K", "Main OC page")

            break

        default:
            Content.className = "NotFound"

            Content.innerHTML = " <h1> Page Error: Not Found. </h1>"
            break
        
    }

    Content.style.animation = "none"
    void Content.offsetWidth
    Content.style.animation = "0.5s ease-out 0s 1 SlideFromDown"
    
    window.scrollTo(0,0)
}
