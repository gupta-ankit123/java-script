const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greeting="Hello World"
for (const greet of greeting) {
    // console.log(greet);
}

const map=new Map()
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("BR", "Brazil")
map.set("BR", "Brazil")

// console.log(map);
//in map everyhing will be printed in the same order we inputed and no duplicate value will be stored in the  map.

for (const [key,value] of map) {
    // console.log(key ,':-',value );
    
}

const myObject={
    'game1':'GTA',
    'game2':'IGI'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-',value);
// }for of loop cannot be used to iterate an object

