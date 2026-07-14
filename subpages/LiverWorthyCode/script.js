const password_input = document.getElementById("password_input")
const text_input = document.getElementById("text_input")
const result_label = document.getElementById("result_label")

const text_indexes = {
    "A" : 1,
    "a" : 2,
    "B" : 3,
    "b" : 4,
    "C" : 5,
    "c" : 6,
    "D" : 7,
    "d" : 8,
    "E" : 9,
    "e" : 10,
    "F" : 11,
    "f" : 12,
    "G" : 13,
    "g" : 14,
    "H" : 15,
    "h" : 16,
    "I" : 17,
    "i" : 18,
    "J" : 19,
    "j" : 20,
    "K" : 21,
    "k" : 22,
    "L" : 23,
    "l" : 24,
    "M" : 25,
    "m" : 26,
    "N" : 27,
    "n" : 28,
    "O" : 29,
    "o" : 30,
    "P" : 31,
    "p" : 32,
    "R" : 33,
    "r" : 34,
    "S" : 35,
    "s" : 36,
    "T" : 37,
    "t" : 38,
    "U" : 39,
    "u" : 40,
    "V" : 41,
    "v" : 42,
    "W" : 43,
    "w" : 44,
    "X" : 45,
    "x" : 46,
    "Y" : 47,
    "y" : 48,
    "Z" : 49,
    "z" : 50,
    "0" : 51,
    "1" : 52,
    "2" : 53,
    "3" : 54,
    "4" : 55,
    "5" : 56,
    "6" : 57,
    "7" : 58,
    "8" : 59,
    "9" : 60,
    "." : 61,
    "," : 62,
    "!" : 63,
    "?" : 64,
    "@" : 65,
    "#" : 66,
    "$" : 67,
    "%" : 68,
    ">" : 69,
    "<" : 70,
    "/" : 71,
    '"' : 72,
    "'" : 73,
    ";" : 74,
    ":" : 75,
    "(" : 76,
    ")" : 77,
    "|" : 78,
    "+" : 79,
    "=" : 80,
    "-" : 81,
    "_" : 82,
    "]" : 83,
    "[" : 84,
    "}" : 85,
    "{" : 86,
    "*" : 87,
    "^" : 88,
    "~" : 89,
    "`" : 90,
    " " : 91,
}

function Get_Index(char){
    let keys = Object.keys(text_indexes)
    // console.log("keys: ", keys)

    for (let i=0; i<keys.length; i++) {
        if (keys[i] == char){
            return text_indexes[keys[i]]
        }
    }

    return false //wrong SYNTAX
}

function Get_Char(index){
    // console.log("Get_Char, getting index: ", index)

    const keys = Object.keys(text_indexes)

    for (let i=0; i<keys.length; i++){
        // console.log("i: ", i)
        // console.log("keys: ", keys[i], " - ", text_indexes[keys[i]])
        // console.log("index: ", index)

        if (text_indexes[keys[i]] == index){
            // console.log("Get_Char, FOUND! ", text_indexes[i])
            return keys[i]
        }
    }

    // console.log("Get_Char, index not found: ", index)
    return false
}

function Get_Password_Letter(text_index){
    const password = password_input.value

    let password_index = text_index % password.length

    //console.log("password_index: ", password_index)

    return password[password_index]
}

function Get_Offset_Letter(text_letter, offset){
    const text_letter_index = Get_Index(text_letter)
    const keys = Object.keys(text_indexes)

    console.log("text_letter: ", text_letter)
    console.log("text_letter_index: ", text_letter_index)

    if (text_letter_index === false){ //Syntax check
        return false
    }
    console.log("offset count: ", text_letter_index, " + ", offset)

    let offset_index = text_letter_index + offset
    //console.log("offset_index: ", offset_index)

    let offset_fix = offset_index
    if (offset_index <= 0){
        console.log("Under 0!!!")
        offset_fix = keys.length - Math.abs(offset_index)
    }
    else if (offset_index > keys.length){
        console.log("Above keys length!!!")
        offset_fix = Math.abs(offset_index) - keys.length
    }

    //console.log("offset_fix: ", offset_fix)

    return Get_Char(offset_fix)
}


// =====

function make_result(new_text, is_decrypt){

    let full_copy_text
    if (is_decrypt){
        full_copy_text = new_text
    }
    else{
        full_copy_text = `---LiverWorthyCode Begin---${new_text}---LiverWorthyCode End---`
    }

    result_label.innerHTML = `press to copy: 
    <button id='result_button' onclick='navigator.clipboard.writeText(this.textContent)'>${full_copy_text}</button>`
}

function Encrypt(){

    let new_text = ""

    const password = password_input.value
    let text = text_input.value.replace("---LiverWorthyCode Begin---", "").replace("---LiverWorthyCode End---", "")

    console.log("text length: ", text, text.length)

    for (let text_index = 0; text_index<text.length; text_index++){
        //console.log(" --- text_index: ", text_index)

        let text_letter = text[text_index]
        //console.log("text_letter: ", text_letter)

        let password_letter = Get_Password_Letter(text_index)
        //console.log("password_letter: ", password_letter)

        let offset = Get_Index(password_letter)
        if (offset === false){ //Syntax check
            console.log("1. INVALID SYNTAX! ", password_letter)
            return
        }
        if (text_index % 2 != 0) {
            offset *= -1
        }
        //console.log("offset: ", offset)

        let new_letter = Get_Offset_Letter(text_letter, offset)
        if (new_letter === false){ //Syntax check
            console.log("3. INVALID SYNTAX! ", text_letter, ", ", new_letter)
            return
        }

        //console.log("new_letter: ", new_letter)

        new_text += new_letter
    }

    make_result(new_text, false)
}


function Decrypt(){

    let new_text = ""

    const password = password_input.value
    let text = text_input.value.replace("---LiverWorthyCode Begin---", "").replace("---LiverWorthyCode End---", "")

    console.log("text length: ", text, text.length)

    for (let text_index = 0; text_index<text.length; text_index++){
        //console.log(" --- text_index: ", text_index)

        let text_letter = text[text_index]
        //console.log("text_letter: ", text_letter)

        let password_letter = Get_Password_Letter(text_index)
        //console.log("password_letter: ", password_letter)

        let offset = Get_Index(password_letter)
        if (offset === false){ //Syntax check
            console.log("1. INVALID SYNTAX! ", password_letter)
            return
        }
        if (text_index % 2 == 0) {
            offset *= -1
        }
        //console.log("offset: ", offset)

        let new_letter = Get_Offset_Letter(text_letter, offset)
        if (new_letter === false){ //Syntax check
            console.log("3. INVALID SYNTAX! ", text_letter)
            return
        }

        //console.log("new_letter: ", new_letter)

        new_text += new_letter
    }

    make_result(new_text, true)
}