// Arrays and arrays methods
var fruits = ["Apple", "Orange", "Mango", "Banana", "Kiwi", "Pear"]

console.log(fruits);

var fruitNames = fruits.toString(); // comma separated string
console.log(fruitNames);

var joinedStr = fruits.join("-");
console.log(joinedStr);

fruits.pop(); // remove the last element
fruits.push("Papaya"); // add an element at the last
console.log(fruits);

var firstFruit = fruits.shift(); // first element taken out from the array

console.log(`First fruit in the array is ${firstFruit}`);
console.log(fruits);

var newArray = fruits.unshift("Lemon"); // add new element at the beginning
console.log(fruits);
console.log(`New array length = ${newArray}`);

//splice()
var fruitsSpliced = fruits.splice(2, 2, "Cherries", "Strawberry");
console.log(`Fruits spliced : ${fruitsSpliced}`);
console.log(fruits);

fruitsSpliced = fruits.splice(2, 0, "Banana", "Mango");
console.log(`Spliced fruits : ${fruitsSpliced}`);
console.log(fruits);

// removing elements with splice
fruits.splice(0, 1); // first element removed
console.log(fruits);

// concat()
var arr1 = ["Subash", "Anita"];
var arr2 = ["Anita", "Sarita", "Mainali"];
var arr3 = ["Eliza", "Sangits"];

var mySiblings = arr1.concat(arr2, arr3); // any no of arguments
var family = mySiblings.concat("Sudikshay");
console.log(family);

//slice()
var kingFruit = fruits.slice(2); // position two to the end
console.log(kingFruit);

kingFruit = fruits.slice(1, 3); // position one to three.
console.log(kingFruit);

// Sorting Arrays
fruits.sort();
console.log(`The sorted names are ${fruits}`);

fruits.reverse();
console.log(`The sorted names in reverse are ${fruits}`);

// Numeric sort
var points = [40, 100, 1, 5, 25, 10]
points.sort(function(a, b) { return a - b; }); // ascending sort
console.log(points);
points.sort(function(a, b) { return b - a; }); // descendign
console.log(points);

points.sort((a, b) => a - b); // ascending
console.log(points);
points.sort((a, b) => b - a); // descending
console.log(points);

// Find maximum
function myArrayMax(arr) {
    return Math.max.apply(null, arr);
}
var highestVal = myArrayMax(points);
console.log(`The maximum value in the array is ${highestVal}`);

//Find minimum
function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

var smallestVal = myArrayMin(points);
console.log(`The smallest value in the array is ${smallestVal}`);

// Sorting Array of objects

// Array iteration