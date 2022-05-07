function getMiddle(s) {
  let arr = s.split("");
  let centerPos = Math.floor(arr.length / 2);
  let middleCh = arr[centerPos];
  let prevMiddleChar = arr[centerPos - 1];
  if (arr.length % 2 === 0) {
    return prevMiddleChar + "" + middleCh;
  } else {
    return middleCh;
  }
}
