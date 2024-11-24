function populateNews() {
    const newsContainer = document.getElementById("NewsContainer");
    if (!newsContainer) return;

    const newsItems = [
        {
            date: "24.11.2024",
            content: `
                <p> New appearance of everything!</p>

                <h2>New Arts!</h2>
                <a href="ArtGallery/index.html">
                    <img class="NewsImagePage" alt="Sign of an Eye" src="Images/Art/SignOfAnEye.jpg">
                </a>
            `
        },
        {
            date: "11.10.2024",
            content: `
                <p>New look for "news pages".</p>
                <p>ANIMATIONNNNSSSS!!!!!</p>
                <h2>New Arts!</h2>
                <a href="ArtGallery/index.html">
                    <img class="NewsImagePage" alt="ALL STARS // ACT 3" src="Images/Art/ALLSTARS_ACT3.jpg">
                    <img class="NewsImagePage" alt="Uncle Samsonite" src="Images/Art/UncleSamsoniteArt.jpg">
                </a>
                <h2>New Music!</h2>
                <a href="Music/index.html">DRIP WĄTROBA</a>
            `
        },
        {
            date: "19.09.2024",
            content: `
                <h2>New Art!</h2>
                <a href="ArtGallery/index.html">
                    <img class="NewsImagePage" alt="MX" src="Images/Art/MX.jpg">
                </a>
            `
        },
        {
            date: "12.09.2024",
            content: `
                <h2>New Art!</h2>
                <a href="ArtGallery/index.html">
                    <img class="NewsImagePage" alt="Ultra Mario" src="Images/Art/UMario.jpg">
                </a>
                <h2>Added:</h2>
                <ul>
                    <li>Films & Animations page added</li>
                </ul>
            `
        },
        {
            date: "10.09.2024",
            content: `
                <h2>Added:</h2>
                <ul>
                    <li>About Me Page</li>
                </ul>
            `
        },
        {
            date: "08.09.2024",
            content: `
                <h2>New Art!</h2>
                <a href="ArtGallery/index.html">
                    <img class="NewsImagePage" alt="Uzi Murder Drone drawing" src="Images/Art/UziMurderDrone.jpeg">
                </a>
                <h2>Added:</h2>
                <ul>
                    <li>New Grounds link in art gallery</li>
                    <li>News</li>
                    <li>Music Page</li>
                </ul>
            `
        }
    ];

    newsItems.forEach(news => {
        const newsDiv = document.createElement("div");
        newsDiv.classList.add("NewsPage");

        const dateHeader = document.createElement("h1");
        dateHeader.textContent = news.date;
        newsDiv.appendChild(dateHeader);

        newsDiv.innerHTML += news.content;
        newsContainer.appendChild(newsDiv);
    });
}
