// Change "Addon" to name of your addon
let C_RespondBase = {
    // add addon name before every

    "c_help" : {
        "key_words" : ["help-c", "help", "c",],
        "responds" : [
            `
            <h3> Help - C </h3>
            c format specifiers,<br>
            c calculator,<br>
            <br> [I'll add more later] <br>
            `
        ],
    },

    "c_desc" : {
        "key_words" : ["c", "desc"],
        "responds" : [
            `${Quote("C", 
                `C is a general-purpose programming language created in 1972 by Dennis Ritchie.<br>
                By design, C gives programmers relatively direct access to the features of typical CPU architectures,<br>
                customized for the target instruction set. 
                It has been and continues to be used to implement operating systems (especially kernels),<br>
                device drivers, and protocol stacks, though its use in application software is decreasing.<br>
                C is used on computers ranging from supercomputers to microcontrollers and embedded systems.`,
                "Wikipedia", 
                "https://en.wikipedia.org/wiki/C_(programming_language)")}
            `
        ],

    },

    "c_calculator" : {
        "key_words" : ["calculator", "c", "calc"],
        "responds" : [
            `This is really complicated calculator tbh.
            <pre><code class="language-c">
            #include <stdio.h>

            int main()
            {
                void Calculator(){
                    int a,b,sign;
                    
                    printf(" CALCULATOR");
                    
                    printf(" Enter a: ");
                    scanf("%d", &a);
                    
                    printf(" Enter b: ");
                    scanf("%d", &b);
                    
                    printf(" Enter sign(1.+ 2.- 3.* 4./): ");
                    scanf("%d", &sign);
                    
                    if (sign == 1){
                        printf(" %d + %d = %d ", a, b, a+b);
                    }
                    else if (sign == 2){
                        printf(" %d - %d = %d ", a, b, a-b);
                    }
                    else if (sign == 3){
                        printf(" %d * %d = %d ", a, b, a*b);
                    }
                    else if (sign == 4){
                        printf(" %d / %d = %d ", a, b, a/b);
                    }
                    else{
                        printf(" invalid sign ");
                    }
                    
                    char again;
                    
                    printf("Again y/n? ");
                    scanf(" %c", &again);
                    
                    if (again=='y'){
                        Calculator();   
                    }
                }
                
                Calculator();
            }
            </code></pre><br>

            If you want to know some more then enter <b> c *what you need to know* </b>, <small> example: <b> c calculator </b> </small>
            `
        ],
    },

    "c_format_specifier" : {
        "key_words" : ["c", "format", "specifier", "specifiers"],
        "responds" : [
            `This is really complicated calculator tbh.
            <pre><code class="language-c">
            %d - int - printf("%d", 5); → 5
            %f - float - 'printf("%f", 7.17);' → '7.170000'
            %s - string (char) - 'printf("%s", "liver");' → 'liver'
            %c - singiel char - 'printf("%c", 'A');' → 'A'
            %p - pointer - 'printf("%p", ptr);' → '0x7ffee...'
            %x - int in base16 - 'printf("%x", 255);' → 'ff'
            </code></pre><br>

            If you want to know some more then enter <b> c *what you need to know* </b>, <small> example: <b> c format specifier </b> </small>
            `
        ],
    },
}

LoadAddon(C_RespondBase, "C")

