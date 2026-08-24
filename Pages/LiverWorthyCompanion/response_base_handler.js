function GetRespond(responds){
    let res = responds[Math.floor(Math.random() * responds.length)];
    
    return typeof res === "function" ? res() : res; // if function then run it but if its text then just return it
}

function GetCompatibility(words_array, key_words){
    let score = 0

    for (let i=0; i<words_array.length; i++){
        let word = words_array[i]

        for (let j=0; j<key_words.length; j++){
            let key_word = key_words[j]

            // console.log("is ", word, " == ", key_word)

            if (word == key_word) {
                //console.log("Yes")
                if (IsLessValueWord(word)){
                    score += 0.25
                }
                else{
                    score += 1
                }
            }
            else{
                //console.log("No")
            }
        }

    }

    // console.log("score:", score, "words:", words_array.length, "keys:", key_words.length)
    // console.log("input words:", words_array)
    // console.log("key_words:", key_words)

    let score_words = score / words_array.length 
    let score_keys = score / key_words.length  

    return ((score_words + score_keys) / 2) * 100
}

function GetResponse(entered_sentence){
    let words = entered_sentence.toLowerCase().replace(/[^a-ząćęłńóśźżA-ZĄĆĘŁŃÓŚŹŻ0-9\s-]/g, "").split(/\s+/)
    let to_return = "Sorry, I didn't find respond for words you gave to me :c"

    console.log("words: ", words)

    let the_keys = Object.keys(RespondBase)
    //console.log("the_keys: ", the_keys)

    let most_compatibility_key = -1
    let most_compatibility_level = 0

    for (let i=0; i<the_keys.length; i++){
        let key = the_keys[i]
        //console.log("key: ", key)
        //console.log("key_words: ", RespondBase[key]["key_words"])

        let cur_comp = GetCompatibility(words, RespondBase[key]["key_words"])
        //console.log("cur_key: ", key)
        //console.log("cur_comp: ", cur_comp)
        if (cur_comp >= 10 && cur_comp > most_compatibility_level){
            most_compatibility_key = key
            most_compatibility_level = cur_comp
        }
    }

    if (most_compatibility_key != -1){
        to_return = `
            ${GetRespond(RespondBase[most_compatibility_key]["responds"])}
        `

        let execute_function = RespondBase[most_compatibility_key]["Function"]
        if (execute_function){
            setTimeout(function(){
                execute_function["function"]()
            }, execute_function["timeout"])
        }
    }

    
    return [to_return, parseInt(most_compatibility_level)]
}