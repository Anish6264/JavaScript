

const mysym=Symbol("key1")


const jsuser={
    name: "Anish",
    age: 18,
    [mysym]:"mykey1",
    location: "Ambah",
    email: "Anish@gmail.com",
    islogedin: false,
    lastloginday: ["maonday","sunday"]
}
//  it conseder name ,email, location. .... as string. we give argument with out dot(.) so we have to define it as string
console.log(jsuser.name) // most used 
console.log(jsuser["name"]);
console.log(jsuser[mysym])

jsuser.email="aman"
// this will change the value in email

Object.freeze(jsuser)
//  this will freez all the argument in object so you can not change the value of arguments


const tinderuser={

}

// this is not single ton object

const tinderuser2= new Object()
// this is singleton object constructor OOPS concept

//  we can give an object into object we can acces them by using . after every object

//  we use Object.assign({} obj1,obj2)  or can use spread method {...obj1,...obj2} to comine 2 object

//  database gices the array of objects

// console.log(Object.keys(name of object whose kry you want to access))   obtjis return as an array

// console.log(Object.values(name of object whose kry you want to access))   obtjis return as an array

// console.log(tinderuser.hasownproperty("any key of object"))

//+++++++++++++++ de structer of object ++++++++++++++++++++++++++++
const course={
    coursename: "hindi",
    price: "999",
    courseinstructor:"Anish"
}

const { courseinstructor : c} = course
console.log(c);       // gives the name of course instructor

