console.log("Arrays exercise....");

var characters = [{
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
var charNames = characters.map(character => character.name);
console.log(`Characters name : ${charNames}`);

// Get an array of objects with just name and height properties
var newCharaters = characters.map(function(character) {
    return {
        name: character.name,
        height: character.height
    };
});

// Get he total height of all characters
var height = 0;
characters.forEach(element => {
    height += Number(element.height);
});

// Get characters with mass greater than 100
var massCharacters = characters.filter(function(element) {
    return element.mass > 100;
});

var massCharacters_1 = characters.filter(element => element.mass > 100);

//