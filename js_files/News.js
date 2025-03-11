
function LoadNews() {
    const newsContainer = document.getElementById("NewsContainer");
    if (!newsContainer) {
        console.log("News: No container") 
        print("No container")
        return;};

    const newsItems = [
        {
            title: "Sub Pages Update",
            img: "Assets/img/MusicCovers/BeholdTheSkeleton.jpg",
            info: `
                Finished gallery(only need to finish videos).<br>
                Added arrow that scrolls back to the top.<br>
                Changed buttons in subpages.<br>
                Working on phone fix.
            `,
            date: "11.03.2025",
        },
        {
            title: "Full page Update",
            img: "Assets/img/Logos/KaroleusLogo.webp",
            info: `
            Indeed rewrited the whole page.<br>
            Merged art, music and films page into one(only arts done for now).<br>
            Several things are now on main page instead of subpages.<br>
            Added <a href="#Console_anchor">Console</a><br><br>
            Working on phone fix.<br>

            <h3>Page is still in progress</h3>
            `,
            date: "09.03.2025",
        },

        {
            title: "Unfinished Star",
            img: "Assets/img/Art/SignOfAnEye.jpg",
            info: "Rework of main OC. Within rework of everything.",
            date: "24.11.2024",
        },
        {
            title: "Old changes 4",
            img: "Assets/img/Art/ALLSTARS_ACT3.jpg",
            info: "New appearance for News, animations and some new arts.",
            date: "11.10.2024",
        },
        {
            title: "Old changes 3",
            img: "Assets/img/Art//UMario.jpg",
            info: "Added Films & Animations page.",
            date: "11.10.2024",
        },
        {
            title: "Old changes 2",
            img: "Assets/img/Logos/KaroleusLogo.webp",
            info: "About me page finished.",
            date: "10.09.2024",
        },
        {
            title: "Old changes 1",
            img: "Assets/img/Art/UziMurderDrone.jpeg",
            info: "News, Music page, added Newgrounds link.",
            date: "08.09.2024",
        },
        
    ];

    let ToAdd = ""
    newsItems.forEach(news => {
        ToAdd += `<br>
            <div class="NewsPage Center">
                <h2 style="text-align: center;"> ${news.title} </h2>
                <div style="margin: 0;">
                    <img src="${news.img}" alt="${news.img}" style="width: 90%; background-color: rgb(51, 25, 51); border: 2px rgb(170, 0, 167) solid;">
                </div>
                <p style="text-align: center;">${news.info}</p>
                <h4 style="text-align: center;"> ${news.date} </h4>
            </div>
        `
    });

    newsContainer.innerHTML = ToAdd

    console.log("News: done")
}