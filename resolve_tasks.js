const reverseSeq = n => {
  let array = []
  for(let i = 1; i<=n;i++){
    array.unshift(i)
  }
  return array;
};
