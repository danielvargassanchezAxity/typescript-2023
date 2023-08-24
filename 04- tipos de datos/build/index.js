"use strict";
// boolean
let active = true;
active = false;
if (active) {
    console.log("producto activo");
}
else {
    console.log("producto inactivo");
}
// numbers
let val1 = 1;
let val2 = 1;
console.log(val1 + val2);
console.log(val1 * val2);
// string
let message = "Hola";
let message2 = "Mundo";
console.log(message.toLowerCase() + message2);
// array
let testArray = [];
testArray.push(1);
testArray.push("1");
testArray.push(null);
testArray.push(false);
console.log(testArray);
let numbersList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringList = ["Hola", "Hi", "Mundo"];
let booleanList = [false, true, false, true, 1 > 0, "test" === "test"];
let listOfList = [numbersList];
// any
let testAny = null;
testAny = 12;
testAny = 1;
testAny = true;
testAny = [1, 2, 3, 4];
testAny = null;
console.log(testAny + testAny);
// tuplas
let data = ["primer valor", 1];
let value1 = data[0].toUpperCase();
let value2 = data[1] + data[1];
console.log(value2);
