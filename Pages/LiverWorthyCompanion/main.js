let MessagesContainer = document.getElementById("MessagesContainer")
let EnteredText = document.getElementById("EnteredText")

function pick_random(from_array){
    return from_array[Math.floor(Math.random() * from_array.length)];
}

function SendMsg(){
    NewMsgBlock("You", EnteredText.value, 100)

    setTimeout(function(){
        let response = GetResponse(EnteredText.value)
        NewMsgBlock("Program", response[0], response[1])
        EnteredText.value = ""
    }, 200)
}

function NewMsgBlock(who, text, compatibility){
    let new_text = ""

    new_text += `
            <div class="MessageBox">
            <h2>${who}</h2>
        `

    if (who == "You") {
        new_text += `
            <div class="MessageFrame MessageFrame_You">
        `
    }
    else{
        if (compatibility >= 90){
            new_text += `
                <small class="compability_5">
            `
        }
        else if (compatibility >= 60){
            new_text += `
                <small class="compability_4">
            `
        }
        else if (compatibility >= 40){
            new_text += `
                <small class="compability_3">
            `
        }
        else if (compatibility >= 11){
            new_text += `
                <small class="compability_2">
            `
        }
        else{
            new_text += `
                <small class="compability_1"> [Too Low]
            `
        }

        new_text += `
            <div class="MessageFrame MessageFrame_Program">
            `

        new_text += `
            Compatibility: ${compatibility}% </small>
            `

        SetEmotion("a")
    }

    new_text += `
            <p>${text}</p>
            </div>
        </div>
        <br>
    `


    MessagesContainer.insertAdjacentHTML("beforeend", new_text);
    MessagesContainer.querySelectorAll('code:not(.hljs)').forEach(el => { // Highlighting the  code if there is
        hljs.highlightElement(el);
    });
    MessagesContainer.scrollTop = MessagesContainer.scrollHeight;
}

function ReloadPage(){
    location.reload()
}

function ClosePage(){
    window.close()
}

const emotions = {
    "happy" : [
        "../../Assets/Images/LiverWorthyCompanion/Happy_1.png",
        "../../Assets/Images/LiverWorthyCompanion/Happy_2.png",
        "../../Assets/Images/LiverWorthyCompanion/Happy_3.png",
    ]
}

const face = document.getElementById("face")

function SetEmotion(emotion){
    if (emotion == "angry"){

    }
    else{
        face.src = pick_random(emotions["happy"])
    }

    MakeZeroOnes()
}

const zero_one_label = document.getElementById("zero_one_label")

function MakeZeroOnes(){

    zero_one_label.innerHTML = ""

    for (let i=0; i<3000; i++){
        zero_one_label.innerHTML += pick_random(["0", "1"])
    }
}

NewMsgBlock("Program", "Hello! I'm liver-worthy companion! <small><small> It barely contains anything for now </small></small>", 100)

EnteredText.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    console.log("Enter pressed")
    event.preventDefault()
    document.getElementById("SendButton").click();
  }
}); 
