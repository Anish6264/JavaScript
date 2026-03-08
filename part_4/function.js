/*
1. write a function named maketea that takes one parameter typeoftea and return a string like makung green tea when called with green tea store the result in varible named teaorder
*/

function maketea(typeoftea) // here type of tea is a parameter
{
    return `making ${typeoftea} tea`;
}
let teaorder=maketea("green tea"); // if we did not pass any valve then it shows undefined nt null 


console.log(teaorder);


// when yu make a functin then the value you take is called parameters and when you call that finction then the values in () is called arguments

// after return finction did not print rest values or yu can say that after return the code in function is nt reachable



/*
2. create a function named ordertea that takes one parameter, thetypes. inside this function create another function named confirmorder that returns a message like "order confirmed for chai".
call "confirmorder from within ordertea and return thr result"
*/

function orderetea(teatype) {
  function confirmorder() {
    return `order confirmed for chai`;
  }
  return confirmorder();
}

let orderconfermation = orderetea("chai");
console.log(orderconfermation);

/*
3. write an arrow function named calculattotal that takes two parameter price and quantity the function should return the total cost by multiplying the price and quntity.
store the result in a varible named totalcost
*/

const calculatetotal = (price, quantity) => price * quantity;

let totalcost = calculatetotal(4, 100);
console.log(totalcost);

/*
4. write a function named processteaorder that takes another function make tea as parameter and calls it with the argument earl grey.
return the result of calling make tea
*/

function maketea(typeoftea) {
  return `make tea ${typeoftea}`;
}

function processteaorder(teafunction) {
  return teafunction(`earl gray`);
}
let order = processteaorder(maketea);
console.log(order);

/*
5. write a function named createteamaker that returns another functioon .the returned function should take one parameter teatype and return a message like making green tea.
store the returned function ina varible named teamaker and call it with green tea.
*/

function createamaker() {
  return function (teatype) {
    return `making ${teatype}`;
  };
}
let teamaker = createamaker();
console.log(teamaker("green tea"));


// How to make a function for a e cmmerse cart 

function calculatecartprice(val1,val2,...num1) {
  return num1;
}
console.log(calculatecartprice(200,300,400,500))
// This ... is called "REST" it is als called "SEPRAD" but in this case it is called REST this makes the rest value 400 and 500 into an "ARRAY" name num1


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


const user={
  username: "hitesh",
  price:199
}

function Handelobject(anyobject) {
  console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
  
}

Handelobject(user) // we can direct pass object not by name of object

// we can also parse array and object in function directly and there is no need to define object and name it
Handelobject({
  username:"anish",
  price:499
})

// +++++++++++++++++++ THIS AND ARROW +++++++++++++++++++++++++++++++++


const user2={
  username:"anish",
  price:999,


welcomeMessage: function(){

  console.log(`${this.username} , welcome to website`)
  // console.log(this); // gives the whole object with context
  
}



}

// user2.welcomeMessage() // hitesh , welcome to website
// user2.username="sam"
// user2.welcomeMessage(); // sam , welcome to website

// console.log(this); // gives an empty object


// initially we run JS in browser so the most global object in browes is window hence only console.log(this) gives the context of window


// you can not use this in arrow function


