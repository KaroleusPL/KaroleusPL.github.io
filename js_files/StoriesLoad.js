const Pages_CC = {
        "UnfinishedStar" : {   
            name: "K.",
            title: "Unfinished  Star",
            img: "../Assets/img/Art/SignOfAnEye.jpg",
            imgtitle: "K.",
            alt: "Mr.Wątroba looking from the hole in a door in flames.",

            race: "Starborn",
            subrace: "Neuron star / Blackhole",
            age: "Unknown",
            abilitytype: "Starborn, Runes",

        },
    };

let currentpage = "UnfinishedStar"
let currenttype = "CC"

function ReloadStoryPage() {
    const ProjectsList = document.getElementById("StoriesInfoContainer");
    if (!ProjectsList) {
        console.log("News: No container") 
        print("No container")
        return;};

    
    let news = Pages_CC[currentpage]

    let ToAdd = ""
    
    if (currenttype == "CC") {
        ToAdd += `
            <div class="StoriesContainer Center">
                <div class="StoriesContainer_left Center">
                    <div class="StoriesContainer_container">
                        <h1>${news.title}</h1>
                    </div>
                    <div class="StoriesContainer_container">
                        <h2 style="text-align: left; margin-left: 5%">Story</h2>

                        <p style="text-align: left; margin-left: 10%">
                            ${news.story}
                        </p>

                        <h2 style="text-align: left; margin-left: 5%">Appearance</h2>

                        <p style="text-align: left; margin-left: 10%">
                            ${news.appearance}
                        </p>

                        <h2 style="text-align: left; margin-left: 5%">Abilities</h2>

                        <p style="text-align: left; margin-left: 10%">
                            ${news.abilities}
                        </p>
                    </div>
                </div>
                    
                <div class="StoriesContainer_right">
                    <div class="StoriesContainer_container">
                        <h2>${news.imgtitle}</h2>
                    </div>
                    <img src="${news.img}" alt="${news.alt}" class="ProjectsImage">
                    <div class="StoriesContainer_container">
                        <p style="font-size:larger; text-align: left; margin-left: 5%">
                            Name - ${news.name} <br>
                            Age - ${news.age}   <br><br>                        

                            Race - ${news.race} <br>
                            Sub race - ${news.subrace} <br>

                            Ability type - ${news.abilitytype}   <br>
                        </p>
                    </div>
                </div>
        `
    }


    ProjectsList.innerHTML = ToAdd

    console.log("StoriesPageDone: done")
}


function  StoriesLoad() {
    ReloadStoryPage()
}
