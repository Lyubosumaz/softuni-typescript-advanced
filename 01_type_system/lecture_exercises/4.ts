interface OutputObj {
    [key: string]: number;
}

const operationsArr = (input: (string | number)[]) => {
    let obj: OutputObj = {};

    for (let i = 0; i < input.length; i += 2) {
        const key = input[i], value = input[i + 1];
        if (typeof key === "string" && typeof value === "number") {
            obj[key] = value;
        }
    }

    return obj;
}

const t1 = operationsArr(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
const t2 = operationsArr(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42]);

console.log(t1);
console.log(t2);