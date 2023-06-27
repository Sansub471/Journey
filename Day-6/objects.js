const subject = {
    lecture: 10,
    section: 3,
    title: "JavaScript",
    notes: {
        introduction: "Welcome to JS course"
    },
    enroll() { console.log("You are successfully enrolled.") }
}

subject.enroll();
console.log(subject);

// Objects are dymanic, new properties can be added during runtime
subject.price = 999;
//const variables cannot be redeclared, but in object it's okay
console.log(subject);

// If we need multiple course objects, this is not efficient
// There is a bette approach; factory function or constructor function

// Factory fuction approach
console.log("Factory function approach.");

function createCourse(title) {
    return {
        lecture: 10,
        section: 3,
        title: title,
        price: 500,
        notes: {
            introduction: `Welcome to  ${title} course, happy learning!`
        },
        fee() { console.log(`Your fee is ${this.price}`); },
        pay() { console.log("Payment processing!! Completed."); },
        enroll() {
            console.log(`You have been enrolled in ${this.title} course.`);
            console.log(this.notes.introduction);
            console.log("\n");
        }
    }
}

const course = createCourse("Python");
course.fee();
course.pay();
course.enroll();

console.log("Let's look at the constructor of course: ");
console.log(`The constructor of course is : ${course.constructor}`);

// constructor function
function Course(title) {
    this.lecture = 10,
        this.section = 3,
        this.title = title,
        this.price = 500,
        this.notes = {
            introduction: `Welcome to ${this.title} course, happy learning.`
        },
        this.fee = function() { console.log(`Your fee is ${this.price}`); },
        this.pay = function() { console.log("Payment processing !! Completed."); },
        this.enroll = function() {
            console.log(`You have been enrolled in ${this.title} course`);
            console.log(this.notes.introduction);
            console.log("\n");
        }
}

const newcourse = new Course("JavaScript");
newcourse.fee();
newcourse.pay();
newcourse.enroll();
delete newcourse.section; // delete section property
console.log(newcourse);
//class constructor follows pascal case naming

// Make a new function
newcourse.displayInformation = function() {
    console.log(`Information about ${this.title} course: \n`);
    this.fee();
    this.pay();
    this.enroll();
}
newcourse.displayInformation();
console.log("Let's look at the constructor of newcourse :");
console.log(newcourse.constructor);
// confusing thing about JS
// All variables are objects in JS
// Primitive datatypes are also objects, but they are immutable i.e. 
// we can't add new features or properties unlike in userdefined data types.

// What is the difference between the constructor of course and newcourse?
// Who is the constructor of factory function, createCourse()?
// Ans --> function Object() {[native code]}
// This is already written in JS engine. Whenever we use factory function or
// object literal, internally the code looks like :

/*
E.g. Our code
const course = {
    title: title,
    enroll(){console.log("You have successfully joined the class.")}
}

Internally, 
const course = new Object({
    title : title,
    enroll(){console.log("You have successfully joined the class.")}
})
*/

const str = "JavaScript";
// This is a string literal
// infact an object, but immutable.

// function is also an object in JS 
// The Course() constructor function created earlier is actually
// executed using Function() inside th JS engine. It looks something like:

const course_1 = new Function('title', `
    this.lecture = 10,
    this.section = 3,
    this.title = title,
    this.price = 500,
    this.notes = {
        introduction: \`Welcome to \${this.title} course, happy learning.\`
    },
    this.fee = function() { console.log(\`Your fee is \${this.price}\`); };
    this.pay = function() { console.log("Payment processing !! Completed."); };
    this.enroll = function() {
        console.log(\`You have been enrolled in \${this.title} course\`);
        console.log(this.notes.introduction);
        console.log("\\n");
    },
    this.displayInformation = function() {
        console.log(\`Course information: \${this.title}\`);
        this.fee();
        this.pay();
        this.enroll();
    }
`);

const course_3 = new Function('title', `
    this.title = title;
    this.enroll = function() {
        console.log(\`You are enrolled in \${this.title} course.\\n\`);
    };
`);

console.log("Constructor using Function()");
const course_2 = new course_3('Django');
course_2.enroll();

const course_4 = new course_1('Flask');
course_4.displayInformation();

// primitive datatype and reference datatype
// primitive datatype
let number = 10;
let number_2 = number; // pass by value
number = 15;
console.log(number);
console.log(number_2);

// Reference Datatype
let obj = { number: 10 };
// pass by reference
let obj_2 = obj;

obj.number = 15;
console.log(obj);
console.log(obj_2);

// pass by value, object
const syllabus = {
    title: 'JavaScript',
    enroll() {
        console.log("You have been enrolled.");
    }
};
console.log(syllabus);

const syllabus_1 = {...syllabus }; // spread operator
syllabus_1.title = 'Python';
console.log(syllabus_1);

// Another method
const syllabus_2 = Object.assign({}, syllabus); // target : {}, source : syllabus
// you can as many sources as you want to
syllabus_2.title = "C++";
console.log(syllabus_2);

// using for in loop
const syllabus_3 = {};
for (let key in syllabus) {
    //console.log(key, syllabus[key]);
    syllabus_3[key] = syllabus[key];
}
console.log(syllabus_3);

//for of loop
for (let k of Object.keys(syllabus)) {
    console.log(k, syllabus[k]);
}