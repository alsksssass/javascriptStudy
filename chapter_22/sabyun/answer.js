// 다음 코드에서 this가 어떤 값을 가리키는지 설명하고, 각각의 경우에 this 바인딩이 어떻게 결정되는지 설명하세요:
var name = 'gloval';

const obj = {
    name: 'Object',
    getName() {
        console.log(this.name); // this 는 obj
    },
    inner: {
        name: 'Inner',
        getName() {
            console.log(this.name); // this는 inner
        }
    },
    arrow : ()=> console.log(this.name)
};

// 문제 2
// call, apply, bind 메서드를 사용하여 this 바인딩을 명시적으로 변경하는 예제를 작성하세요. 각 메서드의 차이점도 설명하세요.
obj.inner.getName.call(obj); // 즉시실행
obj.inner.getName.apply(obj);// 즉시실행
obj.inner.getName.bind(obj)(); //즉시실행 x

// 문제 3
// 화살표 함수와 일반 함수의 this 바인딩 차이를 보여주는 예제를 작성하고, 이러한 차이가 발생하는 이유를 설명하세요.

function ex (){
    console.log(this);
}

// ex();

setTimeout(() => console.log('this settime out',this), 10);

console.log('arrow' , obj.arrow());
console.log('gloval' , this);