// Change "Addon" to name of your addon
let JavaScript_RespondBase = {
    // add addon name before every

    "javascript_help" : {
        "key_words" : ["help-js", "help-javascript","js", "javascript", "java", "script", "help", "h",],
        "responds" : [
            `
            javascript variables,<br>
            javascript array,<br>
            <br> [I'll add more later] <br>
            `
        ],
    },

    "javascript_desc" : {
        "key_words" : ["js", "javascript", "java", "script"],
        "responds" : [
            `${Quote("Java Script", 
                `JavaScript (JS) is a programming language and core technology of the Web,
                alongside HTML and CSS. Created by Brendan Eich in 1995,
                it is maintained by Ecma International's TC39 technical committee, 
                with related Web APIs maintained by W3C and WHATWG.
                As of 2025, JavaScript is the most widely used programming language on GitHub.`,
                "Wikipedia", 
                "https://en.wikipedia.org/wiki/JavaScript")}
            `
        ],

    },

    "javascript_variables" : {
        "key_words" : ["how", "does", "work", "works", "java", "script", "javascript", "values", "value", "variable", "variables"],
        "responds" : [
            `How does JavaScript variables work? <br> Let me break it down for you.
            <pre><code class="language-javascript">
            let string_value = "some text" // text value
            let int_value = 2 // number value without decimal
            let number_value = 2.5 // number value with decimal
            let bool_value = true // true|false value
            let array_value = [1,2,3] // value that contains other values, this one has three int values, 1,2,3
            let object_value = {  //object is a dictionary that uses keys to get them.
                0 : "a",  
                "key_name" : 0,  
                "key2_name" : [1,2,3]  
                "key3_name" : { 
                    0:"some_text"
                }
            }
            </code></pre><br>

            If you want to know some more then enter <b> javascript *what you need to know* </b>, <small> example: <b> javascript array </b> </small>
            `
        ],
    },

    "javascript_array" : {
        "key_words" : ["how", "does", "work", "works", "java", "script", "javascript", "array", "arrays"],
        "responds" : [
            `How does JavaScript arrays work? <br>  Let me break it down for you. <br> 
            
            This is how array is made:
            <pre><code class="language-javascript">
                let array = []
            </code></pre><br>
            <br>

            To get something from array you need to enter wanted index inside []:
            <pre><code class="language-javascript">
                let array = [0,1,2] //can be any number or value
                let a = array[2]
            </code></pre><br>
            a will be equal to 2, remeber that JavaScript counts index from 0. <br> 

            <pre><code class="language-javascript">
                let array = ["car",1,[0,2]] //can be any number or value
                let a = array[0]
                let b = array[1]
                let c = array[2]
            </code></pre><br>
            a will be equal to "car", <br> 
            b will be equal to 1, <br> 
            c will be equal to [0,2], <br>    


            `
        ],
    },
}

LoadAddon(JavaScript_RespondBase, "JavaScript")

