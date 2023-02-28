function stringSubst(word, text) {
    
    let words = ""
    let textArr = text.split(" ")

    for (let wordF of textArr) {
        if (wordF.toLowerCase() ===word) {
            words = wordF.toLowerCase()
            console.log(words)
            break
        }   
    }
    if (!words) {
        console.log(`${word} not found!`)
    }

}
stringSubst('javascript',
'JavaScript is the best programming language')
stringSubst('python',
'JavaScript is the best programming language')