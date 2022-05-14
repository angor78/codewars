function maskify(cc) {
    let ccArr=cc.split('')
    let str=''
    if(cc===''){return ''}
    if(cc=== '1'){return '1'}else{
      ccArr = ccArr.reverse()
      str=ccArr.map((n,i)=>i<4?n:n ='#').reverse().join('')
    }
   return str
  }