/*
Chapter 34

### 문제 2
무한 피보나치 수열을 생성하는 이터레이터를 구현하세요.

*/

// Your solution
class UnlimitFibonacci{
	constructor(){
		this.pre =0;
		this.cur =1;
	}
	
	[Symbol.iterator] () {return this};

	next(){
		const value =this.cur + this.pre;
		[this.cur, this.pre] = [this.cur + this.pre, this.cur];
		return {value:this.cur}
	}
	
}
const unlimit = new UnlimitFibonacci();

for(const num of unlimit){
	console.log(num);
	if(num > 100) break;
}