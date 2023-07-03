// strings and methods
let paragraph = "Support WebAssembly debugging" +
    "Chrome DevTools supports WebAssembly" +
    "debugging with DWARF information (using" +
    "an extension)."
let line = paragraph.slice(0, 20);

// find area of a squre
let square = {
    set side(length) {
        this.length = length;
    },
    get area() {
        return this.length ** 2;
    }

}

square.side = 10;
console.log(`The area of square of side ${square.length} is ${square.area}`);

square.side = 15;
console.log(`The area of square of side ${square.length} is ${square.area}`);

// make your join function, don't use join from arrays
// ...words rest operator
function joinString(separator, ...words) {
    let sentence = '';
    words.forEach((word, index) => {
        if (index != words.length - 1) {
            sentence += word + separator;
        } else {
            sentence += word;
        }
    })
    return sentence;
}

console.log(joinString('-', 'My', 'name', 'is', 'geSpiron'));

// Question 3
// array destructuring
// With array destructuring, you can unpack values from an array into individual variables.
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let [a, b, c] = arr;
let [, , , ...others] = arr;
console.log(`First  : ${a}`);
console.log(`Second : ${b}`);
console.log(`Third  : ${c}`);
console.log(`Others : ${others}`);