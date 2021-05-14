export class Tuple<T, C> {
    constructor(public argOne: T, public argTwo: C) { }
    toString(): string { return `${this.argOne} -> ${this.argTwo}`; }
}

const n1 = new Tuple('Svetoslav', 'Sofia');
const n2 = new Tuple('Apples', 10);
const n3 = new Tuple(10, 100091);

console.log(n1.toString());
console.log(n2.toString());
console.log(n3.toString());