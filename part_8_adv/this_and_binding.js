const person = {
  name: "anish",
 greet () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

const greetfunction = person.greet;
greetfunction(); // it shows undefined because context is lost when you try to transfer memory to another variable

const boundgreet = person.greet.bind({ name: "hitaksh" });
boundgreet();

//bind,call and apply


