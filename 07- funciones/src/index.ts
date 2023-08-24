import { printMyName } from "./test1/test2/test4/test";
let nameTst = "test"
// funciones
function sayHi(): void {
    console.log("Hi");
}


function addTwoNumber(number1: number, number2: number): void {
    console.log(number1 + number2);
}

function addTwoNumbersWithReturn(number1: number, number2: number): number {
    return number1 + number2;
}
let result = addTwoNumbersWithReturn(1, 3);


// arrow function
const callback = (name: string): void => {
    console.log(`Hola que tal mi nombre es ${nameTst}`);
}

function test(callback: (name: string) => void, callback2: () => void, validation: boolean): void {
    if (validation) {
        callback('daniel');
    }
}
const testBoolean = (validation: boolean): boolean => {
    return validation;
}
test(callback, ()=> {console.log("no se cumplio la validacion")}, testBoolean(false));

