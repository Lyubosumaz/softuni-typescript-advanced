// abstract class CreateAccount<T, C> {
//     constructor(public bankName: T, public bankID: C) { }
// }

// class PersonalAccount extends CreateAccount<string, string> {
//     public money: number;
//     public recentTransactions: {};

//     constructor(readonly ownerName: string) { };

//     deposit(amount: number) {
//         this.money += amount;
//     }

//     expense(amount, expenseType) {
//         if (this.money - amount >= 0)
//     }
// }