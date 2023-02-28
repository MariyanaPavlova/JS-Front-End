function solve(start, end) {

  let summ = 0;
  let output = [];

  for (i = start; i <= end; i++) {
    summ += i;
    output.push(i);
  }

  console.log(output.join(" "));
  console.log(`Sum: ${summ}`);
  
}
solve(5, 10);
solve(0, 26);
