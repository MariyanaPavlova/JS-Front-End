function solve(m, n) {
    for (let i = m; i >= n; i--) {
        console.log(i);
        
    }
}

solve(6,2)

//-------//
let others = [4,5,6]
let numbers = [1,2,3, ...others];
//console.log ще даде [1,2,3,4,5,6] 
//без точките ще ги вкара като масив [1,2,3,[4,5,6]] 

//- може само да въртим без промяна на ел.
for (const iterator of numbers) {
    console.log(num)
}

for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
    
}


let numbers = [1, 2, 3, 4]
let output = numbers.join(', ')
console.log(output)
//output = 1, 2, 3, 4 //
