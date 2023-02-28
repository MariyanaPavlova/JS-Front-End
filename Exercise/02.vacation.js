function solve(people, group, day) {
    
    let result = 0
    switch (group) {
        case 'Students':
            
            if (day =='Friday')
                result = people * 8.45
            
            else if (day =='Saturday')
                result = people * 9.80
            
            else if (day =='Sunday')
                result = people * 10.46
            
            if (people >= 30)
                result = result - result*0.15
            break

        case 'Business':
            peopleCount = people
            if (people >= 100)
                peopleCount -= 10

            if (day =='Friday')
            result = peopleCount * 10.90
        
            else if (day =='Saturday')
            result = peopleCount * 15.60
        
            else if (day =='Sunday')
            result = peopleCount * 16
            break

        case 'Regular':
            if (day =='Friday')
            result = people * 15
        
            else if (day =='Saturday')
            result = people * 20
        
            else if (day =='Sunday')
            result = people * 22.50

            if (people >= 10 && people <=20)
                result = result - result *0.05
            break

    }
    console.log(`Total price: ${result.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday")
solve(30,
    "Regular",
    "Saturday")