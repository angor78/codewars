function squareArea(A){
    let r = (2*A)/Math.PI
    let sSq = (r*r).toFixed(2)
    sSq=Number(sSq)
    
    console.log(sSq);
    return  sSq
  }

console.log(squareArea(2));