function stringClean(s) {
  // Function will return the cleaned string
  let sToArr = s.split("");

  for (i = 0; i < sToArr.length; i++) {
    let codeCh = sToArr[i].charCodeAt();
    if (codeCh >= 48 && codeCh <= 57) {
      delete sToArr[i];
    }
  }
  s = sToArr.join("");
  return s;
}

s = "This looks5 grea8t!";
let f = stringClean(s);
console.log(f);
