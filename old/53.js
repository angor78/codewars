function abbrevName(name){
    let arrStr = name.split(' ')
    let firstNameAbb = arrStr[0][0].toUpperCase()
    let lastNameAbb = arrStr[1][0].toUpperCase()
    return firstNameAbb+ '.'+lastNameAbb
 }
 