function digital_root(n) {
  if (n < 9) {
    return Number(n);
  }
  let numToArrStr = String(n).split("");
  let sumOfDigit = numToArrStr.reduce((acc, el) => Number(acc) + Number(el));
  n = sumOfDigit;
  if (n > 9) {
    return digital_root(n);
  }
  return n;
}
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }
