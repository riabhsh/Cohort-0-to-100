// Class name should be in capital(just a convention)
// blueprint
// constructor
// this keyword
// function
// static function (these are not associated with objects these are associated with class itself, and called by class only)

// class Animal{
//     constructor(name, legCount, speaks){
//         this.name = name;
//         this.legs = legCount;
//         this.speaks = speaks;
//     }

//     static myType(){
//         console.log("ANIMAL");
//     }

//     speak(){
//         console.log("hi there " + this.speaks);
//     }
// }
// let dog = new Animal("german", 4, "bhow bhow");
// let cat = new Animal("persian", 4, "meow meow");
// dog.speak();
// cat.speak();
// Animal.myType();


class Human{
    constructor(namee, age){
        this.name = namee;
        this.age = age;
    }

    static staticMethod(){
        return "static method is called!";
    }

    eat(){
        console.log(this.name+" is Eating");
    }

    sleep(){
        console.log(this.name+" is Sleeping")
    }

    work(){
        console.log(this.name+" has no work")
    }
}

class Engineer extends Human{
    constructor(name, age){
        super(undefined, age);
        this.name = name;
    }

    work(){
        console.log(this.name + " is an Engineer");
    }
}

let human = new Human("Rishu", 24);
let human2 = new Engineer("Rishabh Maurya", 24);


console.log(human);
human.eat();
human.work();

console.log(human2);
human2.eat();
human2.work();

console.log(Human.staticMethod()+" by Human Class");