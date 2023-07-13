function callMe(event) {
    // this is the button which is calling this function
    console.log(this);
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.clientY);
    console.log(event.clientX);
    alert("Don't lose hope! Things will get right.");
}
//clickBtn.onclick = callMe; // pass the function, not call

// Add event listener
clickBtn.addEventListener('click', callMe);
// can call different functions using event listener

//clickBtn.removeEventListener('click', callMe);
// use event listener with a separate function, created by yourself.