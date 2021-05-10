// type StringOrNull = string | null | undefined;

// enum UserType {
//     ADMIN = "Admin",
//     BASIC = "Basic",
// }

// class User {
//     public name: string;
//     public age: number;
//     public type = UserType.ADMIN;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     getUserInfo(header: StringOrNull = null): string {
//         return `${header ? header : ''}${this.name} - ${this.age}`;
//     }
// }

// class Animal {
//     constructor(public bread: string) { }
// }

// const aa = new Animal('a');


// const test: User & Animal = {
//     bread: '',
//     age: 1,
//     name: '',
//     type: UserType.BASIC,
//     getUserInfo: function () { return ''; },
// }


// const ivan = new User('Ivan', 20);
// const userInfo = ivan.getUserInfo();

// console.log(userInfo);


// const userNames: string[] = [];
// userNames.push('Ivan');

// const userAges: number[] = [];

// userNames.forEach((name, index) => {
//     const age = userAges[index];
//     const myUSer = new User(name, age);
// });

// const a: [string, number, boolean] = ['', 1, true,];

import * as fs from "fs";

enum Operations {
    ADD,
    MULT,
    LARGEST,
}

function operationExecuter(items: number[], op: Operations) {
    return items.reduce((accumulator, currentValue, index) => {
        if (op === Operations.LARGEST) {
            return accumulator < currentValue ? currentValue : accumulator;
        }
        if (op === Operations.ADD) {
            return index === 0 ? currentValue : accumulator + currentValue;
        }
        return index === 0 ? currentValue : accumulator * currentValue;
    }, items[0]);
}

const resultAdd = operationExecuter([1, 2, 3, 4], Operations.ADD);
const resultMult = operationExecuter([1, 2, 3, 4], Operations.MULT);
const resultLargest = operationExecuter([1, 2, 3, 4], Operations.LARGEST);

console.log(resultAdd, resultMult, resultLargest);