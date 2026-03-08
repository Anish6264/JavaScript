// Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`db conected`);
    
}) ();
// this is named IIFE because it has a name
//  this is how you directly execute the function
//  we also have to end the function so that we can write more IIFE 

//  why we use IIFE 
// somw times global scope variable cause pollution so to remove that pollution we use IIFE

((name)=>{
    console.log(`anish is here ${name}`)
})("aman");
// this is how we pass parameters in IIFE function 