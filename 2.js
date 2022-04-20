function sameCase(a, b) {
  let codeCharA = a.charCodeAt();
  let codeCharB = b.charCodeAt();
  if ((codeCharA >= 65 && codeCharA <= 91) && (codeCharB >= 65 && codeCharB <= 91)||(codeCharA >= 97 && codeCharA <= 123) && (codeCharB >= 97 && codeCharB <= 123)){
      return 1
  }else if((codeCharA >= 65 && codeCharA <= 91) && (codeCharB >= 97 && codeCharB <= 123)||(codeCharA >= 97 && codeCharA <= 123) && (codeCharB >= 65 && codeCharB <= 91)){
      return 0
  }else{
      return -1
  }
}
