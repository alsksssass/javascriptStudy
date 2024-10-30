class Account{
	constructor(){
		this.amount = 0;
	}

	draw(money){
		if(this.amount - money < 0)
				return console.log('not enough money');
		this.amount -= money;
		return this.balence(); 
	}
	deposit(money){
		if(money < 0) return console.log('input error plz positive number!');
		this.amount+= money;
		return this.balence()
	}
	balence(){
		return console.log(`the balence is ${this.amount} left`);
	}
}

const myAcount = new Account();
myAcount.draw(100);
myAcount.deposit(-1);
myAcount.deposit(100);
myAcount.draw(10);