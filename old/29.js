function descendingOrder(n){
   let arrStr = String(n).split('')
   arrStr.sort((a, b) => b - a);
   n=arrStr.join('')

    return Number(n)
  }
  console.log(descendingOrder(123456789));