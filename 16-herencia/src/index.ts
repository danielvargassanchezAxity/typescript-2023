// interface Test1 {
//     name: string;
// }
// interface Test2 {
//     nameTest2: string;
// }
// class TestClass implements Test1, Test2 {
//     nameTest2: string;
//     name: string;
// }
function NotNullable(message: string): PropertyDecorator {
    return function (target: Object, key: string | symbol) {

        const getter = function () {
            return target;
        }

        const setter = function (data: string) {
            if (data === null || data === undefined || data.length === 0) {
                throw new Error(message);
            }
            target = data;
        }

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}

class Padre {
    @NotNullable("el color deojos es requerido")
    colorOjos: string = '';
    age: number;
    colorDePelo: string;
    constructor(color: string, age: number, colorDePelo: string) {
        this.colorOjos = color;
        this.age = age;
        this.colorDePelo = colorDePelo;
    }

    saludar(): void {
        console.log("hola que tal yo soy el padre");
    }
}

class Hijo extends Padre {
    altura: number;
    colorOjos: string = '';
    constructor(color: string, age: number, colorDePelo: string) {
        super(color, age, colorDePelo);
    }

    saludar(): void {
        console.log("hola que tal yo soy el hijo")
    }
}

const hijo = new Hijo("", 15, "negro");
hijo.altura = 160;
hijo.saludar();
console.log(hijo);

// const paeg = new Padre("",56, "negro");