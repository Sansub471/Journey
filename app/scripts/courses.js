let addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', addChapter);

function addChapter(event) {
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

    let parentList = document.getElementById('parent-list');
    parentList.appendChild(newLi);
}

function removeChapter(currentElement) {
    //console.log(currentElement.parentElement);
    currentElement.parentElement.remove(); // removed li 
}