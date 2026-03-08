let computer={
    cpu: 12,
    ram: 14,
    rom: 75
}
let lenvo={
    screen:"hd",
    __proto__:computer
}
let tom={}
// console.log(`computer`, computer.__proto__);
// console.log(`lenvo`, lenvo.__proto__);

let genericcar={tyers:4};

let tesla={driver:"ai"};

Object.setPrototypeOf(tesla, genericcar) //in the tesla we are accessing the prooperty of generic car
console.log(`tesla`, tesla);
console.log(`genericcar`, genericcar);
console.log(`tesla`, tesla.tyers);
// tesla is accessing the property but not suggesting so we do not use this way we use follloeing ways .
console.log(`tesla`,Object.getPrototypeOf(tesla));
