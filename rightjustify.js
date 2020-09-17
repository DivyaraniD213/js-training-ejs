/*
Write a function named rightJustify that takes a string named s as a parameter 
and prints the string with enough leading spaces so that the last letter of the string is in column 70 of the display.
Hint: Use string concatenation and loop. Also, string has a property called length.
Ex:
>rightJustify('monty')
                                                                monty
*/
const prompt = require('prompt-sync')();

let string = "";

input_string = prompt("Enter the input string:");
//input_string = "hi";

for (let i = 0; i < 70 - input_string.length; i++) {
    string += " ";
}

string += input_string;

console.log(string);