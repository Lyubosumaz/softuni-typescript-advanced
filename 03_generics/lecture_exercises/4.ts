import { Tuple } from "./3";

class Threeuple extends Tuple {
    argThree: any;

    constructor(argOne: any, argTwo: any, argThree: any) {
        super(argOne, argTwo);
        this.argThree = argThree;
    }

    toString(): string { return `${this.argOne} -> ${this.argTwo} -> ${this.argThree}`; }
}

const n = new Threeuple('Hello World', [1], 312);
console.log(n.toString());