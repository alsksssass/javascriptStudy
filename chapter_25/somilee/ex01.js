class Account {
    constructor(name, amount) {
        this._name = name;
        this._amount = amount;
    }
    
    deposit(money) {
        this._amount += money;
    }

    withdraw(money) {
        if (this._amount < money)
            console.log('No enough money!\n');
        else
            this._amount -= money;
    }

    get amount() {
        return this._amount;
    }
}

const example = new Account('somilee', 60);
example.deposit(20);
example.withdraw(10);
console.log(example.amount);
example.withdraw(80);