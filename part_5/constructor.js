function person(name,age){
   this.name = name
   this.age=age
}

function car(make,model){
    this.make=make
    this.model=model
}

let mycar=new car("lexus","ls40")
console.log(mycar);
let mynewcar = new car("tata", "hondai");
console.log(mynewcar);

//if we have to create an object then we have to use new keybord and this object is quite different from the object we learn before it is class,object not that array,object if we did not use new then it shows undefined

function tea(type){
    this.type=type
    this.describe=function(){
        return `this is a cup of ${this.type} tea`
    }
}
let lemontea=new tea("lemon")
console.log(lemontea.describe());

function animal(species){
    this.species=species
}
animal.prototype.sound=function(){
    return `${this.species} makes a sound`
}
let dog=new animal("dog")
console.log(dog.sound());


function drink(name){
    if(!new.target){
        throw new Error("drink must be called with new");
    }
    this.name=name
}
let tea1=new drink("tea")
let tea2=drink("coffe")