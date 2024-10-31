class LibraryMember {
    #rentalList

    constructor(name) {
        this.name = name;
        this.id = Math.floor(Math.random() * 10000);
        this.#rentalList = [];
    }

    rental(bookName) {
        if(this.#rentalList.length >= 5)
            console.log('대여 가능 갯수 초과');
        else {
            this.#rentalList.push(bookName);
            console.log(`${this.id} ${this.name} ${bookName} 대여됨`);
        }
    }

    return(bookName) {
        const idx = this.#rentalList.indexOf(bookName);
        if (idx === -1)
            console.log(`${bookName} 대여 이력 없음`);
        else {
            this.#rentalList.splice(idx,1);
            console.log(`${this.id} ${this.name} ${bookName} 반납됨`);
        }
    }
}

const member1 = new LibraryMember('somilee');
member1.rental('해리포터');
member1.return('헝거게임');
member1.rental('헝거게임');
member1.return('헝거게임');