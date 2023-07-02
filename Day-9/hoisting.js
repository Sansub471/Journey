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
// initializations are not hoisted, only declarations are hoisted.

/*
{
    carName = "Volvo";
    console.log(carName);
    let carName;
}
*/