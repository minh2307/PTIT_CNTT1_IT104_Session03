export const total = (
  num1: number | string,
  num2: number | string
): number | string => {
  let a = Number(num1);
  let b = Number(num2);
  if (!isNaN(a) && !isNaN(b)) {
    return a + b;
  } else {
    return `Không hợp lệ`;
  }
};

export const subtract = (
  num1: number | string,
  num2: number | string
): number | string => {
  let a = Number(num1);
  let b = Number(num2);
  if (!isNaN(a) && !isNaN(b)) {
    return a - b;
  } else {
    return `Không hợp lệ`;
  }
};

export const multiply = (
  num1: number | string,
  num2: number | string
): number | string => {
  let a = Number(num1);
  let b = Number(num2);
  if (!isNaN(a) && !isNaN(b)) {
    return a * b;
  } else {
    return `Không hợp lệ`;
  }
};

export const divide = (
  num1: number | string,
  num2: number | string
): number | string => {
  let a = Number(num1);
  let b = Number(num2);
  if (!isNaN(a) && !isNaN(b)) {
    return a / b;
  } else {
    return `Không hợp lệ`;
  }
};

console.log(total(1, "2134"));
