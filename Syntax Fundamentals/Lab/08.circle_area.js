function solve (input) {
    
    let result;
    let input_type = typeof(input)

    if (input_type === 'number'){
        result = input ** 2 * Math.PI;

        console.log(result.toFixed(2));
    }
    else {
        console.log(`We can not calculate the circle area, because we receive a ${input_type}.
        `);
    }

}

solve(5)
solve('name')