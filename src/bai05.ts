let fistName: string = "jonh";
let secondName: string = "doe";

let fullName: string =
  fistName.charAt(0).toUpperCase() +
  fistName.slice(1) +
  secondName.charAt(0).toUpperCase() +
  secondName.slice(1);

console.log(fullName);
