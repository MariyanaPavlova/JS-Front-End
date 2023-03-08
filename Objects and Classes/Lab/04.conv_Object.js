function convert(jsonData) {
    
    let person = JSON.parse(jsonData) //conv JSON str to Obj
    
    for(let key of Object.keys(person)){
        console.log(`${key}: ${person[key]}`)
    }
}

convert('{"name": "George", "age": 40, "town": "Sofia"}')