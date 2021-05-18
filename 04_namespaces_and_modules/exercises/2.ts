namespace Greeter {
    export interface Greeting<T> {
        instruction(): any;
        sayGoogle(name: T): any;
    }
}