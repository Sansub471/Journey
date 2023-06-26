let name = "Cow";
let legs = 4;
let type = "mammal";
let domestic = true;

//object
let animal = {
    name: "Cow",
    leg: 4,
    type: "mammal",
    domestic: true
}
console.log(`${animal.name} has ${animal['leg']} legs.`);
console.log(animal);

// Arrays
let selectBooks = ["To Kill a Mockingbird", "1984", "The Great Gatsby"];
console.log(selectBooks);
console.log(`The second book is ${selectBooks[1]}`);

//Functions
function PrimefactorsOf(number) {
    let primeFactors = [];
    while (number != 1) {
        for (let i = 2; i <= number; i++) {
            if (number % i == 0) {
                primeFactors.push(i);
                number /= i;
                break;
            }
        }
    }
    return primeFactors;
}

let num = 120;
let factors = PrimefactorsOf(num);
console.log(`The factors of ${num} are : ${factors}`);