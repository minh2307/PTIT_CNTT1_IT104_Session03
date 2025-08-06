"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = exports.multiply = exports.subtract = exports.total = void 0;
const total = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a + b;
    }
    else {
        return `Không hợp lệ`;
    }
};
exports.total = total;
const subtract = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a - b;
    }
    else {
        return `Không hợp lệ`;
    }
};
exports.subtract = subtract;
const multiply = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a * b;
    }
    else {
        return `Không hợp lệ`;
    }
};
exports.multiply = multiply;
const divide = (num1, num2) => {
    let a = Number(num1);
    let b = Number(num2);
    if (!isNaN(a) && !isNaN(b)) {
        return a / b;
    }
    else {
        return `Không hợp lệ`;
    }
};
exports.divide = divide;
console.log((0, exports.total)(1, "2134"));
