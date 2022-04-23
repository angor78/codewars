function solve(s) {
  let array = s.split("");
  let strInfo = [0, 0, 0, 0];
  for (let index = 0; index < array.length; index++) {
    //for uppercase
    if (array[index].charCodeAt() >= 65 && array[index].charCodeAt() <= 90) {
      strInfo[0] += 1;
      //for lowercase
    }
    if (array[index].charCodeAt() >= 97 && array[index].charCodeAt() <= 122) {
      strInfo[1] += 1;
    }
    //for numbers
    if (array[index].charCodeAt() >= 48 && array[index].charCodeAt() <= 57) {
      strInfo[2] += 1;
    }
    //for special characters
    if (
      (array[index].charCodeAt() >= 33 && array[index].charCodeAt() <= 47) ||
      (array[index].charCodeAt() >= 58 && array[index].charCodeAt() <= 64) ||
      (array[index].charCodeAt() >= 91 && array[index].charCodeAt() <= 96) ||
      (array[index].charCodeAt() >= 123 && array[index].charCodeAt() <= 126)
    ) {
      strInfo[3] += 1;
    }
  }
  return strInfo;
}
console.log(solve("Codewars@codewars123.com"));
