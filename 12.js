function removeEveryOther(arr) {
  //your code here
  
  for (i = 1; i < arr.length; i++) {
 
    arr.splice(i, 1);
    
  }

  return arr;
}

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
