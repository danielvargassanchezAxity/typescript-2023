export namespace System {
    class Output {
        print(message: string): void {
            console.log(message);
        }
    }
    export const out = new Output();
}