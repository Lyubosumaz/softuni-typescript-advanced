const operations = (arg: number[]) => {
    let arr: number[] = [];
    if (Array.isArray(arg)) arr.push(...arg);

    const modify = (command: string, num?: number, index?: number) => {
        const cheNumber = num ?? null;
        const cheIndex = index ?? null;

        const verifyIndex = (i: number | null) => {
            if (i !== null && 0 <= i && i <= arr.length - 1) {
                return i;
            } else if (i !== null && (0 > i || i > arr.length - 1)) {
                console.log('Invalid index');
            }
            return null;
        }

        switch (command) {
            case "Add":
                if (cheNumber) arr.push(cheNumber);
                break;
            case "Insert":
                if (cheNumber) {
                    const i = verifyIndex(cheIndex);
                    if (i !== null) arr = [...arr.slice(0, i), cheNumber, ...arr.slice(i)];
                }
                break;
            case "Remove":
                if (cheNumber !== null && cheNumber >= 0) {
                    const i = verifyIndex(cheNumber);
                    if (i !== null) arr = [...arr.slice(0, i), ...arr.slice(i + 1)];
                }
                break;
            case "Shift left":
            case "Shift right":
                const direction = command.split(' ').pop();
                if (cheNumber && direction === "left") arr = [...arr.slice(cheNumber, arr.length), ...arr.slice(0, cheNumber)];
                if (cheNumber && direction === "right") arr = [...arr.slice(arr.length - cheNumber, arr.length), ...arr.slice(0, arr.length - cheNumber)];
                break;
            case "End":
                console.table(arr);
                break;
            default:
                break;
        }


        /** showing nesting */
        return (str: string) => {
            console.log(str);
        }
    }

    return modify;
}

const myTest = operations([1, 2, 3,]);
myTest("Add", 4)("adding 4 5 6 7");
myTest("Add", 5);
myTest("Add", 6);
myTest("Add", 7);
myTest("End");
myTest("Insert", 666, -1)("insert 666x-1 200x1 300x5 400x8 100x0");
myTest("Insert", 200, 1);
myTest("Insert", 300, 5);
myTest("Insert", 400, 8);
myTest("Insert", 100, 0);
myTest("End");
myTest("Remove", 999)("remove 999 9 6 2 0");
myTest("Remove", 9);
myTest("Remove", 6);
myTest("Remove", 2);
myTest("Remove", 0);
myTest("End");
myTest("Shift left", 2)("to the left 2 times");
myTest("End");
myTest("Shift right", 3)("to the right 3 time");
myTest("End");

// const operation1 = operations([1, 23, 29, 18, 43, 21, 20]);
// operation1("Add", 5);
// operation1("Remove", 5);
// operation1("Shift left", 3);
// operation1("Shift left", 1);
// operation1("End");

// const operation2 = operations([5, 12, 42, 95, 32, 1]);
// operation2("Insert", 3, 0);
// operation2("Remove", 10);
// operation2("Insert", 8, 6);
// operation2("Shift right", 1);
// operation2("Shift left", 2);
// operation2("End");