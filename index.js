class Cat{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return `${this.name} says meow!`
    }

}

class Dog{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        return `${this.name} says woof!`
    }

}

class Bird{
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    speak(){
        const result =this.sex==="male"? `It's me! ${this.name}, the parrot!`:`${this.name} says squawk!`; 
        return result
    }

}

let cat = new Cat("Sasha", "female");
let  dog= new Dog("Rufio", "male");
let bird = new Bird("Pablo", "male");
let bird2 = new Bird("Mable", "female");