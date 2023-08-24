"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(base, color) {
        this.base = base;
        this.height = base;
        this.color = color;
    }
    dance() {
        console.log("dance");
    }
    getArea() {
        return this.base * this.base;
    }
    getColor() {
        return this.color;
    }
}
exports.Square = Square;
