function longest(s1, s2) {
  // your code
  let a1 = s1.split('')
  let a2= s2.split('')
  let array = a1.concat(a2)
  array=array.filter((c,i)=>array.indexOf(c) === i).sort()
  let str = array.join('')
  return str
}
