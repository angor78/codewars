function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let av = 0
  for(i=0;i<marks.length;i++){
    av+=marks[i]
  }
  return Math.trunc(av/marks.length)
}
