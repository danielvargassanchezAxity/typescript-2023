"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, email) {
        this._age = 0;
        this._fullName = '';
        this.id = id !== null && id !== void 0 ? id : 100;
        this.name = name !== null && name !== void 0 ? name : '';
        this.email = email !== null && email !== void 0 ? email : '';
    }
    get age() {
        return this._age;
    }
    set age(age) {
        if (age < 18) {
            throw new Error("Debe de ser mayor de edad para usar esta plataforma");
        }
        else {
            this._age = age;
        }
    }
    login(password, email) {
        console.log("login");
    }
    logout() {
        console.log("logout");
    }
}
exports.User = User;
