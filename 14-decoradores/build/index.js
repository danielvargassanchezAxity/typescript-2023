// // decorador de clase
// function repository(): ClassDecorator {
//     return function (target: Function) {
//         const users: string[] = [];
//         target.prototype.users = users;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//         target.prototype.save = (user: string): void => {
//             target.prototype.users.push(user);
//         }
//         target.prototype.delete = (id: number): void => {
//             const users: string[] = [...target.prototype.users];
//             users.splice(id, 1);
//             target.prototype.users = [...users];
//         }
//         target.prototype.find = (id: number): string => {
//             const users: string[] = [...target.prototype.users];
//             return users[id];
//         }
//         target.prototype.findAll = (): string[] => {
//             return target.prototype.users;
//         }
//     }
// }
// interface UserRepository {
//     users: string[];
//     save(user: string): void;
//     delete(id: number): void;
//     find(id: number): string;
//     findAll(): string[];
// }
// @repository()
// class UserRepository {
//     maxSize: number;
//     databaseTable: string;
//     constructor() {
//         this.maxSize = 0;
//         this.databaseTable = '';
//     }
// }
// const userRepository = new UserRepository();
// userRepository.save("test1@test.com");
// userRepository.save("test2@test.com");
// userRepository.save("test3@test.com");
// console.log(userRepository.findAll());
// console.log(userRepository.findAll());
// userRepository.delete(1);
// console.log(userRepository.findAll());
// console.log(userRepository.find(0));
// console.log(userRepository);
// function confirmDelete(message: string): MethodDecorator {
//     return function (target: object, key: string | symbol, descriptr: PropertyDescriptor) {
//         const original = descriptr.value;
//         descriptr.value = function (...args: any[]) {
//             if (window.confirm(message)) {
//                 original.apply(this, args);
//             }
//             return null;
//         }
//     }
// }
// class UI {
//     @confirmDelete("¿Estas seguro de que quieres eliminar el usuario?")
//     removeElement(element: HTMLElement): void {
//         element.remove();
//     }
// }
// const users: string[] = [
//     "usuario 1 test",
//     "usuario 2 test",
//     "usuario 3 test"
// ];
// const ui = new UI();
// const ul = document.createElement('ul');
// users.forEach((user) => {
//     const li = document.createElement("li");
//     li.addEventListener("click", () => {
//         ui.removeElement(li);
//     });
//     li.textContent = user;
//     ul.appendChild(li);
// });
// setTimeout(() => {
//     document.body.appendChild(ul);
// }, 1000);
// DECORADOR DE PROPIEDADES
function NotNullable(message) {
    return function (target, key) {
        const getter = function () {
            return target;
        };
        const setter = function (data) {
            if (data === null || data === undefined) {
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
class Validator {
    static isAceptable(postalcode) {
        const numberRegexp = /^[0-9]+$/;
        return postalcode.length === 5 && numberRegexp.test(postalcode);
    }
}
function IsCP(message) {
    return function (target, key) {
        const getter = function () {
            return target;
        };
        const setter = function (data) {
            if (!Validator.isAceptable(data)) {
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
function inRange(min, max, minError, maxError) {
    return function (target, key) {
        const getter = function () {
            return target;
        };
        const setter = function (data) {
            if (data < min) {
                throw new Error(minError);
            }
            if (data > max) {
                throw new Error(maxError);
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
NotNullable("");
class Post {
    constructor(titulo, page) {
        this.titulo = titulo;
        this.pages = page;
    }
}
__decorate([
    NotNullable("El campo titulo es requerido")
], Post.prototype, "titulo", void 0);
__decorate([
    inRange(0, 100, "No se pueden paginas menores a cero", "No se pueden asignar valores mayores a 100")
], Post.prototype, "pages", void 0);
__decorate([
    IsCP("codigo postal invalido")
], Post.prototype, "cp", void 0);
class Book {
}
__decorate([
    NotNullable("No se aceptan numeros nulos o undefined"),
    inRange(0, 1000, "No se admiten paginas negativas", "no se admiten valores mayores a 1000")
], Book.prototype, "totalPages", void 0);
const post = new Post('Harry potter', 10);
post.cp = "123";
const book = new Book();
book.totalPages = 100;
console.log(post.titulo);
console.log(post.pages);
