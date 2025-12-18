const containers_programing_languages = document.getElementById("containers_programing_languages")
const containers_tools = document.getElementById("containers_tools")
const containers_socials = document.getElementById("containers_socials")

function LoadHomePage(){
    NewProgramingLanguage("Python", "PythonLogo.png", "Very_Good")
    NewProgramingLanguage("Luau", "LuauLogo.png", "Very_Good")
    NewProgramingLanguage("GDScript", "GodotLogo.png", "Very_Good")
    NewProgramingLanguage("HTML5", "HtmlLogo.png", "Pretty_Good")
    NewProgramingLanguage("JavaScript", "JsLogo.png", "Pretty_Good")
    NewProgramingLanguage("CSS3", "CssLogo.svg", "Pretty_Good")
    NewProgramingLanguage("C++", "Cpp.png", "Good")
    NewProgramingLanguage("C#", "Csharp.png", "Learning")
    NewProgramingLanguage("MySQL", "MySQL.png", "Learning")

    NewTools("Godot", "GodotLogo.png", "Programming")
    NewTools("Roblox", "rbxstudio.png", "Programming")
    NewTools("VS Code", "vscode.png", "Programming")
    NewTools("Git", "git.png", "Programming")
    NewTools("Krita", "Krita.png", "Art")
    NewTools("Ibis Paint X", "IbisPaintX.png", "Art")
    NewTools("FL Studio Mobile", "FLmobile.png", "Music")
    NewTools("Da Vinchi Resolve", "DaVinciResolve.png", "Video")

    MakeSocial("Youtube", "YoutubeLogo.png", "https://www.youtube.com/@KaroleusPL")
    MakeSocial("Twitter", "TwitterLogo.avif", "https://x.com/karoleuspl")
    MakeSocial("Spotify", "SpotifyLogo.png", "https://open.spotify.com/track/44vdGqb1mdE5FYVXXl3P6X?si=ab3aa71ec5df467f")
    MakeSocial("Soundcloud", "SoundCloudLogo.jpg", "https://soundcloud.com/karoleus-pl")
    MakeSocial("Deviantart", "DeviantArtLogo.png", "https://www.deviantart.com/karoleusyt")
    MakeSocial("Newgrounds", "NGLogo.gif", "https://karoleuspl.newgrounds.com/")
}

function NewProgramingLanguage(name, image_path, level){
    MakeNewExperience(containers_programing_languages, name, image_path, level)
}

function NewTools(name, image_path, level){
    MakeNewExperience(containers_tools, name, image_path, level)
}

function MakeNewExperience(place,name, image_path, level){

    place.innerHTML += `
        <div id="container_experience">
            <p><b>${name}</b></p>
            <img src="images/icons/${image_path}">
            <p style="color: var(--ex_${level});">${level.replace(/_/g, " ")}</p>
        </div>
    `
}

function MakeSocial(name, image_path, link){

    containers_socials.innerHTML += `
        <div id="container_socials">
            <a href="${link}" target="_blank">
                <p><b>${name}</b></p>
                <img src="images/icons/${image_path}">
            </a>
        </div>
    `
}