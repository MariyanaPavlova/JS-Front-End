function personInf(firstName, lastName, age) {
    // let person = {}
    // res.firstName = firstName
    // res.lastName = lastName
    // res.age = age
    age = Number(age)
    let person = {firstName:firstName, lastName:lastName, age:age}
    return person
}
    
   

console.log(personInf("Peter", "Pan", "20"))
console.log(personInf("George", "Smith", "18"))