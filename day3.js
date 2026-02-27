// 🧠 1️⃣ for Loop
for (let i = 1; i <= 5; i++) {
    // console.log(i);
}

// 🧠 2️⃣ while Loop
let i = 1;

while (i <= 5) {
    //console.log(i);
    i++;
}

// 🧠 3️⃣ do…while Loop
let a = 1;

do {
    //console.log(a);
    a++;
} while (a <= 5);

// 🧠 4️⃣ Even Numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}

// 🧠 5️⃣ Prime Number Logic
let num = 7;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    // console.log("Prime Number");
} else {
    // console.log("Not Prime");
}

//Task 1
for(let d = 10 ;d >=1; d--)
{
    // console.log(d);
  
}
//Task 2
let mul = 5;
for(let i = 1; i  <= 10; i++)
{
    // console.log(`${mul} * ${i} = ${mul*i}`);
}
// Taks 3 prime number
let limit = 20;

for (let num = 2; num <= limit; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        // console.log(num);
    }
}

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
       // console.log(i, j);
    }
}
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
}