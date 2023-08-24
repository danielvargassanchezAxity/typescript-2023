"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(base, height, color) {
        this.base = base;
        this.height = height;
        this.color = color;
    }
    getArea() {
        return this.base * this.height;
    }
    getColor() {
        return this.color;
    }
    dance() {
    }
}
exports.Rectangle = Rectangle;
