// private 필드와 static 메서드를 사용하여 도서관 회원 관리 시스템을 구현하세요.
// 회원 ID는 자동으로 생성되어야 하며, 대출 현황을 private하게 관리해야 합니다.

class LibraryMemeber {
	static memberIdCounter = 1;
	static members = [];
	#borrowedBooks = [];

	constructor(name) {
		this.id = LibraryMemeber.memberIdCounter++;
		this.name = name;
		LibraryMemeber.members.push(this);
	}

	borrowBook(book) {
		this.#borrowedBooks.push(book);
	}

	returnBook(book) {
		this.#borrowedBooks = this.#borrowedBooks.filter(b => b !== book);
	}

	static getMemberById(id) {
		return LibraryMemeber.members.find(member => member.id === id);
	}
}

const member = new LibraryMemeber("Lebron");
member.borrowBook("No Longer Human");
console.log(LibraryMemeber.getMemberById(1));
