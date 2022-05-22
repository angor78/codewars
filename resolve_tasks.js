const todolist_ID1 = "43er-wesd";
const todolist_ID2 = "43er-wess";

const todoList = [
  {
    id: todolist_ID1,
    title: "What to learn",
    filter: "all",
  },
  {
    id: todolist_ID2,
    title: "What to read",
    filter: "alctive",
  },
];

const tasks = {
  [todolist_ID1]: [
    { id: 1, name: "HTML", isDone: false },
    { id: 2, name: "CSS", isDone: true },
    { id: 3, name: "REACT", isDone: true },
  ],
  [todolist_ID2]: [
    { id: 4, name: "asd", isDone: true },
    { id: 5, name: "HTfsdML", isDone: false },
    { id: 6, name: "xxc", isDone: true },
  ],
};
console.log(tasks[todolist_ID1][0].name);

let students = [
  {
    name: "Bob",
    age: 22,
    isMarried: true,
    scores: 85,
  },
  {
    name: "Alex",
    age: 21,
    isMarried: true,
    scores: 89,
  },
  {
    name: "Nick",
    age: 20,
    isMarried: false,
    scores: 120,
  },
  {
    name: "John",
    age: 23,
    isMarried: false,
    scores: 100,
  },
];

console.log(students.reduce((acc, el) =>{
    acc.push({...el,scores:el.scores+10})
    return acc
},[]));
