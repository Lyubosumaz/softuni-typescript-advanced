const sortArray = (arr: number[], op: 'asc' | 'desc' = 'asc') => {
    return arr.sort((a, b) => {
        if (op === 'asc') return a - b;

        return b - a;
    });
}

const testAsc = sortArray([14, 7, 17, 6, 8], 'asc');
const testDesc = sortArray([14, 7, 17, 6, 8], 'desc');

console.log(testAsc, testDesc);