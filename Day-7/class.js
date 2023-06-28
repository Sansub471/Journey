// objects can be created without class in JS
// Declaring a class
class Product {
    constructor(itemName, price, discount, code) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.code = code;
    }
    getItemName() {
        return this.itemName + " is a Product.";
    }
    product() {
        console.log("I'm available in all products.");
    }
}

let pencil = new Product('Pencil', 20, 1, 'P21HB');
console.log(pencil);

// creating a class with an expression
const Product_1 = class Product {
    constructor(itemName, price, discount, code) {
        this.itemName = itemName;
        this.price = price;
        this.discount = discount;
        this.code = code;
    }
    discountAmount() {
            this.discountAmt = this.price * this.discount / 100;
        }
        // this is getter method
    get getDiscountAmount() {
        return this.discountAmt;
    }

    // this is setter method
    set setDiscountValue(value) {
        this.discount = value;
    }
};

let laptop = new Product_1('Laptop', 500000, 10, 'LPi7g5');
console.log(laptop);
laptop.discountAmount();

// getter and setter
// get a variable and set a variable

let discountAmt = laptop.getDiscountAmount;
console.log(`The discount amount is ${discountAmt}`);
laptop.setDiscountValue = 15;
laptop.discountAmount();
discountAmt = laptop.getDiscountAmount;
console.log(`New discount amount is ${discountAmt}`);

// extend a class
// Is it like inheritance?
class Furniture extends Product {
    constructor(itemName, price, discount, code) {
        super(itemName, price, discount, code)
    }
    getItemName() {
        return this.itemName + " is a Furniture";
    }
    furniture() {
        console.log("I'm only available in furniture.");
    }
}

let pen = new Product('Pencil', 20, 2, 'Pncg4');
let table = new Furniture('Table', 4000, 100, 'TB78fg');
console.log(pen.getItemName());
console.log(table.getItemName());
table.product();

// super function calls the constructor of parent's class.