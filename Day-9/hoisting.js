console.log("Hoisting lesson, day 9");
// Execution context : memory creation and thread of execution

sayHello();

console.log(i);

function sayHello() {
    console.log("Hello.");
}

var i = 77;

// Why is i undefined?
// Well during global execution context creatin, variable is defined, but 
// not assigned. All variables are udefined during declaration.
// There are two phases : memory allocation and code execution.
// Variable is defined suring memory allocation, which happens first
// due to hoisting, but the vale is assigned later during execution.

// When the code comes at line 6 during execution phase, 'i' is defined 
// but it is 'undefined' as the initialization is not done yet.

// i gets initialized when the execution phase reaches to line 12
// so at the end, of execution if you print i in console, the value
// will be 77.

// Let's see another example of hoisting.

x = 17;
console.log(`The value of x is ${x}`);
var x;

// The declaration is moved up due to hoisting, which literally means
// raise or lift.

/*y = 471;
console.log(`The value of y is ${y}`);
let y;
*/

// Variables and constants declared with 'let' or 'const' are not hoisted.
// Initializations are not hoisted, only declarations are hoisted.

/*
{
    carName = "Volvo";
    console.log(carName);
    let carName;
}
*/

// In th above block, the code is aware of the variable, but it cannot 
// be used until it has been declared.


// Variable declared using let or const is on temporal dead zone.
// i.e. those variables cannot be accessed until initialized.

//sayHi(); // error because var keyword makes sayHi undefined, which is not
// a function.

var sayHi = function() {
    console.log("Hi");
}

sayHi(); // This is okay.

// Variable shadowing
let foof = 'Car';
if (true) {
    let foof = 'Bus';
    console.log(foof);
}

// This is variable shadowing, the variable with same name but its 
// scope is changed.


// Variables declared with 'var' cannot have block scope.
var bar = 'foo';
if (true) {
    var bar = 'beer';
    console.log(bar);
}
console.log(bar);

// Let's see with a function
var greeting = 'Hello';
let kcha = 'Kcha';

function greet() {
    var greeting = 'Namaste';
    let kcha = 'Sanchai';
    console.log("Inside function ");
    console.log(`The greeting is : ${greeting}`);
    console.log(kcha);
}
greet();
console.log("Outside function : ");
console.log(`The greeting is : ${greeting}`);
console.log(kcha);

// Here greeting inside the function is local to the function
// Execution context:
// GEC : Phase memory allocation:
// greeting and kcha both are undefined. greet() function stored.
// Now, for execution, line 99 created another execution context for the function
// inside at first, greeting and kcha both undefined, and then initialized during 
// exeution phase.
// The current values are printed. The function completes, and execution context
// is popped out. Then in the GEC, line 101 and 102 prints the values from
// GCE. This was also the example of shadowing.

// Illegal shadowing

let foo = 'bar';
var bar = 'foo';
if (true) {
    //var foo = 'baz'; // foo has already been declared
    // This is illegal because var is trying to make it global
    // but we already have this variable declared.
    // var cannot have block scope.
    var bar = 'foodbar';
    console.log(foo);
    console.log(bar);
}
console.log(foo);
console.log(bar);

// const keyword : it is read only keyword
// value must be initialized while declaration.

const food = 'Hugry';
// const food; // error
let khana;
khana = 'Pizza'; // okay