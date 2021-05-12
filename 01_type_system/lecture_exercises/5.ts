const racing = (input: number[]) => {
    const firstCar = input.slice(0, input.length / 2);
    const secondaryCar = input.slice(input.length / 2 + 1, input.length).reverse();

    let fistTime: number = 0;
    let secondTime: number = 0;

    for (let i = 0; i < firstCar.length; i++) {
        fistTime += firstCar[i];
        if (firstCar[i] === 0) fistTime *= 0.8;

        secondTime += secondaryCar[i];
        if (secondaryCar[i] === 0) secondTime *= 0.8;
    }

    const [direction, time]: (string | number)[] = (fistTime < secondTime) ? ['left', fistTime] : ['right', secondTime];
    console.log(`The winner is ${direction} with total time: ${typeof time === "number" ? time.toFixed(1) : 'not a number'}`);
}

racing([29, 13, 9, 0, 13, 0, 21, 0, 14, 82, 12]);
racing([29, 13, 9, 0, 13, 0, 21, 0, 14, 0, 12]);