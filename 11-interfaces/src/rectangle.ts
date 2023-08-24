import { Shape } from "./shape";

export class Rectangle implements Shape {
    base: number;
    height: number;
    color: string;
    constructor(base: number, height: number, color: string) {
        this.base = base;
        this.height = height;
        this.color = color;
    }
    getArea(): number {
        return this.base * this.height;
    }
    getColor(): string {
        return this.color;
    }

    dance(): void {
        
    }
}