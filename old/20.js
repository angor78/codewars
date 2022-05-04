function digitize(n) {
    //code here
    let s = String(n)
    let arr = s.split('').reverse()
    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i]
        arr[i]=Number(temp)
    }
    return arr
  }
  console.log(digitize(112345));
