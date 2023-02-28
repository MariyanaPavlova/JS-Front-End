function nthEl (elements, step) {
   
    let result = []
    // for (let i = 0; i < elements.length; i++) {
    //     if (i % Number(step) ===0){
    //         result.push(elements[i])
    //     }
    // }
    // console.log(result)

    for (i = 0; i < elements.length; i += step) {
        result.push(elements[i])
    }
       return result

}

nthEl(['5', 
'20', 
'31', 
'4', 
'20'], 
2)

nthEl(['dsa',
'asd', 
'test', 
'tset'], 
2)

nthEl(['1', 
'2',
'3', 
'4', 
'5'], 
6)