function binToDec(bin) {
  return parseInt((bin + "").replace(/[^01]/gi, ""), 2);
}

bin= 10010010
let dec=binToDec(bin)
console.log(dec);
