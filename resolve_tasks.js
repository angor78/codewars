// function findOdd(A) {
//   A.sort();
//   for (let i = A.length - 1; i > 0; i--) {
//     if (A[i] == A[i - 1]) {
//       A.splice(i - 1, 2);
//       i -= 1;
//     }
//   }
//   if (!A.length % 2 === 0) {
//     return A[0];
//   }
// }
function findOdd(A) {
  var obj = {};
  A.forEach(function(el){
    obj[el] ? obj[el]++ : obj[el] = 1;
  });
  console.log(obj);
  for(prop in obj) {
    if(obj[prop] % 2 !== 0) return Number(prop);
  }
}
console.log(findOdd([1,3,1,7,6,2,2,6,3,6,7]));