// Change "Addon" to name of your addon
let Video_RespondBase = {
    // add addon name before every

    "video_stop_videos" : {
        "key_words" : ["stop", "videos", "stop-video"],
        "responds" : [
            "Paused all videos in the chat"
        ],

        "Function" : {"timeout":0, "function": () => document.querySelectorAll('video').forEach(vid => vid.pause())}
    },

    "video_bad_apple" : {
        "key_words" : ["bad", "apple", "badapple"],
        "responds" : [
            `
            <video autoplay>
                <source src="Assets/bad_apple.mp4">
                No bad apple for you. Your browser does not support HTML video.
            </video>
            `
        ],
    },
}

LoadAddon(Video_RespondBase, "Video")

