let a = 10;
let b = 25;
let c = 15;
console.log(a);

// Check even or odd number.


if(c % 2 === 0)
{
    console.log("Even");
}
else
{
    console.log("Odd");
}

// Check largest of 3 numbers.

if(a > b && a > c)
{
    console.log("A is largest :", a);
    
} else if(b > a &&  b > c)
{
    console.log("B is Largest :", b);
    
}
else{
    console.log("C Is Largest :", c);
    
}
//Check if number divisible by both 3 and 5.
if(a % 3 === 0 && a % 5 ===0)
{
console.log("Number is divisible by both 3 and 5");    
}

console.log(5 + "5");
console.log("5" - 2);
console.log(true + 1);

console.log([] + []);
console.log([] + {});
console.log({} + []);