let string = "This is a string.";
let another = 'This is another string';
let another1 = 'You\'ve got no right to take away my plans';
let welcome = "\"Hello welcome to javascript.\"";
let message = "Make it a happy learning journey.";

let concat = 56 + "78";
console.log(string);
console.log(another);
console.log(another1);
console.log(welcome);
console.log(message);
console.log(typeof concat);

let numberString = "123";
numberString = Number(numberString);
console.log(typeof numberString);

numberString.toString();
console.log(typeof numberString);

let outputMsg = welcome + " " + message;
console.log(outputMsg);

// Template literals
let finalMsg = `${welcome} ${message} \n Keep dreaming, and don't be disappointed.`
console.log(finalMsg);

var myname = 'geSpiron'; // string
var meronam = new String("geSpiron"); // slow, don't use it, object

if (myname == meronam) {
    console.log("Your name is : ", myname);
}
// myname === meronam is False, same value type different.

// Let's learn important methods in string
var nameLength = meronam.length; // length of a string
console.log(`Your name has ${nameLength} characters.`);

// Finding a string in a string
var str = "Please \'locate\' where \'locate\' occurs. To \'locate\' means find something.";
var fpos = str.indexOf('locate');
var lpos = str.lastIndexOf("locate");
console.log("The search space is \n", str);
console.log(`The first position of locate is ${fpos}`);
console.log(`The last postion of locate is ${lpos}`);

var startpos = 15;
var pos = str.indexOf('locate', startpos); // starting position of search
var lpos = str.lastIndexOf('locate', startpos); // from end to beginning
// given value becomes the end, and start searching towards beginning.
console.log(`The first positon with starting at ${startpos} is ${pos}`);
console.log(`The last positiong with starting at ${startpos} is ${lpos}`);

var strpos = str.search('locate');
console.log(`Search method, found position is ${strpos}`);

// String slicing
var fruitNames = "AppleBananaKiwi";
var apple = fruitNames.slice(0, 5);
var banana = fruitNames.slice(5, 11);
console.log(`Names of fruit : ${fruitNames}`);
console.log(`The first fruit is : ${apple}`);
console.log(`The secong fruit name is : ${banana}`);