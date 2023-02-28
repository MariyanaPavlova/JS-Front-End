function solve(num) {

    let sumNum = 0
    
    let numToStr = String(num)
    let firstEl = numToStr[0]
    let boolOut = true

    for (el of numToStr){
        sumNum += Number(el);
        {
        if (el !== firstEl)
            boolOut = false;      
        }
        
    }
    console.log(boolOut)
    console.log(sumNum)

}

solve(2222222)
solve(1234)