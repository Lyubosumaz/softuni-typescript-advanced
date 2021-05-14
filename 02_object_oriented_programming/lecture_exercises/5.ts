abstract class ActivitiesMy {
    abstract parkVehicle(plate: string): void;
    abstract payForStay(hours: number, rate: number, plate: string): void;
    abstract leaveTheParking(plate: string): void;
}

type ParkedVehiclesMy = { plate: string, didPay: boolean };

class ParkingLotMy extends ActivitiesMy {
    public capacity: number;
    public revenue: number;
    public parkedVehicles: ParkedVehiclesMy[] = []

    constructor(
        capacity: number,
        revenue: number = 0,
        parkedVehicles: ParkedVehiclesMy[] = []
    ) {
        super();
        this.capacity = capacity;
        this.revenue = revenue;
        this.parkedVehicles = parkedVehicles;
    }

    overview() {
        return `The current revenue of the parking lot is ${this.revenue} and${this.parkedVehicles.map(i => ` ${i.plate}`)} are parked!`;
    }

    parkVehicle(plate: string) {
        if (this.capacity > this.parkedVehicles.length) this.parkedVehicles.push({ plate, didPay: false });
        else throw "No more available spaces in the parking lot!";
    }

    payForStay(hours: number, rate: number, plate: string) {
        const vehicle = this.findParkedCar(plate);
        if (vehicle) {
            this.revenue += rate * hours;
            vehicle.didPay = true;
        }
        else throw "There is no such vehicle parked in the parking lot!";
    }

    leaveTheParking(plate: string) {
        const vehicle = this.findParkedCar(plate);
        if (!vehicle) { throw "There is no such vehicle parked in the parking lot!"; }
        if (vehicle && !vehicle.didPay) { throw "You must pay before leaving!" }
        this.parkedVehicles = this.parkedVehicles.filter(i => i.plate !== plate);
    }

    findParkedCar(registrationPlate: string): ParkedVehiclesMy | undefined {
        return this.parkedVehicles.find(car => car.plate === registrationPlate);
    }

}

const pMy = new ParkingLotMy(5);
pMy.parkVehicle('CA1111CA');
pMy.parkVehicle('CA2222CA');
pMy.parkVehicle('CA3333CA');
pMy.parkVehicle('CA4444CA');
pMy.parkVehicle('CA5555CA');

pMy.payForStay(4, 2, 'CA1111CA');
pMy.payForStay(2, 2, 'CA2222CA');
pMy.payForStay(7, 2, 'CA4444CA');

pMy.leaveTheParking('CA1111CA');
pMy.leaveTheParking('CA4444CA');

console.log(pMy.overview());
