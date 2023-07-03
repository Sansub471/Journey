console.log("Let's clear the concept of this keyword in js.");

let person = {
    name: "geSpiron",
    age: 22,
    eye_color: "black",
    gender: "male",
    profession: "student",
    personalDetail() {
        return this.name + " is a " + this.gender + " " + this.profession + ".";
    }
};
console.log(person.personalDetail());

// Another object
/*
let counter = {
    count: 0,
    increment: function() {
        counter.count++;
    }
}

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter);
*/

// use factory function
console.log("Factory function section : ");
let counter = createCounter();
let counter1 = createCounter();

function createCounter() {
    return {
        count: 0,
        increment: function() {
            this.count++;
            console.log(this);
        }
    }
}

counter1.increment();
counter.increment();

// use external variable
console.log("External variable section : ");
var counter2 = 0;

function incrementCounter() {
    //counter2++;
    this.counter2++;
    console.log(this); // this is refering to window object
    // this inside the function targets the window object
    // which is the global scope

}

// function made in global scope gets attached to the window object.
// this keyword refers to the object from where we have called an function

incrementCounter();
incrementCounter();
console.log(counter2);

// this can be used at the global scope as well
console.log("This is the global scope  : ");
console.log(this);

// this in constructor function
// this function is in global scope
// but this inside Car() refers to the car object itself
// this is because we have used 'new' keyword below
// which creates a new object and following properties are attached to 
//that object.
function Car(name) {
    this.name = name;
    this.start = function() {
        console.log(this.name + ' started.');
        console.log(this);
    }
}

let toyota = new Car('Hilux');
toyota.start();

// let's try without new keyword
// now 'this' means the windoe object
// the properties are attached to the window object
let hyundai = Car('Kona');
this.start();