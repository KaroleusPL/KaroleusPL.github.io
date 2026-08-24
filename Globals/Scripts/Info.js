console.log("Loading info")

const PageVersion = "4.0"
const LastUpdated = "24.08.2026"

document.body.insertAdjacentHTML('afterend', `
    <footer>
        <div class="page_info">
            Made by KaroleusPL. <br>
            Version ${PageVersion}, Last updated at ${LastUpdated} <br>
            This website is licensed under CC BY-NC-ND.
        </div>

        <div class="contact">
            <h3> Contact </h3>
            karoleuspl.mail@gmail.com <br>
            karoleus.pl on discord
        <div>
    </footer>
`)


console.log("Info loaded")