export interface Shape {
    base: number;
    height: number;
    color: string;
    getArea(): number;
    getColor(): string;
    dance(): void;
}