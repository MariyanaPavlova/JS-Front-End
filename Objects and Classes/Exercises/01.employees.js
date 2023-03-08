function objectDemo(input) {

    let final = {}

    for(const i of input) {
        final.name = i
        final.number = i.length
        console.log(`Name: ${final.name} -- Personal Number: ${final.number}`)
    }


}

objectDemo([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal'
])