import { Shape } from "./shape";

export class Square implements Shape {
    base: number;
    height: number;
    color: string;
    constructor(base: number, color: string) {
        this.base = base;
        this.height = base;
        this.color = color;
    }
    dance(): void {
        console.log("dance")
    }
    getArea(): number {
        return this.base * this.base;
    }
    getColor(): string {
        return this.color;
    }

}