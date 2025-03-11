function MoveBackUp() {
    window.scrollTo(0, 0);
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
                <p class="p_special_big"> ${news.title} </p>
                <div style="margin:auto;">
                <img src="${news.img}" alt="${news.img}" class="ExperienceImage">
                </div>
                <p style=" `
            
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
            " class="p_special_big"> ${news.level} </p>
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
                <p class="p_special_big"> ${news.title} </p>
                <img src="${news.img}" alt="${news.img}" class="ExperienceImage">
                <p style=" `
            
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
            " class="p_special_big"> ${news.level} </p>
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
                    <p class="p_special_big"> ${news.title} </p>
                    <img src="${news.img}" alt="${news.img}" class="SocialImage"> 
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
                <img src="${news.img}" alt="${news.img}" class="PreviewWindowImage">
            </div>
            <div class="Container70_inline ">
                <div class="Container_Color">
                    <h2> ${news.title} </h2>
                </div>

                <p class="p_special_small"></p>

                <div class="Container_Color">
                    <p> ${news.desc} </p>
                    <p class="p_special_small"> Click the button to continue </p>
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
            alt: "Mr.Wątroba looking from the hole in a door in flames.",
            link: "https://www.roblox.com/pl/games/10748929809/The-Great-Doors-of-Door-AAAA",
            buttontext: "Play on Roblox",
            desc: "Funny, a fairly well-made knock-off of The Doors game on Roblox. <br> Chapter 1 is available.",
            version: "Version:  2.1.3",
        },
        {   
            anchor: "CoH",
            title: "Curse of Heavens",
            img: "../Assets/img/Icons/Projects/cOHicon.webp",
            alt: "Destroyed heaven in blood, with palace in background.",
            link: "none",
            buttontext: "Album not unavailable",
            desc: "Drum&Bass/Breakcore music album with story of Gabriel after fall of heavens.",
            version: " ",
        },
        {   
            anchor: "BD",
            title: "Blocky Danger",
            img: "../Assets/img/Icons/Projects/BDicon.png",
            alt: "Costume with a knife",
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
                        <img src="${news.img}" alt="${news.alt}" class="ProjectsImage">
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


function  LoadGallery() {
    LoadGallery_Art()
    LoadGallery_Music()
    LoadGallery_Video()
}

function LoadGallery_Art() {
    const ArtContainer = document.getElementById("ArtContainer");
    if (!ArtContainer) {
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
            <div class="GalleryContainer_inline">
                <div class="GalleryContainer">
                    <img src="${news.img}">
                </div>

                <br style="font-size: 5px;">

                <a href=${news.link} target="_blank">
                    <button class="GalleryButton"> ${news.title} </button>
                </a>
            </div>
        `
    });

    ArtContainer.innerHTML = ToAdd

    console.log("Languages: done")
}

function LoadGallery_Music() {
    const newsItems = [
        {
            title: "Meadown",
            img: "../Assets/img/MusicCovers/Meadown.jpg",
            link: "https://soundcloud.com/karoleus-pl/meadow",
            year: "2025"
        },
        {
            title: "Schoolhouse Trouble",
            img: "../Assets/img/MusicCovers/SchoolhouseTrouble.jpg",
            link: "https://youtu.be/sd6q7tkHlM0",
            year: "2025"
        },
        {
            title: "Incomplete Star",
            img: "../Assets/img/MusicCovers/IncompleteStar.jpg",
            link: "https://soundcloud.com/karoleus-pl/incomplete-star",
            year: "2024"
        },
        {
            title: "All That Remains",
            img: "../Assets/img/MusicCovers/AllThatRemains.jpg",
            link: "https://soundcloud.com/karoleus-pl/all-that-remains",
            year: "2024"
        },
        {
            title: "Drip Wątroba",
            img: "../Assets/img/MusicCovers/DripWatroba.jpg",
            link: "https://soundcloud.com/karoleus-pl/drip-watroba",
            year: "2024"
        },
        {
            title: "Chaotic Reflection",
            img: "../Assets/img/MusicCovers/ChaoticReflection.jpg",
            link: "https://soundcloud.com/karoleus-pl/chaotic-reflection",
            year: "2024"
        },
        {
            title: "Loneliness",
            img: "../Assets/img/MusicCovers/Loneliness.jpg",
            link: "https://soundcloud.com/karoleus-pl/loneliness",
            year: "2024"
        },
        {
            title: "Desires",
            img: "../Assets/img/MusicCovers/Desires.jpg",
            link: "https://soundcloud.com/karoleus-pl/desires",
            year: "2024"
        },
        {
            title: "My wrath to you.",
            img: "../Assets/img/MusicCovers/MyWrathToYou.jpg",
            link: "https://soundcloud.com/karoleus-pl/my-wrath-to-you",
            year: "2024"
        },
        {
            title: "Jealousy",
            img: "../Assets/img/MusicCovers/Jealousy.jpg",
            link: "https://soundcloud.com/karoleus-pl/jealousy",
            year: "2024"
        },
        {
            title: "Who matters?",
            img: "../Assets/img/MusicCovers/WhoMatters.jpg",
            link: "https://soundcloud.com/karoleus-pl/who-matters",
            year: "2024"
        },
        {
            title: "Forest of Wonders",
            img: "../Assets/img/MusicCovers/ForestOfWonders.jpg",
            link: "https://soundcloud.com/karoleus-pl/forest-of-wonders",
            year: "2024"
        },
        {
            title: "Will you forget me?",
            img: "../Assets/img/MusicCovers/WillYouForgetMe.jpg",
            link: "https://soundcloud.com/karoleus-pl/will-you-forget-me",
            year: "2024"
        },
        {
            title: "Behold the Skeleton",
            img: "../Assets/img/MusicCovers/BeholdTheSkeleton.jpg",
            link: "https://soundcloud.com/karoleus-pl/behold-the-skeleton",
            year: "2024"
        },
        {
            title: "I hate you, but it hurts",
            img: "../Assets/img/MusicCovers/IHateYouButItHurts.jpg",
            link: "https://youtu.be/XogQUmuuBQc",
            year: "2024"
        },
        {
            title: "Usseewa Breakcore",
            img: "../Assets/img/MusicCovers/UsseewaBreakcore.jpg",
            link: "https://youtu.be/nXSntwqJCI0",
            year: "2024"
        },
        {
            title: "The Frost Remastered",
            img: "../Assets/img/MusicCovers/TheFrostRemastered.jpg",
            link: "https://youtu.be/qfPm-l5XCcs",
            year: "2024"
        },
        {
            title: "EVA D17",
            img: "../Assets/img/MusicCovers/EvaD17.jpg",
            link: "https://youtu.be/sYHgINItU_8",
            year: "2023"
        },
        {
            title: "Fight Against Myself",
            img: "../Assets/img/MusicCovers/FightAgainstMyself.jpg",
            link: "https://soundcloud.com/karoleus-pl/fight-aganist-myself",
            year: "2023"
        },
        {
            title: "Steampunk Eye",
            img: "../Assets/img/MusicCovers/SteampunkEye.jpg",
            link: "https://soundcloud.com/karoleus-pl/steampunk-eye",
            year: "2023"
        },
        {
            title: "Liver-worthy Piano",
            img: "../Assets/img/MusicCovers/LiverworthyPiano.jpg",
            link: "https://youtu.be/n8bEFL8-jso",
            year: "2023"
        },
        {
            title: "The Emptiness",
            img: "../Assets/img/MusicCovers/TheEmptiness.jpg",
            link: "https://soundcloud.com/karoleus-pl/the-emptiness",
            year: "2023"
        },
        {
            title: "Stressful",
            img: "../Assets/img/MusicCovers/Stressful.jpg",
            link: "https://youtu.be/vh30pB6KJUM",
            year: "2023"
        },
        {
            title: "Visiosubrideophobia ",
            img: "../Assets/img/MusicCovers/Visiosubrideophobia.jpg",
            link: "https://youtu.be/mIEKzQ6IhAM",
            year: "2023"
        },
        {
            title: "Tristophobia",
            img: "../Assets/img/MusicCovers/Tristophobia.jpg",
            link: "https://youtu.be/USIdUTsFQzI",
            year: "2023"
        },
        {
            title: "Athazagoraphilia",
            img: "../Assets/img/MusicCovers/Athazagoraphilia.jpg",
            link: "https://youtu.be/USIdUTsFQzI",
            year: "2023"
        },
        {
            title: "Glitched Sword",
            img: "../Assets/img/MusicCovers/GlitchedSword.jpg",
            link: "https://soundcloud.com/karoleus-pl/glitched-sword",
            year: "2023"
        },
        {
            title: "Final Flower",
            img: "../Assets/img/MusicCovers/FinaleFlower.jpg",
            link: "https://youtu.be/6I3bcNK0S9E",
            year: "2023"
        },
        {
            title: "Shogun of the Crystal",
            img: "../Assets/img/MusicCovers/CrystalShogun.jpg",
            link: "https://soundcloud.com/karoleus-pl/crystal_shogun",
            year: "2023"
        },
        {
            title: "Ommetaphobia",
            img: "../Assets/img/MusicCovers/Ommetaphobia.jpg",
            link: "https://youtu.be/U_mYdy8kNp4",
            year: "2023"
        },
        {
            title: "Alchmophobia",
            img: "../Assets/img/MusicCovers/Alchmophobia.jpg",
            link: "https://youtu.be/kgFzcyd6WTI",
            year: "2023"
        },
        {
            title: "Chronophobia",
            img: "../Assets/img/MusicCovers/Chronophobia.jpg",
            link: "https://youtu.be/tCIKwkS4n1U",
            year: "2023"
        },
        {
            title: "Hyper Glitch",
            img: "../Assets/img/MusicCovers/HyperGlitch.jpg",
            link: "https://youtu.be/kBsm-KbtNkw",
            year: "2023"
        },
        {
            title: "Wątrobolovania",
            img: "../Assets/img/MusicCovers/Watrobolovania.jpg",
            link: "https://youtu.be/kBsm-KbtNkw",
            year: "2022"
        },
        {
            title: "Christmas Trollge",
            img: "../Assets/img/MusicCovers/ChristmasTrollge.jpg",
            link: "https://youtu.be/oxniJHimwik",
            year: "2022"
        },
        {
            title: "Island In The Sky",
            img: "../Assets/img/MusicCovers/IslandInTheSky.jpg",
            link: "https://youtu.be/UHEYHyjstTc",
            year: "2022"
        },
        {
            title: "The Frost",
            img: "../Assets/img/MusicCovers/TheFrost.jpg",
            link: "https://youtu.be/tPPryp6fEno",
            year: "2022"
        },
        {
            title: "Pianolovania",
            img: "../Assets/img/MusicCovers/Pianolovania.jpg",
            link: "https://youtu.be/ocpLxa8M9tA",
            year: "2022"
        },

        {
            title: "On The Inside",
            img: "../Assets/img/MusicCovers/OnTheInside.jpg",
            link: "https://youtu.be/5pzGwn2N6b4",
            year: "Album"
        },
        {
            title: "The Great Doors of Door<br>CH1 Soundtracks",
            img: "../Assets/img/MusicCovers/TGDoDCh1.jpg",
            link: "https://youtu.be/j7NkExb5pyk",
            year: "Album"
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd = `
            <div class="GalleryContainer_inline">
                <a href=${news.link} target="_blank">
                    <div class="GalleryContainer">
                        <img src="${news.img}" Cover Image onerror="this.src='../Assets/img/NoImage.jpg';"" class="Gallery_ArtImg">
                    </div>

                    <br style="font-size: 5px;">

                    <button class="GalleryButton"> ${news.title} </button>
                </a>
            </div>
        `

        switch(news.year) {
            case "2025":
                document.getElementById("MusicContainer_2025").innerHTML += ToAdd
                break
            case "2024":
                document.getElementById("MusicContainer_2024").innerHTML += ToAdd
                break
            case "2023":
                document.getElementById("MusicContainer_2023").innerHTML += ToAdd
                break
            case "2022":
                document.getElementById("MusicContainer_2022").innerHTML += ToAdd
                break
            case "Album":
                document.getElementById("MusicContainer_Album").innerHTML += ToAdd
                break

        }
    });

    console.log("Languages: done")
}

function LoadGallery_Video() {
    const newsItems = [
        {
            title: "Legion's Game - Mind Brand Meme Remastred<br>Trollge Files",
            img: "../Assets/img/VideoCovers/MindBrandMemeRemastered.jpg",
            link: "https://youtu.be/8w3VQYWono8",
            type: "AnimationMeme"
        },
        {
            title: "Trypophobia Meme<br>The Great Doors of Door",
            img: "../Assets/img/VideoCovers/TrypophobiaMemeTGDoD.jpg",
            link: "https://youtu.be/FqJK43aeMjA",
            type: "AnimationMeme"
        },
        {
            title: "Pteromerhanophobia Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/PteromerhanophobiaMeme.jpg",
            link: "https://youtu.be/GUHG8AFQzAE",
            type: "AnimationMeme"
        },
        {
            title: "Dystychiophobia Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/DystychiophobiaMeme.jpg",
            link: "https://youtu.be/qe1rOE1KOtc",
            type: "AnimationMeme"
        },
        {
            title: "Echo Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/EchoMeme.webp",
            link: "https://youtu.be/qe1rOE1KOtc",
            type: "AnimationMeme"
        },
        {
            title: "Wolfyxon's Legion Corruption<br>Remastered",
            img: "../Assets/img/VideoCovers/WolfyxonLegionCorruptionRemastered.webp",
            link: "https://youtu.be/sTgNx9TQCqc",
            type: "AnimationMeme"
        },
        {
            title: "Daisuki Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/DaisukiMeme.webp",
            link: "https://youtu.be/PNm8XHq1uK0",
            type: "AnimationMeme"
        },
        {
            title: "Radio Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/RadioMeme.jpg",
            link: "https://youtu.be/S9bt2q7rzIE",
            type: "AnimationMeme"
        },
        {
            title: "Trypophobia Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/TrypophobiaMemeTrollgeFiles.jpg",
            link: "https://youtu.be/UfrJJBe57W4",
            type: "AnimationMeme"
        },
        {
            title: "Legion's Game - Mind Brand Meme<br>Trollge Files",
            img: "../Assets/img/VideoCovers/MindBrandMeme.webp",
            link: "https://youtu.be/kkSkiig_V_U",
            type: "AnimationMeme"
        },
        {
            title: "Dynasties & Dystopia<br>ARCANE S2 EDIT",
            img: "../Assets/img/VideoCovers/DynastiesAndDystopiaEdit.webp",
            link: "https://youtu.be/cMtIYSRak4c",
            type: "Edit"
        },
        {
            title: "HAYLOFT<br>ARCANE S1 EDIT",
            img: "../Assets/img/VideoCovers/HayloftEdit.jpg",
            link: "https://youtu.be/uN-EhSilTLY",
            type: "Edit"
        },
        {
            title: "Sympathy<br>Komi Can't Communicate EDIT",
            img: "../Assets/img/VideoCovers/SympathyEdit.jpg",
            link: "https://youtu.be/BLzmV4HCn3Q",
            type: "Edit"
        },
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd = `
            <div class="GalleryContainer_inline">
                <a href=${news.link} target="_blank">
                    <div class="GalleryContainer">
                        <img src="${news.img}" Cover Image onerror="this.src='../Assets/img/NoImage.jpg';" class="Gallery_VideoImg">
                    </div>

                    <br style="font-size: 5px;">

                    <button class="GalleryButton"> ${news.title} </button>
                </a>
            </div>
        `

        switch(news.type) {
            case "AnimationMeme":
                document.getElementById("VideoContainer_AnimationMemes").innerHTML += ToAdd
                break
            case "Edit":
                document.getElementById("VideoContainer_Edits").innerHTML += ToAdd
                break
        }

    });

    console.log("Videos: done")
}