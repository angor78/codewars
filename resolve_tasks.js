function openOrSenior(data){
  let user = data.map(u=>(u[0]>=55)&&(u[1]>7)?u='Senior':u='Open')
  return user
}
