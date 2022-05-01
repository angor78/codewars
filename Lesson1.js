console.log("sdad");

let user = {
  name: "Bob",
  friends:["Adkfm","sdasd","asdds"]
};

let user2 = {...user,friends:["Alex", ...user.friends,"Fred"]}//spred operator

let arrOfObj =[
    {name:"adfasfs"},
    {name:"adfasfs"},
    {name:"adfasfs"},
    {name:"adfasfs"}
]

const newCopy = [arrOfObj.map(ob=>ob)]


console.log(user2);
console.log(newCopy);
