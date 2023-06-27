console.log("Hello from objects exercise : ");
const product = {
    itenName: 'Flower',
    price: 50,
    discount: 20,
    itemCode: 'F40'
};
console.log(product);

// Factory function
function createProduct(name, code) {
    return {
        itenName: name,
        price: 50,
        discount: 20,
        itemCode: code
    };
}

const product_1 = createProduct('Rose', 'R45g');
console.log(product_1);

// Constructor function
function Product(name, code) {
    this.itenName = name,
        this.price = 50,
        this.discount = 20,
        this.code = code
};

const product_2 = new Product('Pineapple', 'PN38f');
console.log(product_2);