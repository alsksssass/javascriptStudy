/*
Chapter 33

### 문제 2
Symbol.iterator를 구현하여 커스텀 이터러블 객체를 만드세요. 피보나치 수열을 생성하는 이터러블 객체를 구현해보세요.

*/

// Your solution
class pivoIter{
	[Symbol.iterator](){
	  let base =0;
	  const phi = (1 + Math.sqrt(5)) / 2;
	  return {
		next(){
		  const value = Math.round((Math.pow(phi, base) - Math.pow(-phi, -base)) / Math.sqrt(5));
		  base++;
		  return {value : value, done : base > 10};
			  }
	}
	}
  }
  
  const pivo = new pivoIter();
  for(const num of pivo)
	console.log(num);
  