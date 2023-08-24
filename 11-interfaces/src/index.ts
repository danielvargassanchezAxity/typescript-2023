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

import { Email } from "./email";
import { EmailSender } from "./email.sender";
import { GoogleSender } from "./email.sender.google";
import { OutlookSender } from "./email.sender.outlook";
import { YahooSender } from "./email.sender.yahoo";

// import { Rectangle } from "./rectangle";
// import { Shape } from "./shape";
// import { Square } from "./square";


// function printArea(shape: Shape): void {
//     console.log(shape.getColor() +": "+ shape.getArea());
//     shape.dance();
// }

// printArea(new Rectangle(10,15,'f3f3f3'));
// printArea(new Square(10, 'd3d3d3'));


function sendEmail(sender: EmailSender, email: Email): void {
    sender.sendEmail(email);
}

const email = new Email();
email.title = "titulo del email";
email.body = "<p>Hola</p>";
email.origin = "daniel@test.com";
email.receiver = "adriana@yahoo.com";

const googleSender = new GoogleSender();
const outlookSender = new OutlookSender();
const yahooSender = new YahooSender();

sendEmail(googleSender,email);
sendEmail(outlookSender,email);
sendEmail(yahooSender,email);