let user={
    name:"Anekvarna",
    age:20,
    address:{
        city:"Delhi",
        pincode:11001
    }
};
// let usercopy={...user};//works for shallow copy but not for nested objects
// usercopy.address.city="Mumbai";
// usercopy.name="Anu";
// console.log(user); 
// console.log(usercopy);
let usercopy=Object.assign({},user);//works for shallow copy but not for nested objects
usercopy.address.city="Mumbai";
usercopy.name="Anu";
console.log(user); 
console.log(usercopy);