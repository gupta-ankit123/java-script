const num=100

//if we wxplicitly want to define a number then 
const myNum=new Number(100)

const hundreds =10000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++++Maths+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(Math.random());//Math.random always gives value between 0 and 1 and according to our requirement we change our value
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10;
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);
