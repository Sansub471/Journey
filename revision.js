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