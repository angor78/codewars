function bingo(a) {
  // your winning code here
  let bingoCode = [2, 9, 14, 7, 15];
  function contains(a, bingoCode) {
    for (var i = 0; i < bingoCode.length; i++) {
      if (a.indexOf(bingoCode[i]) == -1) return "LOSE";
    }
    return "WIN";
  }
  return contains(a, bingoCode);
}
