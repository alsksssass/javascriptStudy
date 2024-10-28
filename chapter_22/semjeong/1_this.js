const obj = {
    name: 'Object',
    getName() {
		/*
		 this == obj
		 메서드 내부의 this > 메서드를 호출한 객체에 바인딩
		*/
        console.log(this.name); 
    },
    inner: {
        name: 'Inner',
        getName() {
			/*
			 this == inner
			 메서드 내부의 this > 메서드를 호출한 객체에 바인딩
			*/
            console.log(this.name);
        }
    }
};

obj.getName();
obj.inner.getName();