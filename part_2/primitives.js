// Number

let balance = 102;
let anotherBalance = new Number(103);

// console.log(balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance);

// boolean

let isloggedin = true;
let isloggedout = new Boolean(false); // not recommended

//  is the best way to check the data type console.log(typeof isloggedin);
//  console.log(isloggedin);
// console.log(isloggedout);


// null and undefined

let firstname;
// console.log(firstname);
// console.log(typeof firstname);

let secondname = null;
// console.log(secondname);
// console.log(typeof secondname);




// string

let mystring = "Rohit";
let mystringone="hola";
let mystringtwo = 'anish';

let oldgreet= mystring + " " + mystringone + " " + mystringtwo;

//  console.log(oldgreet);

let greetmessage = `Good Morning ${mystring} ${mystringone} !`;

// console.log(greetmessage);


let demoone=`value is ${2*2}`;
// console.log(demoone);

let sm1 = Symbol("anish");
let sm2 = Symbol();


 console.log(sm1==sm2);
 console.log(sm1);


// if(sm1==sm2){
//     console.log("true");
// }else{
//     console.log("false");
// } 

 // this is also a way to find out but we generally not do until we have to give a message when things are in any comperision
