export namespace MySQL {
    export class User {
        name: string;
        uuid: string;
        password: string;
        constructor() {
            this.name = '';
            this.uuid = '';
            this.password = '';
        }
    }

    export function craeteUser(user: User): void {
        console.log("user created from MySQL");
    }
}