// function chai(){
//     let username="anish"
//     console.log(this);
// }
// chai()

//  gives many things like global means we can use this in such type of function


// function chai(){
//     let username="anish"
//     console.log(this.username);
// }
// chai()

// undefined

// const chai=()=>{
//   let username = "anish";
//     console.log(this.username);
// }
// chai()

//  undefined

// const chai = () => {
//   let username = "anish";
//   console.log(this);
// };
// chai();

// {}   gives an empty object


// const addtwo=(num1,num2) => {
//   return num1+num2
// }

// console.log(addtwo(3,4))
//  if you are using {} then you have to write return 

// const addtwo = (num1, num2) =>   num1 + num2;
// implecit arrow function or here you can also write (num1 + num2) and no need to write return keyword

const addtwo = (num1, num2) =>  ({username:"anish"});
console.log(addtwo())
// this is how object is used in arrow function