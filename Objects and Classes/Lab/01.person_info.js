function personInf(firstName, lastName, age) {
    let res = {}
    res.firstName = firstName
    res.lastName = lastName
    res.age = age
    return res
}

console.log(personInf("Peter", "Pan", "20"))
console.log(personInf("George", "Smith", "18"))