import { Email } from "./email";

export interface EmailSender {
    sendEmail(email: Email): void;
}

