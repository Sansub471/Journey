console.log("Arrays exercise....");

let characters = [{
        name: 'Jhon Snow',
        height: '185',
        mass: '90',
        eye_color: 'brown',
        gender: 'male'
    },
    {
        name: 'Daenerys Targaryen',
        height: '167',
        mass: '50',
        eye_color: 'brown',
        gender: 'female'
    },
    {
        name: 'Sandor Clegene',
        height: '198',
        mass: '120',
        eye_color: 'black',
        gender: 'male'
    },
    {
        name: 'Arya Stark',
        height: '165',
        mass: '48',
        eye_color: 'brown',
        gender: 'female'
    },
    {
        name: 'Tyrion Lannister',
        height: '140',
        mass: '55',
        eye_color: 'brown',
        gender: 'male'
    },
];

// Task get an array with all characters name
let charNames = characters.map(character => character.name);
console.log(`Characters name : ${charNames}`);

// Get an array of objects with just name and height properties
let newCharaters = characters.map(function(character) {
    return {
        name: character.name,
        height: character.height
    };
});

// Get he total height of all characters
let height = 0;
characters.forEach(element => {
    height += Number(element.height);
});

// using reduce method
const totalHeight = characters.reduce((prevHeight, character) => {
    return prevHeight + Number(character.height);
}, 0);

// Get characters with mass greater than 100
let massCharacters = characters.filter(function(element) {
    return element.mass > 100;
});

let massCharacters_1 = characters.filter(element => element.mass > 100);

// all male
let maleCharacters = characters.filter(character => character.gender === 'male');

// sort by gender
let genderSort = characters.sort(function(a, b) {
    let x = a.gender.toLowerCase();
    let y = b.gender.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});
console.log(`The sorted array by gender:`);
genderSort.forEach(character => {
    console.log(character);
});

// sort by name
let nameSort = characters.sort(function(a, b) {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();
    if (x < y) { return -1; }
    if (x > y) { return 1; }
    return 0;
});
console.log("The sorted names are : ");
nameSort.forEach(character => {
    console.log(character.name);
});

// does every character have mass more than 407?
let everyMass = characters.every((character) => {
    return character.mass > 45;
});
console.log(`Every character has mass more than 45 : ${everyMass}`);
// does every character have blue eyes?
let everyEye = characters.every((character) => character.eye_color === 'blue');
console.log(`Every character has blue color eye : ${everyEye}`);

// Is there at least one male character
let atLeast1Male = characters.some((character) => character.gender === 'male');
console.log(`At least one male character : ${atLeast1Male}`);

// Is there at least one character taller than 190?
let taller = characters.some((character) => character.height > 190);
console.log(`At least one character taller than 190: ${taller}`);