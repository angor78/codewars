function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let arrHL = [];
  arrHL.push(max);
  arrHL.push(min);
  let strHL = arrHL.join(" ");

  return strHL;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
