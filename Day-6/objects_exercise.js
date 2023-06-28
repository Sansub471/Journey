console.log("Hello from objects exercise : ");
const product = {
    itenName: 'Flower',
    price: 50,
    discount: 20,
    itemCode: 'F40'
};
console.log(product);

// Factory function
function createProduct(name, price, discount, code) {
    return {
        itenName: name,
        price: price,
        discount: discount,
        itemCode: code,
        discountAmount() {
            return (discount * price) / 100;
        }
    };
}

const product_1 = createProduct('Rose', 120, 14, 'R45g');
let amount = product_1.discountAmount();
console.log(product_1);
console.log(`The discount amount is ${amount}`);

// Constructor function
function Product(name, price, discount, code) {
    this.itenName = name,
        this.price = price,
        this.discount = discount,
        this.code = code,
        this.discountAmount = function() {
            return (this.price * this.discount) / 100;
        }
};

const product_2 = new Product('Pineapple', 150, 7, 'PN38f');
let disamt = product_2.discountAmount();
console.log(product_2);
console.log(`The discount amount is ${disamt}`);