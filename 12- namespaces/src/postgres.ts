export namespace Postgres {
    export class User {
        name: string;
        id: number;
        password: string;
        userType: UserType
        constructor(userType: UserType) {
            this.name = '';
            this.id = 0;
            this.password = '';
            this.userType = userType;
        }
    }

    export function craeteUser(user: User): void {
        console.log("user created from Postgress");
    }

    export enum UserType {
        admin,
        generic,
        default
    }
}