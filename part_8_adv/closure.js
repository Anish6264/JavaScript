function outer(){
    let counter=4;
    
    return function () {
      counter++;
      return counter;
    };
}

let increment=outer(); //it return inner function so increment is a function 
console.log(increment()); //5



// closure are the function that has access to its outer scope even when the outer function has returned and they retained the value of the outer scope even after the outer function has returned 