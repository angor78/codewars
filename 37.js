function noSpace(x){
    let arr = x.split('')
    x=arr.filter(c=>!(c===" ")).join('')
     return x
   }