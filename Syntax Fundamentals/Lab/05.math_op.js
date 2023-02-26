function solve(a, b, op) {
    
    let result;
    switch (op) {
        case "+":
            result = a+b; break;
        case "-":
            result = a-b; break;
        case "/":
            result = a/b; break;
        case "*":
            result = a*b; break;
        case "%":
            result = a%b; break;
        case "**":
            result = a**b; break;  
    
    }

    console.log(result);
}
solve(5, 6, '+');
solve(3, 5.5, '*');