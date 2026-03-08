
var c=9000

let a=700

// {} is called scope when it comes with if else
if(true){
let a = 10;
const b = 20;
var c = 30;
}
// if we use console outside this scope then it shows error because it is out of scope in case of let and const it is local scope but in case of var this is global scope means it can console outside scope

//  inside if the written is block scope and only accessable inside scope and outside scope it is global scope and can be assicable inside block scope

// console.log(a);
// console.log(b);
// console.log(c);

// scope in inscept is differnt from the scope that you use in code and run by node


function one(){
    const username="anish"

    function two(){
        const website="youtube"
        console.log(username)
    }
    console.log(website)

    two()
}

one()

// function two can access all vriables of function one but vica-vresa is not possible