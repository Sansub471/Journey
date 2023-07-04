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
const tableTag = document.body.children[1];
console.log(tableTag.tBodies[0].rows[0].textContent);