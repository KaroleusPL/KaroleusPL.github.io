function Quote(title, quote_text, source_title, source_link){
    return `
    
    <q> ${title} </q>
        <blockquote>
            ${quote_text}
        </blockquote>
    <small class="source"> Source: <a href="${source_link}" target="blank_"> ${source_title} </small>

    `
}