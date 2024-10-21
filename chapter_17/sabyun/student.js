class student{
	constructor(){
		this.name = 'sabyun';
		this.age = 35;
		this.grade = 5;
	}

	print(){
		console.log(`나는 ${this.name} 이고 나이는 ${this.age} 이고 레벨은 ${this.grade} 입니다.`);
	}
}

const st = new student();

st.print();