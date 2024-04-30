const name="Ankit"
const age =18

// console.log(name+age);

//instead of using + we will use backtick
// console.log(`my name is ${name} and my age is ${age}`);

const gameName=new String('Ankit')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)//it cannot accept negative value
console.log(newString);

const anotherString=gameName.slice(-8,4)//it can accept negative values
console.log(anotherString);

//there are many methods of string which we can see on the browser and read their documentation on mdn
//some used methods are split, splice, replace ,trim etc..



