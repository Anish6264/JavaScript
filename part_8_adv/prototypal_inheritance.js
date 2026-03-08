function person(name){
    this.name=name
}


person.prototype.greet=function(){
    console.log(`Hello, my name is ${this.name}` );
}

let anish=new person("anish");
anish.greet() //Hello, my name is anish
