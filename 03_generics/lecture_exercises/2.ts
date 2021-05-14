class CompareElements {
    constructor(public arr: any[]) { }
    compare(comparator: any): number { return this.arr.filter((el) => el === comparator).length; }
}

const c1 = new CompareElements(['a', 'b', 'ab', 'abc', 'cba', 'b']);
const c2 = new CompareElements([1, 2, 3, 4, 5, 1, 1]);

console.log(c1.compare('b'));
console.log(c2.compare(1));