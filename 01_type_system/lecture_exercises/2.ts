const changeArray = (source: string) => {
    const [str, ...ops] = source.split('\n');
    let items = str.split(' ');

    ops.forEach(currentOp => {
        const [op, value, index = items.length] = currentOp.split(' ');

        if (op === 'Delete') {
            items = items.filter(i => i !== value);
        } else if (op === "Insert") {
            items = [...items.slice(0, +index), value, ...items.slice(+index)];
        }
    });

    return items;
}

const result = changeArray('1 2 3 4 5 5 5 6\nDelete 5\nInsert 10 1\nDelete 5\nend');
const result2 = changeArray('20 12 4 319 21 31234 2 41 23 4\nInsert 50 2\nInsert 50 5\nDelete 4\nend');

console.table(result);
console.table(result2);