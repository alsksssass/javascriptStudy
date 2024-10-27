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

obj.getName();  // Object
obj.inner.getName();  // Inner

// 기본적으로 자기 자신이 속한 객체를 가리키는 this