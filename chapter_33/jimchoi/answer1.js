/*
Chapter 33

### 문제 1
Symbol을 사용하여 객체의 프라이빗 프로퍼티를 구현하는 예제를 작성하세요. 특정 메서드로만 접근 가능한 데이터를 관리해보세요.

*/

// Your solution

const Direction  =Object.freeze ({ //Object.freeze 는 객체 동결 메서드
	UP: Symbol('up'),
	DOWN:Symbol('down'),
	LEFT: Symbol('left'),
	RIGHT: Symbol('right')
})

const d = Direction.UP;

if ( d === Direction.UP)
	console.log('같다');