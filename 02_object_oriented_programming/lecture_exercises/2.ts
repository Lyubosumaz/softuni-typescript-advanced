type Member = [string, number];

class Family {
    public family: Member[];

    constructor(family: Member[] = []) {
        this.family = family
    }

    addNewMember(value: Member) {
        this.family.push(value);
    }

    oldestMember() {
        let oldestMemberName: string = '';
        let oldestAge: number = -Infinity;

        this.family.forEach(([name, age]: Member) => {
            if (oldestAge < age) {
                oldestMemberName = name;
                oldestAge = age;
            }
        });

        return `The oldest member is ${oldestMemberName} and is ${oldestAge} years old.`;
    }
}

const member = new Family();
member.addNewMember(['Ivan', 13]);
member.addNewMember(['Todor', 45]);
member.addNewMember(['Georgi', 37]);
member.addNewMember(['Viktor', 30]);
console.log(member.oldestMember());