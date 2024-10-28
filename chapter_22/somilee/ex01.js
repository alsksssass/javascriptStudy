//Q. 다음 코드에서 this가 어떤 값을 가리키는지 설명하고, 각각의 경우에 this 바인딩이 어떻게 결정되는지 설명하세요

const obj = {
    name: 'Object',
    getName() {
        console.log(this.name); //obj   qkdlseld -> 'Object' 출력
    },
    inner: {
        name: 'Inner',
        getName() {
            console.log(this.name); //obj.inner 바인딩 -> 'Inner' 출력
        }
    }
};

obj.getName();
obj.inner.getName();