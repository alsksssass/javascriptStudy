class Todo{
	constructor(){
		this.body = this.makeElement('div');
		this.body.classList.add('Todo_List');
		document.body.appendChild(this.body);
		this.input = this.makeElement('input','write here','input_box');
		this.body.appendChild(this.input); 
		this.push_button = this.makeElement('button','push','input_boutton');
		this.sortd_button = this.makeElement('button','날짜순','sort_boutton');
		this.sorta_button = this.makeElement('button','가나다순','sort_boutton');
		this.sortd_button.classList.add('sortd_btn');
		this.sorta_button.classList.add('sorta_btn');
		this.sortd_button.addEventListener('click',(event)=>{
			const items = [...document.getElementsByClassName('do-list')];
            items.sort((a,b) => this.converter(a,b,'date'));
            items.forEach(item => this.body.prepend(item));
		});
		this.sorta_button.addEventListener('click',(event)=>{
			const items = [...document.getElementsByClassName('do-list')];
            items.sort((a,b) => this.converter(a,b));
            items.forEach(item => this.body.prepend(item));
		});
		this.push_button.classList.add('input_btn');
		this.push_button.addEventListener('click',()=>{
		if(this.input.value.length === 0) return;
		this.addList(this.input.value);
		this.input.value ='';
		})
		this.body.appendChild(this.push_button);
		this.body.appendChild(this.sortd_button);
		this.body.appendChild(this.sorta_button);
	}
	converter(a,b,type ='abc'){
		if(type === 'date'){
			const trans_a = a.children[0].children[1].id;
			const trans_b = b.children[0].children[1].id; 
			return trans_a > trans_b ? -1 : 1;
		}
		else{
			const trans_a = a.children[0].children[0].innerText;
			const trans_b = b.children[0].children[0].innerText; 
			return trans_a > trans_b ? -1 : 1;
	}
	}

	makeElement(str,data = null,id = null,class_name = null){
	const $bodyCouser = document.createElement(str);
	if(data) $bodyCouser.innerText = data;
	if(id) $bodyCouser.id = id;
	if(str === 'input') {
		$bodyCouser.placeholder = data;
	}
	if(class_name) $bodyCouser.classList.add(class_name);
	return $bodyCouser;
	}
	addList(str) {
		const $div = document.createElement('div');
		const $List = document.createElement('li');
		const $button = document.createElement('button');
		const copy_date = new Date();
		$List.id = Number(copy_date);
		$List.classList.add('do-list');
		$button.id = $List.id;
		$button.classList.add('delete-btn');
		$button.innerText = 'X';
		$button.addEventListener('click', function (event) {
			document.getElementById(event.target.id).remove()
		});
		$div.classList.add('text-container');
		$div.appendChild(this.makeElement('span', str,null,'todo-text'));
		$div.appendChild(this.makeElement('span', copy_date.toLocaleString('ko-KR', { timeZone: 'UTC' }),$List.id,'todo-date'));
		$div.appendChild($button);
		$List.appendChild($div);
		this.body.prepend($List);
	}
}

let istodo = false;
function todoStart(){
	const trash = document.querySelectorAll('.del').forEach(a=>a.remove());
	const todo = new Todo;
}
function requestAnimation(){
	gague1+=10;
	requestEl.style.height = `${gague1}px`;
	const id = requestAnimationFrame(requestAnimation);
	if(gague1 > window.innerHeight){
		cancelAnimationFrame(id);
		if(!istodo) {
			istodo = true;
			todoStart();
		};
	}
		
}
function intervalDo(){
	const id = setInterval(()=>{
		gague2+=10;
		intervalEl.style.height = `${gague2}px`;
		if(gague2 > window.innerHeight) {
			clearInterval(id)
			if(!istodo) {
				istodo = true;
				todoStart();
			};
		};
	},1000/60);
}
let gague1 =10;
let gague2 =10;
const start_btn = document.createElement('button');
const intervalEl = document.createElement('div');
const intervaltext = document.createElement('span');
intervaltext.innerText = 'interval';
intervaltext.classList.add('del');
const requsttext = document.createElement('span');
requsttext.innerText = 'request';
requsttext.classList.add('del');
intervalEl.classList.add('ex','intervalEl','del');
const requestEl = document.createElement('div');
requestEl.classList.add('ex','requstEl','del');

start_btn.addEventListener('click',(event)=>{
	event.target.remove();
	requestAnimation();
	intervalDo();
});
start_btn.innerText = '시작';
document.body.append(start_btn);
document.body.append(intervalEl);
document.body.append(intervaltext);
document.body.append(requestEl);
document.body.append(requsttext);
// const todo = new Todo();