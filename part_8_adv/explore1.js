console.log("anish");

function sayHello(){
  console.log("i would like to say hello");  
}

setTimeout(()=>{
  sayHello();
},4000);

for(let i=0;i<10;i++){
    console.log(i);
}
// it prints for loop first after that it prints sayhello but sequence of code is opposite of it and this is called asyncronous behaviour of java script