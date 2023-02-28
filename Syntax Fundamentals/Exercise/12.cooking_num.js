function solve(numStr, ...oper) {
    
    let num = Number(numStr)

    oper
        .forEach((oper) => {
            switch (oper) {
                case "chop":
                    num /= 2; break
                case "dice":
                    num = Math.sqrt(num); break
                case "spice":
                    num ++; break
                case 'bake': 
                    num *=3; break
                case 'fillet':
                    num -= num *0.2; break
            }
            console.log(num);

    })

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
