function replaceWord(word, sentence) {
    
    let splitSentence = sentence.split(' ');
    let splitWord = word.split(', ');
    

    for (let elW of splitWord){
        for (let elS of splitSentence) {
            if (elS.includes("*") &&  elS.length === elW.length){
                sentence = sentence.replace(elS, elW)
            }
        }
    }   
    console.log(sentence )
}

// replaceWord('great',
// 'softuni is ***** place for learning new programming languages')

replaceWord('great, learning',
'softuni is ***** place for ******** new programming languages')