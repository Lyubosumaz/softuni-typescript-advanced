import { IValidator } from './my-module';

export class StringValidator implements IValidator<string> {
    constructor(public otherValue: string) { }

    validate(value: string): boolean {
        return value.includes(this.otherValue);
    }
}

export class NumberValidator implements IValidator<number> {
    constructor(public otherValue: number) { }
    validate(value: number): boolean {
        return value === 10;

    }
}