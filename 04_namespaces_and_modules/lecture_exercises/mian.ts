import { StringValidator, NumberValidator } from './my-other-module'

const fiveValidator = new NumberValidator(6);
const fiveStringValidator = new StringValidator('6');

const a = fiveValidator.validate(100);
const b = fiveStringValidator.validate('100');
console.log(a, b);

type MyType = { name: string, age: number }[]
const bb: MyType = [{ name: 'qwe', age: 1 }]
console.log(bb)

type Something = {
    name: string;
    [key: string]: any;
}

const bbb: Something = { name: 'qqq', qwe: true };
console.log(bbb)