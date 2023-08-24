"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("./test1/test2/test4/test");
// funciones
function sayHi() {
    console.log("Hi");
}
function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}
function addTwoNumbersWithReturn(number1, number2) {
    return number1 + number2;
}
let result = addTwoNumbersWithReturn(1, 3);
// arrow function
const callback = (name) => {
    console.log(`Hola que tal mi nombre es ${name}`);
};
function test(callback, callback2, validation) {
    if (validation) {
        callback('daniel');
    }
}
const testBoolean = (validation) => {
    return validation;
};
test(callback, () => { console.log("no se cumplio la validacion"); }, testBoolean(false));
(0, test_1.printMyName)("daniel");
