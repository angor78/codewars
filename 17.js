function eachCons(array, n) {
  let nArr = [];
  let tArr = [];
 


    for (let j = 0; j <= n - 1; j++) {
      tArr.push(array[j]);
  
    }
    nArr.push(tArr);
    
  

  

  return nArr;
}
console.log(eachCons([3, 5, 8, 13], 2));
