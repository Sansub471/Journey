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