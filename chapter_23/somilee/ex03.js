/*
Q. 실행 컨텍스트의 구성 요소인 LexicalEnvironment와 VariableEnvironment의 차이점을 설명하고, 
   이들이 코드 실행에 어떤 영향을 미치는지 예제를 들어 설명하세요.

<렉시컬 환경(Lexical Environment)>
- 현재 실행 중인 코드에서 사용되는 각 함수나 블록의 변수와 함수들을 저장, 상위 스코프에 대한 참조를 담고 있습니다.
- 함수가 생성될 때 해당 함수의 렉시컬 환경이 결정

<변수 환경(Variable Environment)>
- 변수 선언의 초기 상태를 저장하는 환경 -> 초기값 설정, 호이스팅
- LexicalEnvironment와 유사하지만, 변수의 선언 시점에 대한 정보를 관리하는 역할을 합니다.
*/

const a = 10;

function outer() {
    const b = 20;

    function inner() {
        const c = 30;
        console.log(a + b + c);
    }

    inner();
}
outer();

/*
1. 전역 실행 컨텍스트가 생성
- LexicalEnvironment: a와 함수 outer가 등록
- VariableEnvironment: a의 초기값을 10으로 설정

2. outer 함수 실행 컨텍스트가 생성
- outer의 LexicalEnvironment에는 b가 등록, b는 20으로 초기화
- outer의 LexicalEnvironment는 전역 컨텍스트의 LexicalEnvironment 참조 -> outer는 전역 변수 a에 접근 가능

3. inner 함수 실행 컨텍스트가 생성
- inner의 LexicalEnvironment에는 c가 등록, c는 30으로 초기화
- inner의 LexicalEnvironment는 outer 함수의 LexicalEnvironment 참조 -> b에 접근 가능, a에 접근 가능
*/
