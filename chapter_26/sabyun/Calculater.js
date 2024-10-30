class Calculater{
	answer = 0;
	add (a,b) {
		if(arguments.length >1) this.answer += a+b
		else this.answer += a;
		return this;
	}
	subtract(a,b) {
		if(arguments.length >1) this.answer += a-b
		else this.answer -= a;
		return this;
	}
	divide(a,b) {
		if(arguments.length >1) this.answer += a/b
		else this.answer /= a;
		return this;
	}
	multiple(a,b) {
		if(arguments.length >1) this.answer += a*b
		else this.answer *= a;
		return this;
	}
}

const num = new Calculater();

num.add(1,2).multiple(2).divide(2);
console.log(num.answer);

