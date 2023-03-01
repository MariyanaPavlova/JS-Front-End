function oddEvenSum(num) {
    
    let oddSum = 0
    let evenSum = 0
    let numStr = String(num)

    for (let el of numStr){
        if (Number(el) % 2 == 0){
            evenSum += Number(el)
            
        }else{
            oddSum += Number(el)
        }
    }   return (`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
console.log(oddEvenSum(1000435))
console.log(oddEvenSum(3495892137259234))