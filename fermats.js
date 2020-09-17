/*
Fermat’s Last Theorem says that there are no positive integers a, b, and c such that
a^n + b^n = c^n 
for any values of n greater than 2.
Write a function named checkFermat that takes four parameters— a, b, c and n—and checks to see if Fermat’s theorem holds. 
If n is greater than 2 and
a^n + b^n = c^n
the program should print, “Holy smokes, Fermat was wrong!” Otherwise the program should print, “No, that doesn’t work.”
*/
const prompt = require('prompt-sync')();

function powerCalc(x, y) {
    let z = 1;
    for (let i = 1; i <= y; i++) {
        z *= x;
    }
    return z;
}

function checkFermat(a, b, c, n) {
    if (n > 2) {
        if (powerCalc(a, n) + powerCalc(b, n) === powerCalc(c, n)) {
            console.log("Holy smokes, Fermat was wrong!");
        }
        else {
            console.log("No, that doesn't work.");
        }
    }
    else {
        console.log("Noo, that doesn't work.");
    }
}

let a = prompt("Enter the value of a:");
let b = prompt("Enter the value of b:");
let c = prompt("Enter the value of c:");
let n = prompt("Enter the value of n:");

checkFermat(a, b, c, n);