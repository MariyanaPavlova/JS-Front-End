function hastTag(text) {
    
    let textArr = text.split(" ")

    for (let word of textArr) {
        if (word.startsWith('#') && word.length > 1) {
        
        let textToLower = word.toLowerCase();
        let flag = true

        for (let i=1; i< textToLower.length; i++) {
            if (textToLower.charCodeAt(i) < 97 || textToLower.charCodeAt(i) > 122) {
                flag = false
                break
            } 
        }
        if (flag) {
            console.log(word.slice(1))
        }
        }
    }

}
hastTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
hastTag('')