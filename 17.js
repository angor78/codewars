function eachCons(array, n) {
  let nArr = [];
  let tArr = [];

  for (let j = 0; j < array.length; j++) {
    for (let k = j; k < array.length; k++) {
      for (let i = 0; i <= n - 1; i++) {
        tArr.push(array[i]);
      }
      nArr.push(tArr);
    }
  }

  return nArr;
}
console.log(eachCons([3, 5, 8, 13], 2));
