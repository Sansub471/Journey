let btn = document.getElementById('toggleBtn');
btn.addEventListener('click', toggleBulb);

function toggleBulb(e) {
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

// console.log("No motivation left to cotinue my job.")