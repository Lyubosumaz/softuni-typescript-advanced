interface Dealership<T> {
    dealershipName: T;
    soldCars: number;
}

interface Actions<T> {
    sellCar(dealerID: string | number, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Actions<T> {
    private modelsSold: { [key: string]: T } = {};
    constructor(public dealershipName: T, public soldCars: number = 0) { }

    sellCar(dealerID: string | number, model: T): void {
        this.modelsSold[dealerID] = model;
        this.soldCars++;
    }

    showDetails() {
        let details = `${this.dealershipName}:\n`;
        Object.entries(this.modelsSold).forEach(([key, value]) => { details += `${key} sold ${value}\n`; });
        return details;
    }
}

const dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());