//immediately invoked function expression

(function chai (){
    //named iife
    console.log("DB Connected");
})();//yaha pe semicolon lagana jaruri hai tab hi pata chalega code ko ki ab function ko rok dena hai
//iife ke use karte hi function immediately invoke ho jata hai
//iska use isliye karte hai kyuki global scope ke variables se pollution hoti hai to usko hatane ke liye iife ka use kar rahe hai
// chai()

((name)=>{
    console.log(`DB Connected TWO ${name}`);
})('Ankit');