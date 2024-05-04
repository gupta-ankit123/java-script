const user={
    username:"Ankit",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this)//here it will the current context of the object
    }

}
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage()
// console.log(this);//here it will give an empty object
//but in browser if we console log this then it will give the global object i.e, Window Object

// function chai(){
//     let username="Ankit"
//     // console.log(this);//it will print an object
//     console.log(this.username);//it will print undefined as this keyword can be used in object not in function
// }

// chai()

// const chai=function(){
//     let username="Ankit"
//     console.log(this);
// }

const chai=()=>{
    let username="Ankit"
    console.log(this);//here it will return an empty object
    console.log(this.username);//it will return undefined
}

// chai()

// const addTwoNumbers=(num1,num2)=>{
//     return num1+num2;
// }
//jab curly braces use kar liye to return keyword ka use karna hi padega
//aur agar only parantheses use karenge to bina return ke bhi ho jayega

const addTwoNumbers=(num1,num2)=> (num1+num2)//sirf one line ke liye valid hai
console.log(addTwoNumbers(3,4))