function findMultiples(integer, limit) {
  //your code here
  let arr = [];
  arr[0] = integer;
  let temp = integer;

  while (temp < limit) {
    temp = temp + integer;
    arr.push(temp);
  }
  if (temp > limit) {
    arr.pop(temp);
  }

  return arr;
}

console.log(findMultiples(5, 7));
