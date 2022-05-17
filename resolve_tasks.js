function find_average(array) {
  if(array.length===0){
    return 0
  }else{
    return array.reduce((acc, num) => acc + num, 0)/array.length
  }
}
