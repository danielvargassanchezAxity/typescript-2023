import { Email } from "./email";
import { EmailSender } from "./email.sender";

export class YahooSender implements EmailSender {
    sendEmail(email: Email): void {
        // validar que no tenga codigo inyectado
        console.log("mandar email por yahoo");
    }

}