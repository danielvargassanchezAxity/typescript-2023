function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
const result = concatArrays(array1, array2);
const resultError = concatArrays(array1, ["1", "2", "3", "4"]);
function concatArraysGeneric(array1, array2) {
    return array1.concat(array2);
}
const genericResult = concatArraysGeneric(array1, array2);
const genericResultString = concatArraysGeneric(["Volvo", "Mazda"], ["VW", "Audi"]);
console.log(genericResult);
console.log(genericResultString);
class User {
    constructor(name) {
        this.name = '';
        this.name = name;
    }
}
const genericResultObject = concatArraysGeneric([new User('usuario1'), new User('usuario dos')], [new User('usuario3'), new User('usuario cuatro')]);
// console.log(genericResultObject);
// console.log(genericResultObject[0].name);
function identifyGeneric(value, message) {
    console.log(message);
    return value;
}
identifyGeneric(1, "Hola desde el metodo generico");
function blockElementsGeneric(value, message) {
    console.log(message);
    return value;
}
console.log(blockElementsGeneric(1, "mensaje"));
