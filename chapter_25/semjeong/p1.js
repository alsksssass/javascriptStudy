class Account {
  constructor(money) {
    if (money)
      this.money = money;
    else this.money = 0;
  }

  deposit(amount) {
    this.money += amount;
  }

  withdraw(amount) {
    if (this.money < amount) return false;
    this.money -= amount;
    return true;
  }

  showMoney() {
    console.log(this.money);
  }
}

const a = new Account(10);
a.showMoney();
a.deposit(20);
a.showMoney();
console.log(a.withdraw(400));
console.log(a.withdraw(4));
a.showMoney();

const b = new Account();
