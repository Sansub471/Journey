function isPrime(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            count += 1;
        }
    }

    if (count == 2) {
        console.log("It is a prime number");
    } else {
        console.log("It is not a prime number.");
    }
}



// Formula : a * b = HCF(a, b) * LCM(a, b)
function HCFLCM(a, b) {
    let hcf = 1;
    let c = a;
    if (a > b) {
        c = b;
    }
    for (let i = 1; i <= c; i++) {
        if (a % i == 0 && b % i == 0) {
            hcf = i;
        }
    }
    console.log("The hcf is : ", hcf);
    let lcm = (a * b) / hcf;
    console.log("The LCM is : ", lcm);
    return "The HCF is " + hcf + " and the LCM is " + lcm;
}

let num = prompt("Give me a number : ");
isPrime(num);
let a = prompt("First number : ");
let b = prompt("Second number : ");
let mesg = HCFLCM(a, b);
console.log(msg);