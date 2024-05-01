const marvel=["ironman", "thor", "spiderman"] 
const dc=["batman", "superman", "flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

//using concat methosd to merge two arrays. concat method will return a new array containing all the elements of both the arrays
// const newHeroes = marvel.concat(dc)
// console.log(newHeroes);

//spread method=> this method also return a new array having elements of all the two arrays 

const new_Heroes=[...marvel,...dc]
// console.log(new_Heroes);

const anotherArray=[1,2,3,[4,5,6],7,8,[5,6,[4,3,2]]]
const realAnotherArray=anotherArray.flat(Infinity)
// console.log(realAnotherArray);

console.log(Array.isArray("Ankit"))//it will tell about the given input that if the given input is array or not
console.log(Array.from("Ankit"));// it will convert the given input in an array if it is not an array
console.log(Array.from({name:"Ankit"}));//intteresting case here it will give an empty array as output and if we not want
//empty array as output then we have to specify either we want an array of keys or values

let score1=100;
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));//form an array with the given set of elements

