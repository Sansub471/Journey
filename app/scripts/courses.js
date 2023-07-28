let addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', addChapter);
let parentList = document.getElementById('parent-list');

function addChapter(event) {
    // check if empty message is present
    if (parentList.children[0].id == "empty-msg") {
        parentList.children[0].remove();
    }

    let currentBtn = event.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapterName = currentInput.value;

    // Now add li 
    let newLi = document.createElement('li');
    //newLi.classList.add('list-group-item'); // adding class to li
    newLi.className = "list-group-item d-flex justify-content-between";
    //newLi.textContent = currentInput.value;
    // use inner html
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
    <button class="btn btn-warning mx-3">Edit</button>
    <button class="btn btn-danger" onclick="removeChapter(this)">Remove</button>`
    parentList.appendChild(newLi);

}

function removeChapter(currentElement) {
    //console.log(currentElement.parentElement);
    currentElement.parentElement.remove(); // removed li 
    // check if list is empty
    if (parentList.children.length <= 0) {
        let newEmptyMsg = document.createElement("h3");
        newEmptyMsg.textContent = "Empty! Please add a chapter.";
        newEmptyMsg.id = "empty-msg";
        newEmptyMsg.className = "list-group-item d-flex justify-content-center";
        parentList.appendChild(newEmptyMsg);
    } else {

    }

}