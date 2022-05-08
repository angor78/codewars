function repeatStr(n, s) {
  let newArr = s.split(" ");
  newArr = newArr.filter((ch) => ch === " ");
  for (i = 0; i < n - 1; i++) {
    newArr.push(s);
  }
  let newStr = newArr.join("");
  return newStr;
}
