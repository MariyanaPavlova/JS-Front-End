function order(products, quantity) {

    switch(products) {
        case "coffee":
            return (quantity * 1.50).toFixed(2); break
        case "water":
            return (quantity * 1.00).toFixed(2); break
        case "coke":
            return (quantity * 1.40).toFixed(2); break
        case "snacks":
            return (quantity * 2.00).toFixed(2); break

    }
}

console.log(order("water", 5))
console.log(order("coffee", 2))