function disemvowel(str) {
    let arr = str.split("");
  
    let newStr = arr
      .filter((ch) => {
        return !(
          ch === "i" ||
          ch === "I" ||
          ch === "o" ||
          ch === "O" ||
          ch === "A" ||
          ch === "a" ||
          ch === "e" ||
          ch === "E" ||
          ch === "U" ||
          ch === "u"
        );
      })
      .join("");
  
    return newStr;
  }

console.log(disemvowel("This website is for losers LOL!"));
//A, E, I, O, U
// function disemvowel(str) {
//     var vowels = ['a', 'e', 'i', 'o', 'u'];
    
//     return str.split('').filter(function(el) {
//       return vowels.indexOf(el.toLowerCase()) == -1;
//     }).join('');
//   }