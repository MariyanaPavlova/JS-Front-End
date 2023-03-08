function convert(name, lastName, hairColor) {
    let res = {
        name, 
        lastName,
        hairColor
    }
    let convStr = JSON.stringify(res) //conv Obj to JSON str
    console.log(convStr)

}

convert('George', 'Jones', 'Brown')