function solve(number) {

  let sumDig = 0;
  let newNum = String(number);

  for (el of newNum) {
    sumDig += Number(el);
  }
  console.log(sumDig);
  
}

solve(245678);
solve(97561);
