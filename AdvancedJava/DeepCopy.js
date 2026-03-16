//deep copy
let user={
    name:"Anekvarna",
    age:20,
    address:{
        city:"Delhi",
        pincode:11001
    }
};
let usercopy=JSON.parse(JSON.stringify(user));
usercopy.address.city="Mumbai";
console.log(user);
console.log(usercopy);