"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor() {
        this.title = '';
        this.body = '';
        this.origin = '';
        this.receiver = '';
        this.createDate = new Date();
    }
}
exports.Email = Email;
