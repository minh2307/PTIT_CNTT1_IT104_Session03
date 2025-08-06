// @ts-ignore
import * as bai08 from "./bai08";

function power(base: number, exponent: number): number {
  return Math.pow(base, exponent);
}

function sqrt(base: number, root: number): number {
  return Math.pow(base, 1 / root);
}

function factorial(n: number): number {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

let total = document.getElementById("total") as HTMLButtonElement;
let subtract = document.getElementById("subtract") as HTMLButtonElement;
let multiply = document.getElementById("multiply") as HTMLButtonElement;
let divide = document.getElementById("divide") as HTMLButtonElement;
let powerBtn = document.getElementById("power") as HTMLButtonElement;
let sqrtBtn = document.getElementById("sqrt") as HTMLButtonElement;
let factorialBtn = document.getElementById("factorial") as HTMLButtonElement;

let input1 = document.getElementById("firstNumber") as HTMLInputElement;
let input2 = document.getElementById("secondNumber") as HTMLInputElement;
let result = document.getElementById("result") as HTMLParagraphElement;

function parseInputs(): [number, number] | null {
  const a = parseFloat(input1.value);
  const b = parseFloat(input2.value);

  if (isNaN(a) || isNaN(b)) {
    result.innerText = "Lỗi: Vui lòng nhập số hợp lêj";
    return null;
  }

  return [a, b];
}

total.onclick = () => {
  const inputs = parseInputs();
  if (!inputs) return;
  result.innerText = "= " + bai08.total(inputs[0], inputs[1]);
};

subtract.onclick = () => {
  const inputs = parseInputs();
  if (!inputs) return;
  result.innerText = "= " + bai08.subtract(inputs[0], inputs[1]);
};

multiply.onclick = () => {
  const inputs = parseInputs();
  if (!inputs) return;
  result.innerText = "= " + bai08.multiply(inputs[0], inputs[1]);
};

divide.onclick = () => {
  const inputs = parseInputs();
  if (!inputs) return;
  result.innerText = "= " + bai08.divide(inputs[0], inputs[1]);
};

powerBtn.onclick = () => {
  const inputs = parseInputs();
  if (!inputs) return;
  result.innerText = "= " + power(inputs[0], inputs[1]);
};

sqrtBtn.onclick = () => {
  const inputs = parseInputs();
  if (!inputs) return;
  result.innerText = "= " + sqrt(inputs[0], inputs[1]);
};

factorialBtn.onclick = () => {
  const a = parseFloat(input1.value);
  if (isNaN(a) || a < 0 || !Number.isInteger(a)) {
    result.innerText = "Giai thừa chỉ áp dụng cho số nguyên không âm";
    return;
  }
  result.innerText = "= " + factorial(a);
};
