import { Tuple } from "./3";

class Threeuple<T, C, M> extends Tuple<T, C> {
    argThree: M;

    constructor(argOne: T, argTwo: C, argThree: M) {
        super(argOne, argTwo);
        this.argThree = argThree;
    }

    toString(): string { return `${this.argOne} -> ${this.argTwo} -> ${this.argThree}`; }
}

const n = new Threeuple('Hello World', [1], 312);
console.log(n.toString());