import { Email } from "./email";
import { EmailSender } from "./email.sender";

export class GoogleSender implements EmailSender {
    sendEmail(email: Email): void {
        // pone a validar a su IA todo el correo y checa que nada este mal
        // valida el receptor
        // valida que no sea spam 
        // valida que no exista el origen en una lista negra
        // le pone anuncion (por que es google)
        console.log("enviar correo por google");
    }

}