function accum(s) {
  // your code
  let arrStr = s.split("");
  let nArr=[]
  for (let i = 0; i < arrStr.length; i++) {
    let temp = arrStr[i];
    temp = (temp.toUpperCase()) + (temp.toLowerCase()).repeat(i)
    nArr.push(temp)
  }
  
  s=nArr.join("-")
  return s;
}

console.log(accum("RqaEzty"));
