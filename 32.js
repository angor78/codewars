function isIsogram(str) {
    str = str.toUpperCase()
    let arr = str.split("");
    let uniq = [...new Set(arr)];
    if(uniq.length === arr.length){
        return true
    }else{
        return false
    }
  }
console.log(isIsogram("Dermatoglyphics"));
