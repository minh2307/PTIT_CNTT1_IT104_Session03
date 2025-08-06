let str: string = "hello wold";
let splitString: string = "";

for (let char of str) {
  if (!splitString.includes(char)) {
    splitString += char;
  }
}

console.log(splitString);
