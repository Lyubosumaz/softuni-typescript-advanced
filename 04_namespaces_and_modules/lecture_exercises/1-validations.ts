/// <reference path="1-exercises.ts" /> 
/* "module": "System" */

namespace Validation {
    export class MyAwesomeValidator {

    }
}

const a = Validation.MyAwesomeValidator;
const v3 = new a();

const v1 = new Validation.MyAwesomeValidator();
const v = new Validation.ZipCodeValidator();
v.isAcceptable("sad sad");

import stores = Shops.TechStories;
const pcStore = new stores.PCStore();