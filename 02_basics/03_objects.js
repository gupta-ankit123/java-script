//singleton=>constructor ki madad se jab object banayenge to hanesha singleton object banega here we can create object using Object.create

//but here we are going to declare objects using objects literal
const mySym=Symbol("key1")
const user={
    name:"Ankit",//here name is treated as a string 
    "full name":"Ankit Gupta",
    [mySym]:"myKey1",//taking symbol as an input
    age:18,
    city:"Ranchi",
    email:"ankit@google.com",
    isLoggedIn:false,
    LastLoggedIn:["Monday","Friday"]
}
// console.log(user.age);
// console.log(user["email"]);//another way to access the element of object this method is most preffered 

// //full name cannot be accessed by dot operator 
// console.log(user["full name"]);

// //to access the symbol
// console.log(user[mySym]);

user.email="Ankit@yahoo.com"//updating the values 
// console.log(user.email);
//if we don't want to change the value of object then we can use freexe method
// Object.freeze(user)
user.email="ankit@microsoft.com"
// console.log(user);

user.greeting=function(){
    console.log("Hello user");
}

user.greeting2=function(){
    console.log(`Hello user, ${this.name}`);//this keyword is used to refer to the same object
}
// console.log(user.greeting);
console.log(user.greeting());
console.log(user.greeting2());
