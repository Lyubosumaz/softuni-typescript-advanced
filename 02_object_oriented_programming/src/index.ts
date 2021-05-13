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

// class User {
//     private _myProp!: string;

//     constructor(public id: number, public username: string) {
//         // this._myProp = '';
//     }

//     set myProp(value: string) {
//         this._myProp = value;
//     }

//     get someProp() {
//         return this._myProp;
//     }
// }

// const u = new User(1, 'aa');
// u.someProp;

const usernameInput = document.getElementById('username') as HTMLInputElement;
const addButton = document.getElementById('add-btn') as HTMLButtonElement;
const userList = document.getElementById('user-list') as HTMLUListElement;

const createLiElement = (value: string) => {
    const li = document.createElement('li') as HTMLLIElement;
    li.innerHTML = value;
    return li;
}

const createAndAppendLi = (value: string) => {
    const li = createLiElement(value)
    userList.appendChild(li);

}

addButton.addEventListener('click', () => {
    createAndAppendLi(usernameInput.value);
    usernameInput.value = '';
});

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res: Response) => res.json<IUser[]>())
    .then((users) => {
        // users.forEach(user => console.log(user.address.street))
        users.forEach(user => createAndAppendLi(user.username))
    });

abstract class Test {
    abstract test(): void;
}