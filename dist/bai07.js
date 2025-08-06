"use strict";
let str = "hello wold";
let splitString = "";
for (let char of str) {
    if (!splitString.includes(char)) {
        splitString += char;
    }
}
console.log(splitString);
