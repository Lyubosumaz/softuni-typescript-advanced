interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
};

class User {
    private _myProp!: string;

    constructor(public id: number, public username: string) {
        // this._myProp = '';
    }

    set myProp(value: string) {
        this._myProp = value;
    }

    get someProp() {
        return this._myProp;
    }
}

const u = new User(1, 'aa');
u.someProp;

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res: Response) => res.json<User[]>())
    .then((users) => {
        // users.forEach(user => console.log(user.address.street))
        users.forEach(user => console.log(user.username))
    });
