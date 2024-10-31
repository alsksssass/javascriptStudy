

/**
 * 은행 계좌를 나타내는 Account 클래스를 만들고,
 *  입금, 출금, 잔액 조회 기능을 구현하세요.
 *  잔액이 부족할 경우 출금이 불가능하도록 처리하세요.
 */

class Account {

	amount = 0;
	// constructor(amount) {
	// 	this.amount = amount;
	// }
	get getAmount() {
		return `${this.amount}`; // 문자열로 변환
	}

	deposit(amount) {
		if (amount > 0) {
			this.amount += amount;
		}
	}
	withdrawal (amount) {
		if (amount > 0 && this.amount - amount > -1) {
			this.amount -= amount;
		}
		else 
			console.log("출금 불가")
	}
}

const myAccount = new Account();

console.log(myAccount.getAmount); // 함수가 아니라소ㅓ
myAccount.deposit(10);
myAccount.withdrawal(5);
console.log(myAccount.getAmount);
myAccount.withdrawal(1000);
