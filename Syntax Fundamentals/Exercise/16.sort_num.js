function sortNum(numbers) {
    let sorted = [...numbers].sort((a, b) => a-b);
    let step = 0
    let result = []
    
    while (sorted.length >0) {
        if (step %2 ==0) { //взимаме от началото
            let firstEl = sorted.shift();
            result.push(firstEl)
        } else {
            let lastEl = sorted.pop()
            result.push(lastEl)
        }
        step++;
    }
    return result

}

console.log(sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))

function sortedNum(numbers) {
    let desending = [...numbers]
        .sort((a, b) => b -a)
    let ascending = [...numbers]
        .sort((a, b) => a -b)
    
    let outArr = [];
    for (let i=0; i< numbers.length; i++) {
        if (i % 2===0) {
            output.push(ascArr.shift())
        } else {
            output.push(desending.shift())
        }
    }
    return outArr

}
console.log(sortNum([-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]))