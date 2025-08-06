export const total = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    }
    else {
        return `Không hợp lệ`;
    }
};
export const subtract = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a - b;
    }
    else {
        return `Không hợp lệ`;
    }
};
export const multiply = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    }
    else {
        return `Không hợp lệ`;
    }
};
export const divide = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a / b;
    }
    else {
        return `Không hợp lệ`;
    }
};
console.log(total(1, "2134"));
