function towns(input) {
    let town = {}
    
    for (let i of input) {
        let spliti = i.split(" | ")

        town.town = spliti[0]
        town.latitude = Number(spliti[1]).toFixed(2)
        town.longitude = Number(spliti[2]).toFixed(2)
        
        console.log(town)

    }
}

towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])



