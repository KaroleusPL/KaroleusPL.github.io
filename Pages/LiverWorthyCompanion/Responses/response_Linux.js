// Change "Addon" to name of your addon
let Linux_RespondBase = {
    // add addon name before every

    "linux_help" : {
        "key_words" : ["help-linux", "help", "linux",],
        "responds" : [
            `
            <h3> Help - Linux </h3>

            <h2> commands </h2>

            ===images related===<br>
            linux mogrify - editing images<br>
            linux video compression,<br>
            <br> [I'll add more later] <br>
            `
        ],
    },

    "linux_compress_video" : {
        "key_words" : ["linux", "video", "compress", "compression"],
        "responds" : [
            `Easiest way to compress video. <br>
            <code>
            ffmpeg -i input.mp4 -vcodec libx264 -crf 28 output.mp4
            </code>
            <br>
            `
        ],
    },

    "linux_mogrify" : {
        "key_words" : ["linux", "mogrify"],
        "responds" : [
            `Convert all .png's in the folder into 100x100, with no background and centerise. <br>
            <code>
            mogrify -resize 100x100 -gravity center -background none -extent 100x100 *.png
            </code>
            <br><br>

            Convert all .png's to .jpg (with white background). <br>
            <code>
            mogrify -background white -flatten -format jpg *.png
            </code>
            <br><br>

            Compress name.png image. <br>
            <code>
            mogrify -strip -quality 85 name.png
            </code>
            <br>
            `
        ],
    },

}

LoadAddon(Linux_RespondBase, "Linux")

