let addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', addChapter);
let parentList = document.getElementById('parent-list');
//let msg = document.getElementById('empty-msg');

function addChapter(event) {
    // check if empty message is present
    if (parentList.children[0].lastElementChild.id == "empty-msg") {
        parentList.children[0].remove();
    }

    let currentBtn = event.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapterName = currentInput.value;
    currentInput.value = " ";

    // Now add li 
    let newLi = document.createElement('li');
    //newLi.classList.add('list-group-item'); // adding class to li
    newLi.className = "list-group-item d-flex justify-content-between";
    //newLi.textContent = currentInput.value;
    // use inner html
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
    <button class="btn btn-warning mx-3" onclick="editChapter(this)">Edit</button>
    <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
    parentList.appendChild(newLi);

}

function removeChapter(currentElement) {
    let liClass = currentElement.parentElement.className;
    currentElement.parentElement.remove(); // removed li

    // check if list is empty
    if (parentList.children.length <= 0) {
        let newLi = document.createElement('li');
        newLi.className = "list-group-item d-flex justify-content-center";
        let newEmptyMsg = document.createElement("h3");
        newEmptyMsg.textContent = "Empty! Please add an item.";
        newEmptyMsg.id = "empty-msg";
        newLi.appendChild(newEmptyMsg);
        parentList.appendChild(newLi);
    }
}

function editChapter(currentElement) {
    if (currentElement.textContent == "Save") {
        currentElement.textContent = "Edit";
        currentElement.className = "btn btn-warning mx-3";
        let currChapterName = currentElement.previousElementSibling.value; // input text comes from here
        let currHeading = document.createElement("h3");
        currHeading.className = "flex-grow-1";
        currHeading.textContent = currChapterName;
        currentElement.parentElement.replaceChild(currHeading, currentElement.previousElementSibling);
    } else {
        currentElement.textContent = "Save";
        currentElement.className = "btn btn-outline-success";
        let currentChapterName = currentElement.previousElementSibling.textContent;
        let currInput = document.createElement("input");
        currInput.type = "text";
        currInput.placeholder = `${currentChapterName}`;
        currInput.className = "form-control";
        currentElement.parentElement.replaceChild(currInput, currentElement.previousElementSibling);
    }
}
// Explore how vanilla javascript works!!