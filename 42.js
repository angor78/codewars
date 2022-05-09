function findShort(s) {
    let array = s.split(" ");
    let minLenStr = array[0];
    for (i = 0; i < array.length; i++) {
      if (array[i].length < minLenStr.length) {
        minLenStr = array[i];
      }
    }
  
    return minLenStr.length;
  }
