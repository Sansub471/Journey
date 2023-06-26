const val1 = '5';
const val2 = 9;

let sum = val1 + val2;
console.log(`The sum is ${sum}`);

//Whys is this happening?
// The compiler checks the data type of val1 and val2 and since,
// they are not same it converts them into string
// The compiler first converts val2 into a string and concatenates them.

// An explicit conversion is required if we want to add the numbers.
sum = Number(val1) + val2;
console.log(`The sum is ${sum}`);

//Checkout
//dorey.github.io