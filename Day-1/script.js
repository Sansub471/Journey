let namasteBtn = document.querySelector('button');
namasteBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter name of the Student');
    namasteBtn.textContent = 'Roll number 1 : ' + name;
}