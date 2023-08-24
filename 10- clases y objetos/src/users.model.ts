export class User {
    id: number;
    name: string;
    email: string;
    private _age = 0;
    private _fullName = '';

    constructor(id: number | null | undefined,
        name: string | null | undefined,
        email: string | null | undefined) {
        this.id = id ?? 100;
        this.name = name ?? '';
        this.email = email ?? '';
    }

    public get age(): number {
        return this._age;
    }

    public set age(age: number) {
        if (age < 18) {
            throw new Error("Debe de ser mayor de edad para usar esta plataforma");
        } else {
            this._age = age;
        }
    }
    
    login(password: string, email: string): void {
        console.log("login");
    }
    logout(): void {
        console.log("logout");
    }
}