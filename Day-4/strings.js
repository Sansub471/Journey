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

var sl = fruitNames.slice(-12, -2);
// last character in the string is -1
// from last: -1, -2, -3, -4 and so on.
// slice(-2) means last two characters
//slice(-12, -2) from -12 to -2
console.log(`Negative parameter slicing : ${sl}`);

// Find substring, no negative values
var app = fruitNames.substring(0, 5);
var toend = fruitNames.substring(5);
console.log(`The substring is ${app}`);
console.log(`Second part of the string is ${toend}`);

//Replacing string content
var paragraph = "JavaScript, the versatile language powering " +
    "dynamic web applications, unleashes the full " +
    "potential of interactivity with its robust features " +
    "and seamless integration. With JavaScript, you can " +
    "revolutionize the way users experience your website " +
    "by leveraging the power of JavaScript's JavaScript-driven " +
    "capabilities.";
console.log(paragraph);
//Replacing string content
var newparagraph = paragraph.replace("JavaScript", "Python");
//replaces only the first match; case sensitive
console.log(newparagraph);

// To make case insensitive, use regular expression with an /i
// Regular expressions are written without quotes.
var newp = paragraph.replace(/javascript/i, "Python");
console.log(newp);

//To repalce all matches, case sensitive
var replaceall = paragraph.replace(/JavaScript/g, "Python");
console.log(replaceall);
//case insensitive, and all matches
var replaceall1 = paragraph.replace(/javascript/ig, "Python");
console.log(replaceall1);

//converting case
var text1 = "JavaScript, Python, C++, C, Pascal, Go, Rust";
var upper = text1.toUpperCase();
console.log(upper);
var lower = text1.toLowerCase();
console.log(lower);

// concat
var msg1 = 'Hello';
var msg2 = ' NEPAL';
var greeting = msg1.concat(msg2);
console.log(greeting);

//remove whitespaces from both sides of a string
var spaces = "  Hello world    ";
console.log(spaces);
spaces = spaces.trim();
console.log("Trimmed string:", spaces);

//extracting characters
var pos = 0;
var firsChar = spaces.charAt(pos);
console.log(`In string '${spaces}' character at position ${pos} is ${firsChar}`);
var charCode = spaces.charCodeAt(pos);
console.log(`Unicode of character ${firsChar} is : ${charCode}`);

//converting a string to an array
var txt = "a,e,i,o,u";
var vowels = txt.split(",");
console.log(`The vowels are : ${vowels}`);