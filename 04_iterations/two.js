const myObject={
    js:'javascript',
    py:'python',
    rb:'ruby',
    cpp:'c++'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming=['js','rb','py','cpp']
for (const key in programming) {
    // console.log(programming[key]);
}

// const map=new Map()
// map.set("IN", "India")
// map.set("USA", "United States of America")
// map.set("BR", "Brazil")
// map.set("BR", "Brazil")

// for (const key in map) {
//     console.log(key);
// }// we can't iterate on map like this