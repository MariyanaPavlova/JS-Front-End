function wordTrack(words) {

    
    let dict = {}
    let first = words[0]
    for (let i of first.split(" ")){
        dict[i] = 0
    }

    for (let i of words){
        if (dict.hasOwnProperty(i))
        dict[i] +=1
    
    }
    let sortV = Object.entries(dict).sort((a, b) => {
        return b[1] - a[1]})

    for (let key in sortV) {
        console.log(`${sortV[key][0]} - ${sortV[key][1]}`)
    }
    
}

wordTrack([
    'this sentence one', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
wordTrack([
    'is', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])