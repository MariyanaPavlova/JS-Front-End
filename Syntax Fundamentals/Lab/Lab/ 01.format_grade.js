function solve(grade) {
    

    if (grade < 3.00) {
        return 'Fail (2)'
        
        
    } else if (grade < 3.50) {
        desc = 'Poor'
    } else if (grade < 4.50) {
        desc = 'Good'
    } else if (grade < 5.50) {
        desc = 'Very good'
    } else if (grade >= 5.50) {
        desc = 'Excellent'
    }
    if (grade >3.00) {
    console.log(`${desc} (${grade.toFixed(2)})`)
    }

}

solve(3.33)
solve(4.50)
solve(2.99)
