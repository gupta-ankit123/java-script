// const tinderuser=new Object();//singleton object
const tinderUser={}//non singleton object
tinderUser.id="abc123"
tinderUser.name="sam"
tinderUser.isLoggedIn=false;

// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ankit",
            lastname:"Gupta"

        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}
// const obj3={obj1,obj2};
// const obj3=Object.assign({},obj1,obj2);

const obj3={...obj1,...obj2}
// console.log(obj3);

const users=[
    {
        email:"h@gmail.com",
        id:"abc1223"
    },
    {
        email:"h@gmail.com",
        id:"abc1223"
    },
    {
        email:"h@gmail.com",
        id:"abc1223"
    }
]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));//this will return an array of keys
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"jsh",
    courseInstructor:"hitesh",
    price:"999"

}
//course.courseInstructor

const{courseInstructor:instructor}=course;
console.log(instructor);
