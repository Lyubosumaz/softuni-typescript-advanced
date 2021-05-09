"use strict";
var sortArray = function (arr, op) {
    if (op === void 0) { op = 'asc'; }
    return arr.sort(function (a, b) {
        if (op === 'asc')
            return a - b;
        return b - a;
    });
};
var testAsc = sortArray([14, 7, 17, 6, 8], 'asc');
var testDesc = sortArray([14, 7, 17, 6, 8], 'desc');
console.log(testAsc, testDesc);
