function dictJson(input) {
    
    let dict = {}

    for (let i of input){
        let obj = JSON.parse(i)
        let ObjKey = Object.keys(obj)
        let key = ObjKey[0]
        dict[key] = obj[key] 
    }

    let sortKey = Object.keys(dict).sort((KeyA, KeyB) => KeyA.localeCompare(KeyB))

    for (let i of sortKey){
        console.log(`Term: ${i} => Definition: ${dict[i]}`)
    }

}

dictJson([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])