// Root node
console.log(document.documentElement);

// Element node, html tags 
console.log(document.body);
console.log(document.head);

// children nodes or tags
console.log(document.body.childNodes);
// The text node is the space in the page, to ignore this
console.log(document.body.children); // only html tags
// collection of [html elements] but this is not an array
// looks like an array
// to iterate
console.log('Iterate over body.children');
for (node of document.body.children) {
    console.log(node);
}
// convert to array
console.log("Converted to an array : ");
const childrenOfBody = Array.from(document.body.children);
console.log(childrenOfBody);


console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

// siblings
const bodyChildren = document.body.children[0];
const firstLi = bodyChildren.children[0];
const secondLi = bodyChildren.children[1];
console.log(bodyChildren.nextElementSibling);
// text content of previous element sibling
console.log(secondLi.previousElementSibling.textContent);

// table DOM manipulation
// there can be multiple tbody in a html page.
console.log('Table manipulation.');
const tableTag = document.body.children[4];
console.log(tableTag.tBodies[0].rows[0].textContent);
tableTag.tBodies[0].rows[0].cells[0].style = "background-color:red;";
tableTag.tBodies[0].rows[0].cells[1].style = "background-color:blue;";
tableTag.tBodies[0].rows[1].cells[0].style = "background-color:green;";
tableTag.tBodies[0].rows[1].cells[1].style = "background-color:yellow;";
// table can be 'thead' also

// Till now we were navigating the DOM tree
// Now, let's use 'class' and 'id'
console.log(elements_list); // id becomes a global variable
elements_list.style.background = 'magenta';
console.log(table_1);

// getElementbyId
const ulList = document.getElementById("elements_list");
ulList.style.backgroundColor = "crimson";

// using class name
const listItem = document.getElementsByClassName("list-item");
console.log(listItem); // loop through it to change style

// getElementByName, getElementByTag
console.log(document.getElementsByTagName("table"));
console.log(document.getElementsByName("counting-table"));

// query selectors, css style selectors
const listItems = document.querySelectorAll('.list-item');
// for single selection like id, use querySelector('.list-item');
console.log(listItems);

const lastLi = document.querySelector('ul > li:last-child');
// 'nth-child(2)', second child
console.log(lastLi.textContent);

//querySelector is static while getElementById is dynamic i.e. can change
// during runtime.

// let's print the same value from html page
console.log('querySelector vs getElements:');
console.log(allDivs);

// coming back after many shutdowns