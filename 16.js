function toFreud(string) {
    let array = string.split(" ");
    let result = [];
    if (array[0] == "") {
      result.push("");
    }
  
   else {
      for (let index = 0; index < array.length; index++) {
        
        result.push("sex");
      }
    }
  
    result = result.join(" ");
    return result;
  }
console.log(toFreud("This is a test"));
