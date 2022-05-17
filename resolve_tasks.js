String.prototype.toJadenCase = function () {
  let arr = this.split(' ')
  let str = arr.map((w) =>w[0].toUpperCase()+w.slice(1)).join(' ')
   return str; 
};
