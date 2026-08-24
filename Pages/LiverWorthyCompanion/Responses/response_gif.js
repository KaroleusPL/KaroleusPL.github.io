// Change "Addon" to name of your addon
let Gif_RespondBase = {
    // add addon name before every

    "gif_help" : {
        "key_words" : ["help-gif", "help-gifs",],
        "responds" : [
            `
            <b>gif [name]</b> or <b>[name] gif</b> <br><br>

            gifs: <br>
            amogus, <br>
            rock, <br>
            `
        ],
    },

    "gif_amogus" : {
        "key_words" : ["amogus","gif"],
        "responds" : [
            `<img class="gif" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHg1Y3Bvb2IwY3R6bGhmaG5nOWdvMHo5YXU1dzBoMDRqc3B0cG9vciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/v01vVloDJbXrZRvEI8/giphy.gif" alt="amogus gif">`
        ],
    },
    "gif_rock" : {
        "key_words" : ["rock","gif"],
        "responds" : [
            `<img class="gif" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExb25xZzRxcDdzbndmaTNxdTVzanU0enk3NTU2MDZ3ZzZpNmd1ZmR1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ACZqfCpSGhG8h6HRV6/giphy.gif" alt="amogus gif">`
        ],
    },
}

LoadAddon(Gif_RespondBase, "gif")

