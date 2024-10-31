class LibrarySystem {
  #member = {};
  #withdraw = {};
  #memberNum = 0;

  addMember(member) {
    this.#member[member] = this.#memberNum++;
  }

  withdraw(memberId, book) {
    if (!Object.hasOwn(this.#withdraw, memberId))
      this.#withdraw[memberId] = [];
    this.#withdraw[memberId].push(book);
    console.log(this.#withdraw[memberId]);
  }

  ret(memberId, book) {
    if (Object.hasOwn(this.#withdraw, memberId))
      this.#withdraw[memberId].splice(this.#withdraw[memberId].indexOf(book), 1);
    console.log(this.#withdraw[memberId]);
  }

  getMemberId(member) {
    return this.#member[member];
  }
}

const sys = new LibrarySystem();
sys.addMember("semjeong");
console.log(sys.getMemberId("semjeong"));
sys.addMember("asdf");
console.log(sys.getMemberId("asdf"));
sys.withdraw(sys.getMemberId("semjeong"), "programming book");
sys.withdraw(sys.getMemberId("semjeong"), "programming book2");
sys.ret(sys.getMemberId("semjeong"), "programming book");
