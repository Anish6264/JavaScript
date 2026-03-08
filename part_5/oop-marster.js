let car={
    make:"toyota",
    model:"camry",
    year:2000,
    start:function(){
        return `${this.make} car got started in ${this.year}`;
    },
};
// console.log(car.start());

function Person(name,age){
    this.name=name
    this.age=age
}
let john=new Person("jhon",30)
// console.log(john);


function Animal(type){
    this.type=type
}

Animal.prototype.speak=function(){
    return `${this.type} makes a sound`
}

Array.prototype.Anish=function() {
    return `custom method ${this}`
}
let myarray=[1,2,3];
// console.log(myarray.Anish());
let mynewarray = [1, 2, 3,5,6,9];
// console.log(mynewarray.Anish());
let mynew2array = [1, 2, 3,"anish","sharma",5,6,8];
// console.log(mynew2array.Anish());


// let dog=new Animal("dog")
// console.log(dog.speak());



class vehical {
    constructor(make,model)
{
    this.make=make
    this.model=model
}
start(){
    return `${this.model} is a car from ${this.make} `
 }
}

class car1 extends vehical{
    drive(){
        return `${this.make}:  this is an inheritance example`
    }
}
let my1car = new car1("lexus", "ls40");
// console.log(my1car.start());
// console.log(my1car.drive());


let vehone = new vehical("tata", "nano");
// console.log(vehone.make);

//encapulation

class bankaccount{
    #balance=0;

    deposite(amount){
        this.#balance+=amount
        return this.#balance
    }
    getbalance(){
        return `$ ${this.#balance}`;
    }
}
 let account=new bankaccount()
//  console.log(account.getbalance());
 
//abstraction

class cm{
    start(){
        //call DB 
        //filter value
        return `starting the machine...`
    }
    brewcoffee(){
        //coomplex calculation
        return `brewing coffee`
    }
    pressstartbutton(){
        let mess1=this.start()
        let mess2=this.brewcoffee()
        return `${mess1} + ${mess2}`
    }
}

let mymachine=new cm()
// console.log(mymachine.start());
// console.log(mymachine.brewcoffee());
//console.log(mymachine.pressstartbutton()); //showing undefined bcz we are returning the start and brewcoffee function we are not stooring anything so for getting value we give store the return value oof functioons in varibles and then we return the varibles in the other function 


//ploymorphism

class Bird{
    fly(){
        return `flying...`
    }
}

class penguins extends Bird{
    fly(){
        return `penguins cant fly`
    }
}

let bird=new Bird()
let penguin=new penguins()
// console.log(bird.fly());
// console.log(penguin.fly());

// static method

class calculator{
    static add(a,b){
        return a+b
    }
}

// let minical = new calculator();
// console.log(minical.add(2,1));


// console.log(calculator.add(2,5));

//getter and setter

class employee{

    #salary;
 constructor(name,salary){
    if(salary<0){
        throw new Error("it can not negative");
        
    }
    this.name=name
    this.#salary=salary
 }
 get salary(){
    return `you are not allowed to see salary`
 }

 set salary(value){
    if(value<0){
        console.error("invalid salary")
    }else{
        this._salary=value
    }
 }
}
let emp=new employee("Anish",-10000000)
console.log(emp._salary);
emp.salary=700000
