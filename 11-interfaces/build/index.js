"use strict";
// interface IUser {
//     name: string;
//     age: number;
//     login(): void;
// }
// class User implements IUser {
//     name: string;
//     age: number;
//     constructor() {
//         this.age = 0;
//         this.name = '';
//     }
//     login(): void {
//         console.log("login");
//     }
// }
// const user = new User();
// user.login();
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("./email");
const email_sender_google_1 = require("./email.sender.google");
const email_sender_outlook_1 = require("./email.sender.outlook");
const email_sender_yahoo_1 = require("./email.sender.yahoo");
// import { Rectangle } from "./rectangle";
// import { Shape } from "./shape";
// import { Square } from "./square";
// function printArea(shape: Shape): void {
//     console.log(shape.getColor() +": "+ shape.getArea());
//     shape.dance();
// }
// printArea(new Rectangle(10,15,'f3f3f3'));
// printArea(new Square(10, 'd3d3d3'));
function sendEmail(sender, email) {
    sender.sendEmail(email);
}
const email = new email_1.Email();
email.title = "titulo del email";
email.body = "<p>Hola</p>";
email.origin = "daniel@test.com";
email.receiver = "adriana@yahoo.com";
const googleSender = new email_sender_google_1.GoogleSender();
const outlookSender = new email_sender_outlook_1.OutlookSender();
const yahooSender = new email_sender_yahoo_1.YahooSender();
sendEmail(googleSender, email);
sendEmail(outlookSender, email);
sendEmail(yahooSender, email);
