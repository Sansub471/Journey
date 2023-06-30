// There is a principle of least access in programming
// Use less resource, and get the output

// Two types: global scope, local scope/functional scope
// and block {} scope after ES6
var naam = "geSpiron"; // var keyword attaches it to window object

// global scope example
function sayName() {
    var marks = 90;
    console.log(naam);
}

sayName();
//console.log(marks); // Local to function sayName()

var x = 77;

function first() {
    console.log("This is the first function : ");
    var x = 1;
    console.log(x);
    // Local scope 1
    function childofFirst() {
        // Local scope 2
        var x = 24;
        console.log(x);
    }
    childofFirst();
}

first();

function second() {
    console.log("This is the second function : ");
    console.log(x);
}

second();

{
    console.log("This is a block scope with var : ");
    var x = 100;
    console.log(x);
}

console.log(`This is out block scope  using var: ${x}`); // still same beacuse of var

// let or const would be different
{
    console.log("This is a block scope using let: ");
    let x = 535;
    console.log(x);
}

console.log(`This is out block scope let : ${x}`);

if (true) {
    let day = 'Paddy Day';
}
//console.log(`Today is ${day}`); // let means out of scope
// Block scope was introduced after ES6

// Lexical scope, something like inheritance
console.log("Lexical scope : ");

function grandParent() {
    var name = "Krishna";

    function parent() {
        console.log(name);

        function son() {
            var likes = "coding";
        }
        console.log(likes); // error, likes out of scope
        son();
    }
    parent();
}

grandParent();