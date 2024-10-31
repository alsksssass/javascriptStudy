class Account {
    constructor(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    
    deposit(money) {
        this.amount += money;
    }

    withdraw(money) {
        if (this.amount < money)
            console.log('No enough money!');
        else
            this.amount -= money;
    }

    get amount() {
        return this.amount;
    }
}

const example = new Account('somilee', 60);
example.deposit(20);
example.withdraw(10);
console.log(example.amount);
example.withdraw(80);