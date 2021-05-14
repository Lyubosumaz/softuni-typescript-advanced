class Car {
    model: string;
    weight?: number;
    color?: string;

    constructor(model: string, weight?: number, color?: string) {
        this.model = model;
        this.weight = weight;
        this.color = color;
    }
}

class Engine {
    model: string;
    power: number;
    displacement?: number;
    efficiency?: string;

    constructor(model: string, power: number, displacement?: number, efficiency?: string) {
        this.model = model;
        this.power = power;
        this.displacement = displacement;
        this.efficiency = efficiency;
    }
}

class Details {
    car: Car;
    engine: Engine;

    constructor(car: Car, engine: Engine) {
        this.car = car;
        this.engine = engine;
        this.print()
    }

    print() {
        let result = `Vehicle model: ${this.car.model}\nEngine model: ${this.engine.model}\n\tPower: ${this.engine.power}\n`;
        if (this.engine.displacement) result += `\tDisplacement: ${this.engine.displacement}\n`;
        if (this.engine.efficiency) result += `\tEfficiency: ${this.engine.efficiency}\n`;
        if (this.car.weight) result += `Weight: ${this.car.weight}\n`;
        if (this.car.color) result += `Color: ${this.car.color}\n`;

        console.log(result);
    }

}

const s = new Details(new Car('C class', 3982, 'red'), new Engine('MB177', 510, 3982, 'A'));
const t = new Details(new Car('C class'), new Engine('MB177', 510));
