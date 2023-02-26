function solve(name,age,grade){
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

solve('John', 15, 2);

let x = myFunction(4, 3);   // Function is called, return value in x

function myFunction(a, b) {
  return a * b;             // Function returns the product of a and b
}
console.log(x)