function countPositivesSumNegatives(input) {
    let array = [];
    let sumNeg = 0;
    let countPos = 0;
  
    if (input === null || input.length == 0 ) {
      return array;
    }
    for (let i = 0; i < input.length; i++) {
      let temp = input[i];
      if (temp < 0) {
        sumNeg += temp;
      }
      if (temp > 0) {
        
        countPos += 1;
      }
    }
    array.push(countPos)
    array.push(sumNeg)
    return array;
  }
