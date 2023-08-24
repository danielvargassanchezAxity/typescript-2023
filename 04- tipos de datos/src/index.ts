// boolean

let active: boolean = true;
active = false;

if (active) {
    console.log("producto activo");
} else {
    console.log("producto inactivo");
}

// numbers
let val1 = 1;
let val2 = 1;
console.log(val1 + val2);
console.log(val1 * val2);


// string
let message = "Hola";
let message2: string = "Mundo";

console.log(message.toLowerCase() + message2);

// array
let testArray = [];
testArray.push(1);
testArray.push("1");
testArray.push(null);
testArray.push(false);

console.log(testArray);



let numbersList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let stringList: string[] = ["Hola", "Hi", "Mundo"];
let booleanList: boolean[] = [false, true, false, true, 1 > 0, "test" === "test"];
let listOfList: [number[]] = [numbersList];


// any
let testAny: any = null;
testAny = 12;
testAny = 1;
testAny = true;
testAny = [1, 2, 3, 4];
testAny = null;

console.log(testAny + testAny);

// tuplas
let data: [string, number] = ["", 0];
data[0] = "";

let value1 = data[0].toUpperCase();
let value2 = data[1] + data[1];

console.log(value2);



enum HttpStatus {
    ServerError = 500,
    NotAuthorized = 401,
    ok = 200,
    created = 201,
    notfonund = 400
}

enum UIMessages {
    userOk = 'Se ha creado el usuario correctamente',
    userEditOk = 'Se ha editado el usuario correctamente',
    userError = 'Error al crear el usuario',
}

let code = 500;
if (code === 500 || code === 401) {
    console.log("error al consutar el servicio");
}

enum StatusOrder {
    created = "N",
    inProcess = "I",
    delivered = "C"
}

let response = "I";
if (response === StatusOrder.delivered) {
    // mandar notificacion de que su orden ya se entrego 
} else {
    // otra cosa
}

// null 
let testNumberNull: number | null = null;
let testUndefined: undefined;
