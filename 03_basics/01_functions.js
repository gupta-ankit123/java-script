// function addTwoNumbers(number1,number2){
//     console.log(number1+number2);

// }

function addTwoNumbers(number1,number2){
    return number1+number2

}

const result=addTwoNumbers(3,4)
// console.log("Result is",result);

function userlogin(username){
    if(username===undefined){
        console.log("please enter a valid username");
        return
    }
    return `${username} just logged in`

}
// console.log(userlogin());

function calculateCartPrice(val1,val2,...num1){//here ... is rest operator which work similarly as spread operator it will return an array of all the arguments given to the function
    //here when we added val1 and val2 in the parameter of the function , the first two values of the arguments will get stored in val1 and val2 respectively and the rest element will be stored in the array

    return num1
}

// console.log(calculateCartPrice(100,200,201,300,400,500,600));

const user={
    username:"Ankit",
    price:999
}

function handleObject(anyObbject){
    console.log(`Username is ${anyObbject.username} and price is ${anyObbject.price}`);

}
// handleObject(user)
handleObject({
    username:"sam",
    price:99
})