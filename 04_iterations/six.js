const myNum=[1,2,3]

// const total=myNum.reduce(function (acc,curr){
//     console.log(`acc is ${acc} and curr is ${curr}`);
//     return acc+curr
// },0)
// console.log(total);

const total=myNum.reduce((acc,curr)=> acc+curr,0)
console.log(total);