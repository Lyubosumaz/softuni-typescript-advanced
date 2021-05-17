import { StringValidator, NumberValidator } from './my-other-module'

const fiveValidator = new NumberValidator(6);
const fiveStringValidator = new StringValidator('6');

const a = fiveValidator.validate(100);
const b = fiveStringValidator.validate('100')