# javascriptStudy

# 자바스크립트 심화 학습 문제


## 24장: 클로저

### 문제 1
카운터를 만드는 함수를 클로저를 사용하여 구현하세요. 이 카운터는 증가(increment), 감소(decrement), 현재 값 확인(getValue) 기능이 있어야 합니다.

### 문제 2
개인정보를 안전하게 보관하는 프라이빗 변수를 클로저를 사용하여 구현하세요. 이름과 나이는 특정 메서드로만 접근이 가능해야 합니다.

### 문제 3
클로저를 사용하여 여러 개의 카운터를 생성하고, 각각의 카운터가 독립적으로 동작하는 예제를 만드세요. 그리고 클로저가 이런 동작을 가능하게 하는 원리를 설명하세요.

## 23장: 실행 컨텍스트

### 문제 1
다음 코드의 실행 컨텍스트가 생성되고 실행되는 과정을 단계별로 설명하세요:
```javascript
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
```

### 문제 2
호이스팅이 실행 컨텍스트와 어떤 관계가 있는지 설명하고, var, let, const의 호이스팅 차이를 예제를 들어 설명하세요.

### 문제 3
실행 컨텍스트의 구성 요소인 LexicalEnvironment와 VariableEnvironment의 차이점을 설명하고, 이들이 코드 실행에 어떤 영향을 미치는지 예제를 들어 설명하세요.

## 22장: this

### 문제 1
다음 코드에서 this가 어떤 값을 가리키는지 설명하고, 각각의 경우에 this 바인딩이 어떻게 결정되는지 설명하세요:
```javascript
const obj = {
    name: 'Object',
    getName() {
        console.log(this.name);
    },
    inner: {
        name: 'Inner',
        getName() {
            console.log(this.name);
        }
    }
};
```

### 문제 2
call, apply, bind 메서드를 사용하여 this 바인딩을 명시적으로 변경하는 예제를 작성하세요. 각 메서드의 차이점도 설명하세요.

### 문제 3
화살표 함수와 일반 함수의 this 바인딩 차이를 보여주는 예제를 작성하고, 이러한 차이가 발생하는 이유를 설명하세요.


# 프로그래머스 알고리즘 문제

## [카운트 업](https://school.programmers.co.kr/learn/courses/30/lessons/181920)
- 클로저와 스코프 개념 연습 가능
- 배열 생성과 조작 연습

## [수 조작하기 1](https://school.programmers.co.kr/learn/courses/30/lessons/181926)
- this 바인딩과 메서드 체이닝 연습 가능
- 문자열과 조건문 처리 연습
  

## 21장: 빌트인 객체

### 문제 1
`Math` 객체를 사용하여 주어진 배열에서 최대값과 최소값을 찾고, 모든 요소의 합과 평균을 계산하는 함수를 작성하세요.

### 문제 2
`String` 객체의 메서드를 사용하여 주어진 문자열에서 모든 모음을 제거하고, 단어의 첫 글자만 대문자로 변환하는 함수를 작성하세요.

### 문제 3
`Date` 객체를 사용하여 현재 날짜로부터 100일 후의 날짜를 계산하고, 그 날짜가 무슨 요일인지 출력하는 함수를 작성하세요.

## 20장: strict mode

### 문제 1
다음 코드를 strict mode로 실행했을 때 어떤 에러가 발생하는지 설명하고, 이를 수정하세요:

```javascript
function example() {
  x = 10;
  delete Object.prototype;
  function inner() {}
  delete inner;
}
```

### 문제 2
strict mode가 왜 필요한지 설명하고, 이를 적용했을 때의 장점을 3가지 이상 나열하세요.

### 문제 3
strict mode에서 this의 동작이 어떻게 변하는지 예제를 들어 설명하세요.


## 19장: 프로토타입

### 문제 1
Person 생성자 함수를 만들고, 프로토타입을 이용해 모든 인스턴스가 공유하는 introduce 메서드를 추가하세요. 이 메서드는 person의 이름과 나이를 출력해야 합니다.

### 문제 2
프로토타입 체인을 이용하여 Animal, Dog, Labrador 객체를 생성하고, 각각의 프로토타입에 적절한 메서드를 추가하세요. 그리고 Labrador 인스턴스를 만들어 모든 메서드를 호출해보세요.

### 문제 3
프로토타입의 동작 방식에 대해 설명하세요. 객체에서 프로퍼티를 찾는 과정은 어떻게 이루어지나요?

## 2번째 스터디 알고리즘문제 (프로그래머스)

### [배열에서 문자열 대소문자 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/181875)

### [순서 바꾸기](https://school.programmers.co.kr/learn/courses/30/lessons/181891)


## 18장: 함수와 일급 객체

### 문제 1
함수를 인자로 받아 실행 시간을 측정하는 고차 함수 `measureTime`을 작성하세요. 이 함수는 전달받은 함수를 실행하고, 실행에 걸린 시간을 밀리초 단위로 반환해야 합니다.

### 문제 2
자바스크립트에서 함수가 일급 객체라는 것은 무엇을 의미하나요? 그리고 이것이 프로그래밍에 어떤 이점을 제공하나요?

### 문제 3
`add`, `subtract`, `multiply`, `divide` 함수를 작성하고, 이들을 객체의 메서드로 저장하는 `calculator` 객체를 생성하세요. 그리고 `calculate` 함수를 작성하여 연산자와 두 개의 숫자를 입력받아 `calculator` 객체의 적절한 메서드를 호출하도록 구현하세요.


## 17장: 생성자 함수에 의한 객체 생성

### 문제 1
학생 정보를 관리하는 `Student` 생성자 함수를 작성하세요. 이 함수는 이름, 나이, 학년을 프로퍼티로 가지며, 학생 정보를 출력하는 메서드를 포함해야 합니다.

### 문제 2
생성자 함수와 일반 함수의 차이점은 무엇인가요? 그리고 `new` 연산자를 사용하지 않고 생성자 함수를 호출하면 어떤 일이 발생하나요?

### 문제 3
`Circle` 생성자 함수를 만들어 원의 반지름을 입력받고, 원의 넓이와 둘레를 계산하는 메서드를 추가하세요. 그리고 이를 이용해 여러 개의 Circle 객체를 생성하고 정보를 출력해보세요.

# 1번째 스터디 알고리즘 문제 (프로그래머스)

## [조건에 맞게 수열 변환하기 3](https://school.programmers.co.kr/learn/courses/30/lessons/181835)

## [배열의 길이에 따라 다른 연산하기](https://school.programmers.co.kr/learn/courses/30/lessons/181854)
