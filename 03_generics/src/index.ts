interface IPerson {
    name: string;
    age: number;
    [key: number]: number | string;
}

const ivan: IPerson = {
    name: 'Ivan',
    age: 30,
    1: 42,
    2: '42',
}

interface ClockConstructor {
    new(hour: number, minute: number): IClock;
}

interface IClock {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): IClock {
    return new ctor(hour, minute);
}

class DigitalClock implements IClock {
    constructor(h: number, m: number) { }
    tick() {
        console.log('beep beep');
    }
}

class AnalogClock implements IClock {
    constructor(h: number, m: number) { }
    tick() {
        console.log('tick tock');
    }
}

const digital = createClock(DigitalClock, 12, 17);
const analog = createClock(AnalogClock, 7, 32);

// interface Calculator {
//     (numOne: number, numTwo: number, operation: string): number;
//     name: string;
//     length: number;
// }

// let calculator: Calculator = function (numOne: number, numTwo: number, operation: string) { return 1 };

// bizarre inheritance
class Computer {
    public RAM;
    constructor(r: number) { this.RAM = r; }
    showParams(): string { return `${this.RAM}`; }
}

interface Parts extends Computer {
    CPU: string;
    showParts(): string;
}

class PC extends Computer implements Parts {
    public keyboard: string | undefined;
    public CPU;
    constructor(RAM: number, CPU: string,) { super(RAM); this.CPU = CPU; }
    showParts() {
        return `${this.RAM} ${this.CPU}`;
    }
}
// ^^

// function identity<T>(a: T): T { return a; }
// const a = identity<string>('1');

function getAge<T extends IBase>(a: T): number {
    const { age } = a;
    return age;
}

interface IBase {
    name: string;
    age: number;
}

class User implements IBase {
    skills: any[] | undefined;
    constructor(public name: string, public age: number) { }
}

class Animal implements IBase {
    type: string | undefined;

    constructor(public name: string, public age: number) { }
}

const userIvan = new User('Ivan', 30);
const animalDog = new Animal('Dog', 20);

const userAge = getAge(userIvan);
const animalAge = getAge(animalDog);

// function add<T = string | number>(a: T, b: T): T | undefined {
//     if (typeof a === "string" && typeof b === "string") {
//         return a.concat(b) as any;
//     }
// }

function pickOne<T>(items: T[]) {
    return items[2];
}

const a = pickOne([1, 2, 3]);

// ['Fruits', 5, 'Dog', 10] -> { 'Fruits': 5, 'Dog': 10 }
// function test(items: (string | number)[]): { [key: string]: number } {
//     return items.reduce((acc, item, index, currentArray) => {
//         if (index !== 0 && index % 2 === 0) {
//             acc[currentArray[index - 1]] = item;
//             return acc;
//         }
//         return acc;
//     }, {});
// }

// const t = test(['Fruits', 5, 'Dog', 10]);
// console.log(t); // { '5': 'Dog' }
// fail idakiev ^^


interface IServerResponse {
    a: number;
    b: number;
    c: number;
    d: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

// const x = { a: 1, b: 2, C: 3, d: 4 };
const x: IServerResponse = {} as any;

getProperty(x, 'a'); // okay
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | ...


// function echo(message: string): { test: string };
// function echo(message: number): { best: number };
// function echo(message: any) {
//     console.log(message);
//     return message;
// }

// echo(1);

// function echo2<T>(message: T): T {
//     console.log(message);
//     return message;
// }

// echo2("1")

interface ShowComponents<T, V> {
    print(key: T, value: V): string;
}

class Components<T, V> implements ShowComponents<T, V> {
    constructor(public k: T, public v: V) { }
    print() {
        return `${this.k} === ${this.v}`;
    }
}

console.log(new Components('Number', 1).print());
const testThis = new Components('+++', '---');
console.log(testThis);
// WTF ^^


function fullName<T extends { name: string, age: number }>(arg: T) {
    return `${arg.name} ${arg.age}`;
}

fullName({ name: 'dasda', age: 1324, phone: 123 });


class Collection<T> {
    private data: T[];
    constructor(items?: T[]) {
        this.data = items || [];
    }

    push(item: T) {
        this.data.push(item);
    }

    remove(item: T) {
        this.data = this.data.filter(i => i !== item);
    }
}

const numberCollection = new Collection<number>();
numberCollection.push(1);
const numberCollection2 = new Collection(['str']);
numberCollection2.push('1');