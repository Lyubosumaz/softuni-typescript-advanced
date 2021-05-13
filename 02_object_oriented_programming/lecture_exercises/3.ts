interface Racing {
    createRacer(name: string, fuel: number, position: number): void;
    consumeFuel(usedFuel: number, name: string): void;
    overtake(gained: string, lost: string): void;
}

type Racer = {
    name: string;
    fuel: number;
    position: number;
    isDNF: boolean;
}

class Circuit implements Racing {
    public racers: Racer[];

    constructor(racers: Racer[] = []) {
        this.racers = racers;
    }

    createRacer(name: string, fuel: number, position: number) {
        let alreadyCreated: boolean = false;
        this.racers.forEach((i) => { if (i.name === name) alreadyCreated = true });
        if (!alreadyCreated) this.racers.push({ name, fuel, position, isDNF: false });
    }

    consumeFuel(usedFuel: number, name: string) {
        this.racers.forEach(i => {
            if (i.name === name) {
                if (i.fuel - usedFuel <= 0) {
                    i.isDNF = true;
                    i.fuel = 0;
                    return;
                }

                i.fuel -= usedFuel;
            }
        })
    }

    overtake(gained: string, lost: string) {
        let racerGained: Racer | {} = {};
        let racerLost: Racer | {} = {};
        let lastPlace: number = -Infinity;

        this.racers.forEach(i => {
            if (i.name === gained) racerGained = i;
            if (i.name === lost) racerLost = i;
            if (lastPlace < i.position) lastPlace = i.position;
        });

        if (
            this.instanceOfRacer(racerGained) && !racerGained.isDNF &&
            this.instanceOfRacer(racerLost) && !racerLost.isDNF
        ) {
            if (
                lastPlace === racerLost.position
            ) {
                return `${racerLost.name} is on the back of the grid!`;
            }

            if (racerGained.position > racerLost.position) {
                const swapPosition = racerLost.position;

                racerLost.position = racerGained.position;
                racerGained.position = swapPosition;
            }
        }

    }

    instanceOfRacer(object: any): object is Racer {
        return 'isDNF' in object;
    }

    showPositions(): string {
        let result: string = '';

        this.racers
            .sort((a, b) => a.position - b.position)
            .forEach((i) => result += `${i.name} finished on ${i.position} with ${i.fuel} l remaining\n`);

        return result;
    }
}

const race = new Circuit();
race.createRacer('LH', 100, 1);
race.createRacer('LH', 100, 4);
race.createRacer('VB', 100, 2);
race.createRacer('DR', 100, 3);
// console.log(race.racers);

race.consumeFuel(92, 'LH');
// race.consumeFuel(9, 'LH');
race.consumeFuel(87, 'VB');
race.consumeFuel(89, 'DR');
// console.log(race.racers);

race.overtake('LH', 'VB');
race.overtake('DR', 'VB');
console.log(race.overtake('LH', 'VB'));
// console.log(race.racers);

console.log(race.showPositions());