namespace Greeter {
    export interface Greeting<T> {
        instruction(): string;
        sayGoogle(name: T): string;
    }
}
