function LoadNews() {
    const newsContainer = document.getElementById("NewsContainer");
    if (!newsContainer) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {
            title: "Full page Update",
            img: "Assets/img/Logos/KaroleusLogo.webp",
            info: "Actually rewrited the whole page.",
            date: "02.03.2025",
        },

        {
            title: "Unfinished Star",
            img: "Assets/img/Art/SignOfAnEye.jpg",
            info: "Rework of main OC. Within rework of everything.",
            date: "02.03.2025",
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `<br>
            <div class="NewsPage Center">
                <h2 style="text-align: center;"> ${news.title} </h2>
                <div style="margin: 0;">
                    <img src="${news.img}" style="width: 90%; background-color: rgb(51, 25, 51); border: 2px rgb(170, 0, 167) solid;">
                </div>
                <p style="text-align: center;">${news.info}</p>
                <h4 style="text-align: center;"> ${news.date} </h4>
            </div>
        `
    });

    newsContainer.innerHTML = ToAdd

    console.log("News: done")
}

function LoadLanguages() {
    const LanguagesContainer = document.getElementById("LanguagesContainer");
    if (!LanguagesContainer) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {
            title: "Python",
            img: "Assets/img/Logos/Lang/PythonLogo.png",
            level: "Pretty Good",
        },
        {
            title: "Lua Script",
            img: "Assets/img/Logos/Lang/LuaLogo.png",
            level: "Very Good",
        },
        {
            title: "HTML",
            img: "Assets/img/Logos/Lang/HtmlLogo.png",
            level: "Pretty Good",
        },
        {
            title: "JavaScript",
            img: "Assets/img/Logos/Lang/JsLogo.png",
            level: "Pretty Good",
        },
        {
            title: "CSS",
            img: "Assets/img/Logos/Lang/CssLogo.svg",
            level: "Pretty Good",
        },
        {
            title: "GDscript",
            img: "Assets/img/Logos/Lang/GodotLogo.png",
            level: "Very Good",
        },
        {
            title: "C++",
            img: "Assets/img/Logos/Lang/Cpp.png",
            level: "Learning",
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `
            <div class="ContainerExperience Center;">
                <p style="text-align:center; font-size:15px; height:20px;"> ${news.title} </p>
                <div style="margin:auto;">
                <img src="${news.img}" class="ExperienceImage">
                </div>
                <p style="text-align:center; font-size:10px; `
            
        switch(news.level) {
            case "Learning":
                ToAdd += "color: red;"
                break
            case "Good":
                ToAdd += "color: yellow;"
                break
            case "Pretty Good":
                ToAdd += "color: lime;"
                break
            case "Very Good":
                ToAdd += "color: rgb(205, 89, 255);"
                break

        }
            
        ToAdd += `
            "> ${news.level} </p>
            </div>
        `
    });

    LanguagesContainer.innerHTML = ToAdd

    console.log("Languages: done")
}

function LoadTools() {
    const ToolsContainer = document.getElementById("ToolsContainer");
    if (!ToolsContainer) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {
            title: "Godot",
            img: "Assets/img/Logos/Programs/godot.png",
            level: "Programming",
        },
        {
            title: "Roblox",
            img: "Assets/img/Logos/Programs/rbxstudio.png",
            level: "Programming",
        },
        {
            title: "VS Code",
            img: "Assets/img/Logos/Programs/vscode.png",
            level: "Programming",
        },
        {
            title: "Git",
            img: "Assets/img/Logos/Programs/git.png",
            level: "Programming",
        },
        {
            title: "Krita",
            img: "Assets/img/Logos/Programs/Krita.png",
            level: "Art",
        },
        {
            title: "Ibis Paint X",
            img: "Assets/img/Logos/Programs/IbisPaintX.png",
            level: "Art",
        },
        {
            title: "FL Studio Mobile",
            img: "Assets/img/Logos/Programs/FLmobile.png",
            level: "Music",
        },
        {
            title: "Da Vinchi Resolve",
            img: "Assets/img/Logos/Programs/DaVinciResolve.png",
            level: "Video",
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `
            <div class="ContainerExperience Center;">
                <p style="text-align:center; font-size:15px; height:20px;"> ${news.title} </p>
                <img src="${news.img}" class="ExperienceImage">
                <p style="text-align:center; font-size:10px; `
            
        switch(news.level) {
            case "Programming":
                ToAdd += "color: cyan;"
                break
            case "Art":
                ToAdd += "color: lime;"
                break
            case "Music":
                ToAdd += "color: rgb(205, 89, 255);"
                break
            case "Video":
                ToAdd += "color: yellow;"
                break

        }
            
        ToAdd += `
            "> ${news.level} </p>
            </div>
        `
    });

    ToolsContainer.innerHTML = ToAdd

    console.log("Tools: done")
}

function LoadSocials() {
    const SocialsContainer = document.getElementById("SocialsContainer");
    if (!SocialsContainer) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {
            title: "Youtube",
            img: "Assets/img/Logos/Social/YoutubeLogo.png",
            link: "https://www.youtube.com/@KaroleusPL",
        },
        {
            title: "Twitter",
            img: "Assets/img/Logos/Social/TwitterLogo.avif",
            link: "https://x.com/KaroleusPl",
        },
        {
            title: "Soundcloud",
            img: "Assets/img/Logos/Social/SoundCloudLogo.jpg",
            link: "https://soundcloud.com/karoleus-pl",
        },
        {
            title: "DeviantArt",
            img: "Assets/img/Logos/Social/DeviantArtLogo.png",
            link: "https://www.deviantart.com/karoleusyt",
        },
        {
            title: "New Grounds",
            img: "Assets/img/Logos/Social/NGLogo.gif",
            link: "https://karoleuspl.newgrounds.com/",
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `
            <div class="Container10_inline Center;">
                <a href="${news.link}" target="_blank">
                    <p style="text-align: center; font-size:15px; height:20px;"> ${news.title} </p>
                    <img src="${news.img}" class="SocialImage"> 
                </a>
            </div>
        `
    });

    SocialsContainer.innerHTML = ToAdd

    console.log("Socials: done")
}


function LoadMain() {
    LoadNews()
    LoadLanguages()
    LoadTools()
    LoadSocials()
    MainPreviewWindowLoad("none")

    TurnOnConsole()
}


function LoadPreviewWindow(Items) {
    const PreviewWindow = document.getElementById("PreviewWindow");
    if (!PreviewWindow) {
        console.log("News: No container") 
        print("No container")
        return;};

    let ToAdd = ""
    Items.forEach(news => {
        ToAdd += `
            <div class="Container30_inline Center"> 
                <img src="${news.img}" class="PreviewWindowImage">
            </div>
            <div class="Container70_inline ">
                <div class="Container_Color">
                    <h2> ${news.title} </h2>
                </div>

                <p></p>

                <div class="Container_Color">
                    <p> ${news.desc} </p>
                    <p style="font-size: 10px;"> Click the button to continue </p>
                </div>
            </div>
        `
    });

    PreviewWindow.innerHTML = ToAdd
}

function MainPreviewWindowLoad(topic) {
    const MainPreviewWindow = document.getElementById("PreviewWindow")

    if (topic == "none") {
        var Windows = ["Stories", "AboutMe", "MyProjects", "Gallery"]
        topic = Windows[Math.floor(Math.random() * Windows.length)];
    }

    console.log(topic)

    var Items
    switch(topic) {

        case "AboutMe":
            Items = [{
                title: "About Me", 
                img: "Assets/img/Banners/AboutMeBanner.webp", 
                desc: "Learn more about my hobbies. Games, musics and other things that I like. Contacts are also here.",},];
            break
        
        case "MyProjects":
            Items = [{
                title: "My Projects", 
                img: "Assets/img/Banners/MyProjectsBanner.webp", 
                desc: "All links and teasers for my (mostly) programming projects like games.",},];
            break

        case "Gallery":
            Items = [{
                title: "Gallery", 
                img: "Assets/img/Banners/GalleryBanner.webp", 
                desc: "My favorite music, art and other works I made. Teasers to musics or albums.",},];
            break

        case "Stories":
            Items = [{
                title: "Stories", 
                img: "Assets/img/Banners/StoriesBanner.webp", 
                desc: "Here you can read what I wrote. Things like OC stories with arts for it and music.",},];
            break

        default:
            Items = [{title: "None", img: "Assets/img/Logos/Lang/AboutMeBanner.webp", desc: "Error",},];
            break
    }

    LoadPreviewWindow(Items)
}

function LoadProjects() {
    const ProjectsList = document.getElementById("ProjectsList");
    if (!ProjectsList) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {   
            anchor: "TGDoD",
            title: "The Great Doors of Door AAAA",
            img: "../Assets/img/Icons/Projects/TGDoDicon.webp",
            link: "https://www.roblox.com/pl/games/10748929809/The-Great-Doors-of-Door-AAAA",
            buttontext: "Play on Roblox",
            desc: "Funny, a fairly well-made knock-off of The Doors game on Roblox. <br> Chapter 1 is available.",
            version: "Version:  2.1.3",
        },
        {   
            anchor: "CoH",
            title: "Curse of Heavens",
            img: "../Assets/img/Icons/Projects/cOHicon.webp",
            link: "none",
            buttontext: "Album not unavailable",
            desc: "Drum&Bass/Breakcore music album with story of Gabriel after fall of heavens.",
            version: " ",
        },
        {   
            anchor: "BD",
            title: "Blocky Danger",
            img: "../Assets/img/Icons/Projects/BDicon.png",
            link: "none",
            buttontext: "Unavailable",
            desc: "Game on roblox. Survive the attack of monsters, murderersand even more weird creatures! You never know who and where you will encounter. ",
            version: " ",
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `
            <div class="ProjectContainer" id="${news.anchor}_Anchor">

                    <div class="Container30_inline">
                        <img src="${news.img}" class="ProjectsImage">
                    </div>

                    <div class="Container70_inline Center">
                        <h2>${news.title}</h2>
                    `
            
        switch(news.link) {
            case "none":
                ToAdd += `<a target="_blank" ><button class="ProjectButton_Disabled">`
                break
            default:
                ToAdd += `<a href="${news.link}" target="_blank" ><button class="ProjectButton">`
                break

        }
            
        ToAdd += `
            ${news.buttontext}</button>
                        </a>

                        <br><br style="font-size:medium;">
                        <p style="width:70%;" class="Center"> ${news.desc} </p>

                        <p style="font-size: small;">${news.version}</p>
                    </div>
                </div>
                <br>
        `
    });

    ProjectsList.innerHTML = ToAdd

    console.log("ProjectsList: done")
}

function LoadGallery() {
    const ArtsContainer = document.getElementById("ArtsContainer");
    if (!ArtsContainer) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {
            title: "Sign of an Eye",
            img: "../Assets/img/Art/SignOfAnEye.jpg",
            link: "https://www.deviantart.com/karoleusyt/art/Sign-of-an-Eye-1125841084",
        },
        {
            title: "ALL STARS - ACT 3",
            img: "../Assets/img/Art/ALLSTARS_ACT3.jpg",
            link: "https://www.deviantart.com/karoleusyt/art/1107571058",
        },
        {
            title: "MX.",
            img: "../Assets/img/Art/MX.jpg",
            link: "https://www.deviantart.com/karoleusyt/art/MX-1100111219",
        },
        {
            title: "ACT 1 - ALL STARS // Ultra Mario",
            img: "../Assets/img/Art/UMario.jpg",
            link: "https://www.deviantart.com/karoleusyt/art/ACT-1-ALL-STARS-Ultra-Mario-1097858777",
        },
        {
            title: "Uzi Murder Drone - Redesign",
            img: "../Assets/img/Art/UziMurderDrone.jpeg",
            link: "https://www.deviantart.com/karoleusyt/art/Uzi-Murder-Drone-Redesign-1096432529",
        },
        {
            title: "Exhalted.",
            img: "../Assets/img/Art/Exhalted.jpg",
            link: "https://www.deviantart.com/karoleusyt/art/Exhalted-1090138846",
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `
            <div class="ArtContainer_inline">
                <div class="ArtContainer">
                    <img src="${news.img}">
                </div>

                <br style="font-size: 5px;">

                <a href=${news.link} target="_blank">
                    <button class="GalleryButton"> ${news.title} </button>
                </a>
            </div>
        `
    });

    ArtsContainer.innerHTML = ToAdd

    console.log("Languages: done")
}