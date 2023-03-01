function charInRange(a, b) {

    let minn = Math.min(a.charCodeAt(0), b.charCodeAt(0))
    let maxx = Math.max(a.charCodeAt(0), b.charCodeAt(0))
    let finalStr = []

    for (let i = minn+1; i < maxx; i++) {
        res = String.fromCharCode(i)
        finalStr.push(res)
    }

    console.log(finalStr.join(' '))

}

charInRange("a", "d")
charInRange("#", ":")
charInRange("C", "#")