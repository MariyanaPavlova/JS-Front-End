function inventory(input) {

    let dict = []

    for (let i of input) {
        
        //lset[name, level, items] = i.split(" / ")
        let splited = i.split(" / ")
        let name = splited[0]
        let level = Number(splited[1])
        let items = splited[2]
        
        let currDict = {
            name: name,
            level: level,
            items: items,
        }
        dict.push(currDict)
    }   
    let sortedDict = dict.sort((a,b) => {
        return a.level - b.level;
    })

    for (let i of sortedDict) {
        console.log(`Hero: ${i.name}`)
        console.log(`level => ${i.level}`)
        console.log(`items => ${i.items}`)
    }

}

inventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])