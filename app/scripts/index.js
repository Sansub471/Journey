let btn = document.getElementById('toggleBtn');
btn.addEventListener('click', toggleBulb);

function toggleBulb(e) {
    bulb.src = "./images/lighton.jpg";
}