console.log("Starting to learn arrays in detail...");
// Arrays are a linear data structure.
// It is a list type object
// key, value pair; the keys are indexes.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);

// last element
let lastElement = arr[arr.length - 1];
console.log(`The last element is ${lastElement}`);

// Creating array, another method
const num = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);

// push
arr.push(45);
arr.unshift(77); // add new element at the beginning

// pop
arr.pop();
arr.shift();

arr[0] = 77; // change at index 0 

const names = ['Ravi', 'Shastri', 'Asif', 'Kushal', 'Aarif', 'Bhim', 'Rohit', 'Kushal'];

// indexOf()
let kushal = names.indexOf('Kushal');
let kushal_last = names.lastIndexOf('Kushal');

//search
console.log(names.includes('Bhim'));

// array of objects
let courses = [{
    name: 'C',
    fee: 1000
}, {
    name: 'C++',
    fee: 1200
}, {
    name: "Javascript",
    fee: 2000
}, {
    name: "Python",
    fee: 2500
}];

console.log(courses);

// find() method
// predicate function; inside find()
// mozilla documentation
let result = courses.find(function(element) {
    return element.name === 'Python';
});

// This can be used even with primitive datatypes

// Arrow function
let result2 = courses.find(element => {
    return element.name === "C++";
})

// This can be done in another way as well, arrow function
let result_3 = courses.find(element => element.name === "C++");

// concat arrays
let names1 = ['Ravi', 'Shastri', 'Asif', 'Kushal', 'Aarif', 'Bhim'];
let names2 = ['Rohit', 'Kushal']

let names3 = names1.concat(names2);
console.log(`The concatenated array is : ${names3}`);

// spread operator
let names_4 = [...names1, ...names2];
let names_5 = [...names1, "Rohit", "Kushal"];
console.log(`Spread operator : ${names_4}`);

// Looping arrays
//for loop
console.log("For loop:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// for of
console.log("For of loop :");
for (let name of names) {
    console.log(name);
}

// for each loop using array method
console.log("For each method of array : ");
names.forEach(function(name, index) {
    console.log(name, index);
})

// Join
let student = ['S', 'h', 'i', 'v', 'a'];
student = student.join("*"); // "." can pass any separator
console.log(`The joined string is : ${student}`);

// split
console.log(student.split('*')); // back to array

// Filter method
let cities = [
    { name: 'Kathmandu', population: 1000000 },
    { name: 'Bhaktapur', population: 300000 },
    { name: 'Pokhara', population: 350000 },
    { name: 'Lalitpur', population: 500000 },
    { name: 'Bharatput', population: 250000 },
    { name: 'Dharan', population: 150000 },
    { name: 'Nepalgunj', population: 200000 }
];

console.log(cities.filter(city => city.population > 300000));

// map function
console.log(cities.map(city => city.population * 2));