function SimpleCalculator(x, y, op) {

    let result;
    switch (op) {
        case "add": result = (x, y) =>  x + y; break
        case "multiply": result  = (x, y) => x * y; break
        case "subtract": result = (x, y) => x - y; break
        case "divide": result = (x, y) => x / y; break
    }
    console.log(result(x, y))

}

SimpleCalculator(12, 19, 'add')
SimpleCalculator(5, 5, 'multiply')
