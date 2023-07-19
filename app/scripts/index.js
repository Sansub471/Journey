let btn = document.getElementById('toggleBtn');
btn.addEventListener('click', toggleBulb);

function toggleBulb(e) {
    // Better to first check the current state of the light
    if (btn.textContent.includes('On')) {
        bulb.src = "./images/lighton.jpg";
        btn.textContent = "Turn Off";
    } else if (btn.textContent.includes('Off')) {
        bulb.src = "./images/lightoff.jpg";
        btn.textContent = "Tun On";
    } else {
        console.log("Error Unexpected text content in the button!");
    }
}