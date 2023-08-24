import { Email } from "./email";
import { EmailSender } from "./email.sender";

export class OutlookSender implements EmailSender {
    sendEmail(email: Email): void {
        // obtener un token
        // validar el correo
        // checa que no tenga codigo inyectado en el body
        // valida que exista el origen
        //valida que exista el destino 
        console.log("enviar email por outlook");
    }
}