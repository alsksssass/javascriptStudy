class Library {
	#user = [];
	addUser(name){
		if(this.#user[name]){
			console.log('user alreay exsist!');
			return;
		}
		this.#user[name] = {
			name,
			bookList : [],
		};
		console.log(`new user added! ${name} 's id  = ${name}`);
	}
	deleteUser(name){
		if(!this.#user[name]) return console.log('there is no userdatabase');
		delete this.#user[name];
		console.log(`${name} was deleted on database!`);
	}
	rentBook(id,name){
	if(id < 0 || id > this.#user.length) return;
	this.#user[id].bookList.push(name);
	this.showLentalList(id);
	}
	returnBook(id,name){
	if(id < 0 || id > this.#user.length) return;
	this.#user[id].bookList = this.#user[id].bookList.filter(book => book !== name);
	this.showLentalList(id);
	}
	showLentalList(id){
		console.log(`${id} 's rental List = ${this.#user[id].bookList}`);
	}
}

const gaepoLibrary = new Library();

gaepoLibrary.addUser('sabyun');
gaepoLibrary.rentBook('sabyun','deep dive javascript');
gaepoLibrary.returnBook('sabyun','deep dive javascript');
gaepoLibrary.addUser('sabyun');
gaepoLibrary.addUser('eunbyel');
gaepoLibrary.showLentalList('eunbyel');
gaepoLibrary.deleteUser('sabyun');
gaepoLibrary.deleteUser('sabyun');
// console.log(gaepoLibrary.#user);