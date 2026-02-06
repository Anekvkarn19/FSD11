console.log("Hello")
console.warn("This is a warning")
console.error("This is an error")
console.info("This is some information")
console.debug("This is a debug message")
let b=20;
var a=10;
const c=30;
d=40;
b=30;
var a=50;//can be redeclared and updated ,scope: global
a=100;
//let b=80;//block scope error
console.log(typeof (a))
console.log(typeof (c))
console.log(typeof (d))
//data type
let num=100;
let str="Hello World";
let nul=null;
let und;
let bool=true;
console.log(typeof (num))
console.log(typeof (str))
console.log(typeof (nul))
console.log(typeof (und))
console.log(typeof (bool))
 let x=10;
 let y=20;
 console.log(x+y);
 console.log(x-y);
 console.log(x*y);
 console.log(x/y);
 console.log(x%y);
 let day=3;
 switch(day)
 {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;  
    case 3:
        console.log("Wednesday");
        break;
 }
 function add(p,q)
 {
    return p+q;
 }
 console.log(add(5,10));
 //arrow function
 const multiply=(a,b)=>a*b;
 console.log("arrow function",multiply(5,5));
 let arr=[10,20,30,40];
 console.log(arr[0]);
 arr.push(50);
 console.log(arr);
 arr.pop();
console.log(arr);
//object
let student={
    name:"Anekvarna",
    age:20,
    course:"B.Tech",
};
console.log(student.name);
console.log(student["age"]);
student.age=21;
console.log(student.age);
let date=new Date();
console.log(date);
console.time("test");
for(let i=0;i<10000;i++)
{}
    console.timeEnd("test");
    console.group();
    console.log("Group log 1");
    console.log("Group log 2");
    console.groupEnd();

    console.count("a");
    console.count("a");
    console.count("a");
    console.count("b"); 
    console.count("a");
    console.count("a");
    //table
    let details={name:"Anekvarna",age:"20",course:"B.Tech"};
    console.table(details);



