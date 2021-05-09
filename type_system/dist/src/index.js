"use strict";
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
var Operations;
(function (Operations) {
    Operations[Operations["ADD"] = 0] = "ADD";
    Operations[Operations["MULT"] = 1] = "MULT";
    Operations[Operations["LARGEST"] = 2] = "LARGEST";
})(Operations || (Operations = {}));
function operationExecuter(items, op) {
    return items.reduce(function (accumulator, currentValue, index) {
        if (op === Operations.LARGEST) {
            return accumulator < currentValue ? currentValue : accumulator;
        }
        if (op === Operations.ADD) {
            return index === 0 ? currentValue : accumulator + currentValue;
        }
        return index === 0 ? currentValue : accumulator * currentValue;
    }, items[0]);
}
var resultAdd = operationExecuter([1, 2, 3, 4], Operations.ADD);
var resultMult = operationExecuter([1, 2, 3, 4], Operations.MULT);
var resultLargest = operationExecuter([1, 2, 3, 4], Operations.LARGEST);
console.log(resultAdd, resultMult, resultLargest);
