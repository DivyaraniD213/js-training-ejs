/*
The purpose of this exercise is to take a problem and break it into smaller problems, and to solve the smaller problems by writing simple functions.
Consider the first verse of the song “99 Bottles of water:

99 bottles of water on the wall,
99 bottles of water,
ya’ take one down, ya’ pass it around,
98 bottles of water on the wall.

Subsequent verses are identical except that the number of bottles gets smaller by one in each verse, until the last verse:

No bottles of water on the wall,
no bottles of water,
ya’ can’t take one down, ya’ can’t pass it around,
’cause there are no more bottles of water on the wall!


And then the song (finally) ends.

Write a program that prints the entire lyrics of "99 Bottles of water." 
Your program should include a recursive method that does the hard part, but you might want to write additional methods
to separate the major functions of the program 
As you develop your code, test it with a small number of verses, like "3 Bottles of water."

The purpose of this exercise is to take a problem and break it into smaller problems,
and to solve the smaller problems by writing simple methods
*/
"use strict";

function extractNum(string) {
    let first_space = string.indexOf(' ');
    let count = Number(string.substring(0, first_space));
    return count;
}

function generateString(count) {
    let string = "";
    count ? string += String(count) : string += "No";
    string += " bottles of water on the wall,\n";
    count ? string += String(count) : string += "No";
    string += " bottles of water,\nya’ take one down, ya’ pass it around,\n";
    count - 1 && count ? string += String(count - 1) : string += "No";
    string += " bottles of water on the wall.";
    return string;
}

function completeLyrics(first_line)         {
    let count = extractNum(first_line);
    for (let i = count; i > 0; i--) {
        console.log(generateString(i), "\n");
    }
    console.log(generateString(0));
}


let first_line = "99 Bottles of water";
completeLyrics(first_line);