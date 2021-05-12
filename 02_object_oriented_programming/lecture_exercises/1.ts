class Person {
    readonly name: string;
    readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Ivan", 20);
const person2 = new Person("Todor", 35);
const person3 = new Person("Peter", 14);
