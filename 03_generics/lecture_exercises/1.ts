class Box<T> {
    constructor(public arg: T) { }
    toString(): string { return `${this.arg} is of type ${typeof this.arg}`; }
}

const box1 = new Box(['test']);
const box2 = new Box(20);
const box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());