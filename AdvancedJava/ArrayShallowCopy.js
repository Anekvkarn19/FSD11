let arr=[1,2,3];
let arrcopy=[...arr];
arrcopy[0]=10;
console.log(arr);
console.log(arrcopy);
let user=[{
    name:"Anekvarna"
        },
      {
        name:"Anu"
    }
];
let usercopy=[...user];
usercopy[0].name="Aman";
console.log(user);