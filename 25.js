function squareDigits(num) {
  let numToStr = num.toString();
  let newNum = numToStr.split("").map(o=>o*o);

  newNum = newNum.join("");

  return +newNum;
}
console.log(squareDigits(3212));
