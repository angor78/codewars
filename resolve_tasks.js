function solution(number){
  if(number<0){return 0}
  let array=[]
  for(i=0;i<number;i++){
    if(i%3===0||i%5===0){
      array.push(i)
    }
  }
  let sum = array.reduce((acc,a)=>acc+a,0)
  return sum
}
