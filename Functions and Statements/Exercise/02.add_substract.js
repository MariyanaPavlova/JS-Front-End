function addSubstract (a, b, c) {
   
    let addNum = add(a, b)
    
    function add(a, b) {
        return a + b
    }
    function substract(addNum, c) {
        return addNum - c
    }
    return substract(addNum, c)
}

console.log(addSubstract(23, 6, 10))
console.log(addSubstract(1, 17, 30))