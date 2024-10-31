class System {
	idx = 0;
	userList = [];
	bookList = [{bookId:0,name:"A",  user:null},
	{bookId:1,name:"B", user:null},
	{bookId:2,name:"C", user:null}]
	constructor() {

	}
	getTotalUser(){
		return this.idx;
	}
	getUserInfo(id) {
		return this.userList.find(user => user.id === id);
	}
	addUser(name) {
		this.idx += 1;
		this.userList.push({id: this.idx, name })
	}

	borrowBook(bookName, userId){

		const user = this.getUserInfo(userId);
		const book = this.bookList.find(book => book.name === bookName);

		if (user && book && this.bookList[book.bookId].user === null){
			this.bookList[book.bookId].user = userId;
			
			console.log("대출 완");
		}

	}
	returnBook(bookName){
		const book = this.bookList.find(book => book.name === bookName);
	
		if (book && book.state !== null) {
			this.bookList[book.bookId].user = 0;
			console.log("반납 완");
		}
	}
}

const test = new System;
test.addUser("jimchoi");
test.addUser("jimin");
console.log(test.getTotalUser());
console.log(test.getUserInfo(1));
console.log(test.getUserInfo(2));
test.borrowBook("A", 1);
test.returnBook("A");
