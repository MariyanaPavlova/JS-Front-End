function solve(fruit, grams, price) {

    let neededMoney = (grams * price)/1000
    let GramsToKg = grams/1000
    console.log(`I need $${neededMoney.toFixed(2)} to buy ${GramsToKg.toFixed(2)} kilograms ${fruit}.`)
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)