/*
Chapter 33

### 문제 1
Symbol을 사용하여 객체의 프라이빗 프로퍼티를 구현하는 예제를 작성하세요. 특정 메서드로만 접근 가능한 데이터를 관리해보세요.

*/

// Your solution
class hidden{
	[Symbol.for('hidden')] = 'sabyun';
  
	geter(){
	  return this[Symbol.for('hidden')];
	}
  } 
  const a = new hidden();
  
  console.log(a.geter());
  console.log(a[Symbol.for('hidden')]);
  