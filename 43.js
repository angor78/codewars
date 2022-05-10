function squareSum(numbers) {
  let sqNumArr = numbers.map((n) => n * n);
  let totalSum = 0;
  for (i = 0; i < sqNumArr.length; i++) {
    totalSum += sqNumArr[i];
  }
  return totalSum;
}
