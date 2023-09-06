function nameFunc() {
    console.log('This is the revision script.');
}

nameFunc();

let string = 'This is a string';
let another = 'You\'ve got no right to take away my plans.';
console.log(another);

// Template literals
let finalString = `${string} ${another} \n Keep dreaming, and don't be dissappointed`;
console.log(finalString);

// String length
let strLength = string.length;
console.log(strLength);

// Finding a string in a string
var str = "Please \'locate\' where \'locate\' occurs. To \'locate\' means find something.";
var fpos = str.indexOf('locate');
var lpos = str.lastIndexOf("locate");
console.log("The search space is \n", str);
console.log(`The first position of locate is ${fpos}`);
console.log(`The last postion of locate is ${lpos}`);