// // // function digital_root(n) {
// // //   if (n < 9) {
// // //     return Number(n);
// // //   }
// // //   let numToArrStr = String(n).split("");
// // //   let sumOfDigit = numToArrStr.reduce((acc, el) => Number(acc) + Number(el));
// // //   n = sumOfDigit;
// // //   if (n > 9) {
// // //     return digital_root(n);
// // //   }
// // //   return n;
// // // }
// // // function digital_root(n) {
// // //   return ((n - 1) % 9) + 1;
// // // }
// // // function arrayPlusArray(arr1, arr2) {
// // //   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
// // // }

// // //Array.proptotype

// // let arr1 = [1, 2, 3, 4];
// // let array = new Array(1, 2, 3, 4, 99, 456, 32, 78, 45, 23, 5, 0,1, 2, 3, 4, 99, 456, 32, 78, 45, 23, 5, 0,1, 2, 3, 4, 99, 456, 32, 78, 45, 23, 5, 0);
// // // function compareFunc(a,b) {
// // //   if(a<=b){
// // //     return -1
// // //   }else{
// // //     return 1
// // //   }
// // // }

// // // console.log(arr2.sort((a,b)=>b-a));
// // let counter = 0;
// // for (let j = 0; j < array.length; j++) {
// //   let isSort = true;
// //   for (let i = 0; i < array.length-1-j; i++) {
// //     if (array[i] > array[i + 1]) {
// //       isSort = false;
// //       [array[i + 1], array[i]] = [array[i], array[i + 1]];
// //       counter++;
// //     }

// //   }
// //   counter++;
// //   if (isSort) break;
// // }
// // console.log(array);
// // console.log(counter);

// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 85
//     },
//     {
//         name: "Alex",
//         age: 21,
//         isMarried: true,
//         scores: 90,
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 100
//     },
//     {
//         name: "Helen",
//         age: 20,
//         isMarried: false,
//         scores: 110
//     },
//     {
//         name: "Ann",
//         age: 20,
//         isMarried: false,
//         scores: 105
//     },
// ];

// const user = {
//     name: "Bob",
//     age: 23,
//     friends: ["Alex", "Nick", "John"]
// }

// //1. Создайте поверхностную копию объекта user
// let copyUser={...user};

// //Проверка:
//  console.log(user===copyUser)//- что должно быть в консоли?--- false
//  console.log(user.friends===copyUser.friends)//- что должно быть в консоли?---true

// //2. Полная (глубокая) копия объекта user
// let deepCopyUser={...user,friends:[...user.friends]};

// //Проверка:
//  console.log(user===deepCopyUser) //- что должно быть в консоли?---false
//  console.log(user.friends===deepCopyUser.friends) //- что должно быть в консоли?--false

// //3. Поверхностная копия массива students
// let copyStudents=[...students];

// //Проверка:
//  console.log(copyStudents===students )// - что должно быть в консоли?---false
//  console.log(copyStudents[0]===students[0]) //- что должно быть в консоли?---true
//  console.log(copyStudents[0].name===students[0].name)// - что должно быть в консоли?---true
//  console.log(copyStudents) //- что должно быть в консоли?-----Array

// //4*. Полная (глубокая) копия массива students (map)
// let deepCopyStudents=students.map(el=>el={...el});

// //Проверка:
//  console.log(deepCopyStudents===students) //- что должно быть в консоли?---false
//  console.log(deepCopyStudents[0]===students[0])// - что должно быть в консоли?----false
//  console.log(deepCopyStudents[0].age===students[0].age)// - что должно быть в консоли?---true
// // console.log(код проверки написать самостоятельно) - что должно быть в консоли?

// // NB!!! Далее все преобразования выполняем не модифицируя исходный массив students
// // Вывод результатов - в консоль

// //5. Отсортируйте копию массива deepCopyStudents по алфавиту (sort)
// let sortedByName=[...students].sort((a,b)=>a.name>=b.name?1:-1);
// console.log(sortedByName);
// console.log(students);

// //5a. Отсортируйте deepCopyStudents по успеваемости(лучший идёт первым)(sort)
// let sortedByScores=[...students].sort((a,b)=>a.scores<=b.scores?1:-1);
// console.log(sortedByScores);

// //6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
// let  bestStudents=students.filter(el=>el.scores>=100);
// console.log(bestStudents)
// console.log(students)

// //6a. Получите массив ("вырежьте") из трёх лучших студентов из массива deepCopyStudents (splice)
// //https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// let topStudents=[...deepCopyStudents].sort((a,b)=>a.scores<=b.scores?1:-1).splice(0,3);
// console.log(topStudents)
// console.log(deepCopyStudents)

// //6b. Объедините массивы deepCopyStudents и topStudents так,
// //чтоб сохранился порядок сортировки (spread-оператор || concat)
// let newDeepCopyStudents=[...deepCopyStudents,...topStudents]
// console.log(newDeepCopyStudents)

// //7. Сформируйте массив холостых студентов (filter)
// let notMarriedStudents=students.filter(el=>el.isMarried);
// console.log(notMarriedStudents)

// //8. Сформируйте массив имён студентов (map)
// let studentsNames=students.map(el=>el.name);
// console.log(studentsNames)

// //8a. Сформируйте строку из имён студентов, разделённых
// // - пробелом (join)
// // - запятой (join)
// let namesWithSpace=students.map(el=>el.name).join(' ');
// console.log(namesWithSpace)
// let namesWithComma=students.map(el=>el.name).join(',');
// console.log(namesWithComma)

// //9. Добавьте всем студентам свойство "isStudent" со значением true (map)
// let trueStudents=students.map(el=>({...el,isStudent:true}));
// console.log(trueStudents)

// //10. Nick женился. Выполните соответствующие преобразование массива students (map)
// let studentsWithMarriedNick=students.map(el=>el.name==='Nick'?{...el,isMarried:true}:el);
// console.log(studentsWithMarriedNick)

// //11. Найдите студента по имени Ann (find)
// let ann=students.find(el=>el.name==='Ann');
// console.log(ann)

// //12. Найдите студента с самым высоким баллом (reduce)
// // - c помощью reduce
// // - *не испльзуя методы массивов и Math.max()*
// let bestStudent=students.reduce((acc,el)=>acc.scores<el.scores?el:acc);
// console.log(bestStudent)

// //13. Найдите сумму баллов всех студентов (reduce)

// // И поднимаем руку!!!!

// let scoresSum=students.reduce((acc,el)=>acc+el.scores,0);
// console.log(scoresSum)
// // 14. Д.З.:
// // Напишите функцию addFriends, которая принимает параметром массив students
// // и добавляет в каждому студенту свойство "friends",
// // значением которого является массив имён всех остальных студентов из массива students,
// // за исключением собственного имени студента. Т.е. в друзьях у Боба Боба быть не должно.
// const addFriends = (students) => {
//     const frindsList = students.map(el=>el.name)
//    return students.map(el=>el={...el,friends:frindsList})
// }
// console.log(addFriends(students));

//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
function multyYo(str, n, div) {
  let arr = [];
  for (i = 0; i < n; i++) arr.push(str);
  return arr.join(div);
}
console.log(multyYo("yo", 5, ","));
//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
function name(str, bgStr) {
  return str.toLowerCase().startsWith(bgStr, 0);
}
console.log(name("Incubator", "inc"));
console.log(name("Incubator", "yo"));
//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."
function truncateString(str, n) {
  return str.slice(0, n) + "...";
}
console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));
//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
function getMinLengthWord(str) {
  if (str === "") null;
  let arr = str.split(" ");
  let sorted = arr.sort((a, b) => a.length - b.length);
  return sorted[0];
}
console.log(getMinLengthWord("Всем студентам инкубатора желаю удачи!"));

//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

function setUpperCase(str) {
  str = str.split(' ').map(el=>el.toLowerCase()).join(' ')
  return str.replace(/(^|\s)\S/g, function(a) {return a.toUpperCase()})
}
console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"));
//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает fasle. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
function isIncludes(str1,str2) {
   let arr1=str1.toLowerCase().split('')
   let arr2 =str2.toLowerCase().split('')
   let result=[]
    arr1.forEach(element => {
    arr2.includes(element)?result.push(element):null
   });
    return  result.length===arr2.length
 }

console.log(isIncludes("Incubator", "Cut"));
console.log(isIncludes("Incubator", "table"));
