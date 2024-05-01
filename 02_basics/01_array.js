//array
const myArr=[1,2,3,4,5]
const myHeroes=["IronMan","Spiderman","Batman"]

const myArr2=new Array(1,2,3,4,5)
// console.log(myArray[2]);

//Array methods
//push=>add an element at the end of the array
//pop=>remove an element from the end of the array

// myArray.unshift(9)//it adds value in front of the array
// myArray.shift()//removes an element from front of the array
// console.log(myArray)

//there are methods also like which return bool type like if we want to know that a particular element is present in the aray or not and to know the index of a particular element
const newArr=myArr.join()//arr.join() method convert the array in string

// console.log(myArray);
// console.log(newArr);

console.log("A", myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
//slice method will not change the original array

console.log("B", myArr)

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr)
//splice method will change the original array

