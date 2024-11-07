/*
Chapter 33

### 문제 3
내장 심볼(Built-in Symbol)을 사용하여 객체의 기본 동작을 커스터마이징하는 예제를 만드세요. (Symbol.toPrimitive, Symbol.toStringTag 등 활용)

*/

// Your solution
class symTranslater{
	constructor(value){
	  this.value = value;
	}
  
	[Symbol.toPrimitive](hint){
	  if(hint === 'number')
		return Number.parseInt(this.value,2);
	  else{
		return this.value;
	  }
	}
	[Symbol.toStringTag] = 'sabyun maded!'; 
  }
  
  
  const test = new symTranslater(10);
  
  console.log(Object.prototype.toString.apply(test));
  console.log(+test);
  console.log(`${test}`);
  console.log(test+1);