class Account{
	constructor(){
		this.amount = 0;
	}

	draw(money){
		if(this.amount - money < 0)
				return 'not enough money';
		this.amount -= money;
		return money; 
	}
	deposit(money){
		
	}
}