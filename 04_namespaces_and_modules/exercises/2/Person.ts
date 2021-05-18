/// <reference path="./Greeter.ts" />

export class Person implements Greeter.Greeting<string> {
    constructor(private name: string, private age: number) { }

    instruction(): string {
        return `My name is ${this.name} and I am ${this.age} years old.`;
    }

    sayGoogle(name: string): string {
        return `Dear ${name}, it was a pleasure meeting you!`;
    }

}
