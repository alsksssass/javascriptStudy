gpt answer
문제 1: 코드의 실행 컨텍스트 생성 및 실행 과정 단계별 설명

const x = 1;
function foo() {
    const y = 2;
    function bar() {
        const z = 3;
        console.log(x + y + z);
    }
    bar();
}
foo();

이 코드에서 실행 컨텍스트가 생성되고 실행되는 과정은 다음과 같습니다.

	1.	전역 컨텍스트 생성 및 초기화
	•	자바스크립트가 코드를 처음 실행할 때, 전역 컨텍스트가 생성됩니다.
	•	전역 실행 컨텍스트는 전역 객체(window 또는 global), 전역 변수 및 함수에 대한 참조를 포함합니다.
	•	전역 실행 컨텍스트에는 식별자 x와 foo가 포함됩니다.
	2.	전역 컨텍스트의 변수 및 함수 선언
	•	const x = 1이 실행되고, x는 전역 스코프에서 1로 초기화됩니다.
	•	함수 foo가 전역 컨텍스트에 정의됩니다. 이 단계에서는 함수의 바디는 실행되지 않고, foo에 대한 참조만 등록됩니다.
	3.	foo 함수 호출
	•	foo()를 호출하면 새로운 함수 실행 컨텍스트가 생성됩니다.
	•	foo의 실행 컨텍스트는 스택에 쌓이며, foo 함수 내에서 선언된 변수 및 내부 함수들을 관리합니다.
	4.	foo 실행 컨텍스트 내의 변수 및 함수 선언
	•	foo의 실행 컨텍스트가 생성되면 y와 bar가 등록됩니다.
	•	const y = 2가 실행되어 y가 2로 초기화됩니다.
	•	bar 함수가 foo의 스코프에 등록됩니다.
	5.	bar 함수 호출 및 실행
	•	bar()가 호출되면 bar의 새로운 함수 실행 컨텍스트가 생성됩니다.
	•	이 컨텍스트는 bar 함수 내의 변수 및 식별자를 관리하며, 스택에 쌓입니다.
	•	const z = 3이 실행되어 z가 3으로 초기화됩니다.
	•	console.log(x + y + z)가 실행됩니다. x는 전역 스코프에서, y는 foo의 스코프에서, z는 bar의 스코프에서 참조되어 출력값 6이 로그됩니다.
	6.	실행 컨텍스트 종료
	•	bar 함수가 종료되면서 bar의 실행 컨텍스트는 스택에서 제거됩니다.
	•	foo 함수도 종료되며 foo의 실행 컨텍스트가 스택에서 제거됩니다.
	•	전역 컨텍스트만 남게 되고, 프로그램이 종료됩니다.

문제 2: 호이스팅과 실행 컨텍스트의 관계, var, let, const의 차이

호이스팅은 실행 컨텍스트가 생성될 때 변수 선언 및 함수 선언을 스코프의 최상단으로 끌어올리는 자바스크립트의 특징입니다. 이 과정에서 변수를 초기화하지 않고 선언만 끌어올립니다.

var, let, const의 호이스팅 차이

	•	var: 선언이 호이스팅되지만 undefined로 초기화됩니다. 따라서, 선언 전에도 변수를 사용할 수 있습니다.
	•	let과 const: 선언은 호이스팅되지만, 초기화는 선언 이후에 발생합니다. 선언 전에 사용하려 하면 **Temporal Dead Zone (TDZ)**에 의해 참조 오류가 발생합니다.

예제 코드:

console.log(a); // undefined (호이스팅)
var a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 3;

	•	a는 var로 선언되어 undefined로 초기화된 후, 값이 할당되므로 undefined로 출력됩니다.
	•	b와 c는 let과 const로 선언되어 TDZ에 있으며, 초기화 전에 접근하면 참조 오류가 발생합니다.

문제 3: LexicalEnvironment와 VariableEnvironment의 차이점

LexicalEnvironment와 VariableEnvironment는 실행 컨텍스트의 구성 요소로, 자바스크립트가 변수와 함수를 저장하고 검색하는 데 중요한 역할을 합니다.

	•	LexicalEnvironment: 현재 스코프와 상위 스코프의 식별자를 관리하는 환경 레코드입니다. 함수가 호출될 때 생성되며, 스코프 체인을 따라 상위 스코프의 식별자도 포함합니다.
	•	VariableEnvironment: 변수가 선언될 때 값을 저장하는 환경입니다. 함수 호출 시점에는 LexicalEnvironment와 동일하게 시작하지만, 함수 실행 중 변수의 값이 변경될 때 이 값이 저장되는 곳입니다.

예제 코드와 설명

const a = 1;
function outer() {
    const b = 2;
    function inner() {
        const c = 3;
        console.log(a, b, c);
    }
    inner();
}
outer();

	1.	전역 컨텍스트에서는 a가 LexicalEnvironment와 VariableEnvironment에 저장됩니다.
	2.	outer 함수 실행 시: outer의 LexicalEnvironment는 전역 스코프를 참조할 수 있으며, VariableEnvironment에는 b가 저장됩니다.
	3.	inner 함수 실행 시: inner의 LexicalEnvironment는 outer의 스코프를 참조할 수 있으며, VariableEnvironment에는 c가 저장됩니다.
	4.	console.log(a, b, c) 실행 시 LexicalEnvironment와 VariableEnvironment를 따라 전역, outer, inner 스코프의 변수들이 차례대로 참조됩니다.

이렇게 LexicalEnvironment와 VariableEnvironment가 실행 컨텍스트를 통해 관리되므로, 자바스크립트 엔진이 스코프 체인을 따라 식별자와 변수를 정확히 찾아 접근할 수 있게 됩니다.

