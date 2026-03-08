// * after function make function generator
function* numbergenerator(){
   yield 1
   yield 2
   yield 3
}

let gen=numbergenerator()
let gentwo=numbergenerator()
console.log(gen.next().value) ;
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // undefined

console.log(gentwo.next().value);
console.log(gentwo.next().value);