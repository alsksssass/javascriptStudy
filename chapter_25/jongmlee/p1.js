// 은행 계좌를 나타내는 `Account` 클래스를 만들고,
// 입금, 출금, 잔액 조회 기능을 구현하세요.
// 잔액이 부족할 경우 출금이 불가능하도록 처리하세요

class Account {
	#balance = 0;
	constructor(balance) {
		this.#balance = balance;
	}
	deposit(cost) {
		this.#balance += cost;
	}
	withdrawar(cost) {
		if (this.#balance < cost) {
			console.log("잔액이 부족합니다");
		} else {
			this.#balance -= cost;
			return cost;
		}
	}
	balanceInquiry() {
		return this.#balance;
	}
}

const acc1 = new Account(0);
acc1.deposit(100);
//confirm.log(acc1.#balance);
console.log(acc1.balanceInquiry());
console.log(acc1.withdrawar(30));
console.log(acc1.balanceInquiry());

