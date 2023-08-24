function concatArrays(arr1: any[], arr2: any[]): any[] {
    return arr1.concat(arr2);
}
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const result = concatArrays(array1, array2);
const resultError = concatArrays(array1, ["1", "2", "3", "4"]);

function concatArraysGeneric<T>(array1: T[], array2: T[]): T[] {
    return array1.concat(array2);
}

const genericResult = concatArraysGeneric<number>(array1, array2);
const genericResultString = concatArraysGeneric<string>(["Volvo", "Mazda"], ["VW", "Audi"]);
console.log(genericResult);
console.log(genericResultString);

class User {
    name = '';
    constructor(name: string) {
        this.name = name;
    }
}

const genericResultObject = concatArraysGeneric<User>(
    [new User('usuario1'), new User('usuario dos')],
    [new User('usuario3'), new User('usuario cuatro')]
);
// console.log(genericResultObject);
// console.log(genericResultObject[0].name);

function identifyGeneric<T, U>(value: T, message: U): T {
    console.log(message);
    return value;
}

identifyGeneric<number, string>(1, "Hola desde el metodo generico");


type ValidTypes = string | number;
function blockElementsGeneric<T extends ValidTypes, U>(value: T, message: U): T {
    if (typeof (value) === 'string') {
        console.log(value + value);
    }
    if (typeof (value) === 'number') {
        console.log(value + value);
    }
    return value;
}
console.log(blockElementsGeneric<number, string>(1, "mensaje"));