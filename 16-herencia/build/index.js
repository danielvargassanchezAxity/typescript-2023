var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function NotNullable(message) {
    return function (target, key) {
        const getter = function () {
            return target;
        };
        const setter = function (data) {
            if (data === null || data === undefined || data.length === 0) {
                throw new Error(message);
            }
            target = data;
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    };
}
class Padre {
    constructor(color, age, colorDePelo) {
        this.colorOjos = '';
        this.colorOjos = color;
        this.age = age;
        this.colorDePelo = colorDePelo;
    }
    saludar() {
        console.log("hola que tal yo soy el padre");
    }
}
__decorate([
    NotNullable("el color deojos es requerido")
], Padre.prototype, "colorOjos", void 0);
class Hijo extends Padre {
    constructor(color, age, colorDePelo) {
        super(color, age, colorDePelo);
        this.colorOjos = '';
    }
    saludar() {
        console.log("hola que tal yo soy el hijo");
    }
}
const hijo = new Hijo("", 15, "negro");
hijo.altura = 160;
hijo.saludar();
console.log(hijo);
// const paeg = new Padre("",56, "negro");
