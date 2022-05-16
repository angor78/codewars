function XO(str) {
  let array = str.split('')
  let countO =array.filter(el=>el==='o'||el==='O')
  let countX =array.filter(el=>el==='x'||el==='X')
  return countX.length === countO.length 
  }
