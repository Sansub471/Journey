let addBtn = document.getElementById("add_btn");
addBtn.addEventListener('click', addChapter);

function addChapter(event) {
    let currentBtn = event.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    //console.log(currentInput.value);

    // Now add li 
    let newLi = document.createElement('li');
    newLi.classList.add('list-group-item'); // adding class to li
    newLi.textContent = currentInput.value;

    let parentList = document.getElementById('parent-list');
    parentList.appendChild(newLi);
}