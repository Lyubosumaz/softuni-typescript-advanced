const opn = require('open');

interface IMyGeolocation<T> {
    showCoordinates(lat: T, lon: T): void
}

class MyGeolocation implements IMyGeolocation<number> {
    constructor(private latitude: number, private longitude: number) { }

    showCoordinates = () => {
        (async () => {
            await opn(`https://www.google.com/maps/search/${this.latitude},${this.longitude}`, { wait: true });
        })();

    }
}

const locator = new MyGeolocation(42.698334, 23.319941);
locator.showCoordinates()