// const user1="sahithi";
// const user2="Rishendra";
// const user3="vishnu";
// const user4="raj kumar";
// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
////////////////////////
//const users = ["sahithi","rishendra","vishnu","raj kumar"]
// console.log(users[0]);
// console.log(users[3]);
// for(let i=0;i<users.length;i++);
// console.log(users[i]);

////////////////////////////////
//const users = ["sahithi","rishendra","vishnu","raj kumar",];
// users.push("Arun");
// console.log(users);

// users.pop();
// console.log(users);

// users.unshift("Vindhya");
// console.log(users);

// users.shift();
// console.log(users);

// const users = ["sahithi","rishendra","vishnu","raj kumar",];
// let x = users.join("");
// console.log(x ,typeof(x));


//objects
// let userDetails = {
//     name:"sahithi",
//     age:20,
//     city:"bhadrachalam"
// };
// console.log(userDetails);
// console.log(userDetails.name);


// let userDetails = {
//     name:"Rishendra",
//     age:20,
//     city:"hyd",
//     address:{
//         area:"medical colony",
//         streetNo : "1",
//         pincode:"507111"
//     }
// };
// console.log(userDetails.address.area);

//! create a array of object


let userDetails ={
    name : "sai",
    age :20,
    city:"hyd"


}
console.log(userDetails);
console.log(userDetails.name);
console.log(typeof(userDetails));

let x= JSON.stringify(userDetails);
console.log(x);
console.log(x.name);
console.log(typeof(x));

let y = JSON.parse(x);
console.log(y);







