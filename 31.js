function isSquare(n) {
  let sqrt = Math.sqrt(n)
  let isInteger = Number.isInteger(sqrt)
  if (n < 0) {
    return false;
  }
  if (isInteger) {
    return true;
  } else {
    return false;
  }
}

console.log(isSquare(15));
