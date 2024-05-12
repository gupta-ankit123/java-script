const coding=['py','rb','java','cpp','js']

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach( (val)=>{
//     console.log(val);
// })

// function print(val){
//     console.log(val);

// }

// coding.forEach(print)

// coding.forEach( (item, index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:'javascript',
        languageFileName:'js'
    },
    {
        languageName:'python',
        languageFileName:'py'
    },
    {
        languageName:'java',
        languageFileName:'java'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})