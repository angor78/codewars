function nameShuffler(str) {
  //Shuffle It
  let nStr = str.split(" ");
  console.log(nStr);
  nStr.reverse()
  console.log(nStr);
  str= nStr.join(' ')
  console.log(str);
  return str
}
str = "john McClane";
nameShuffler(str);
console.log(str);
