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
		// 문제가 되는 코드
		this.sortd_button.addEventListener('click', (event) => {
			const items = [...document.getElementsByClassName('do-list')];
			items.sort((a, b) => this.converter(a, b, 'date'));
			items.forEach(item => this.body.prepend(item)); // 매번 레이아웃 재계산 발생
		});
		/*
		this.sortd_button.addEventListener('click',(event)=>{
		const items = [...document.getElementsByClassName('do-list')];
		items.sort((a,b) => this.converter(a,b,'date'));
    
		// DocumentFragment 사용하여 일괄 처리
		const fragment = document.createDocumentFragment();
		items.forEach(item => fragment.prepend(item));
		this.body.appendChild(fragment);
		});
		*/
		this.sorta_button.addEventListener('click', (event) => {
			const items = [...document.getElementsByClassName('do-list')];
            items.sort((a,b) => this.converter(a,b));
            items.forEach(item => this.body.prepend(item));
		});
		this.push_button.classList.add('input_btn');
		this.push_button.addEventListener('click',()=>{
		if(String(this.input.value).trim().length === 0) {
			this.input.value = "";
			this.input.placeholder = "입력값이 없습니다";
			this.input.classList.remove()
			this.input.classList.add('error');
			return;
		}
		this.addList(this.input.value);
		this.input.classList.remove('error');
		this.input.placeholder = "write here";
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
// 문제가 되는 코드
// function requestAnimation(){
//     gague1+=10;
//     requestEl.style.height = `${gague1}px`; // 레이아웃 변경 발생
//     const id = requestAnimationFrame(requestAnimation);
//     if(gague1 > window.innerHeight){ // 레이아웃 강제 계산 발생
//         cancelAnimationFrame(id);
//         if(!istodo) {
//             istodo = true;
//             todoStart();
//         };
//     }
// }

function requestAnimation(){
    // 레이아웃 읽기를 한 번만 수행
    const windowHeight = window.innerHeight;
    
    // transform을 사용하여 레이아웃 리플로우 방지
	// 리플로우란? 리플로우(Reflow)는 브라우저가 웹 페이지의 레이아웃을 다시 계산하는 프로세스입니다. DOM 요소의 크기나 위치가 변경될 때 발생하며, 성능에 큰 영향을 미칩니다.
    gague1+=10;
    requestEl.style.transform = `scaleY(${gague1/windowHeight})`;
    requestEl.style.transformOrigin = 'bottom';
    
    const id = requestAnimationFrame(requestAnimation);
    if(gague1 > windowHeight){
        cancelAnimationFrame(id);
        if(!istodo) {
            istodo = true;
            todoStart();
        };
    }
}

// function intervalDo(){
//     const id = setInterval(()=>{
//         gague2+=10;
//         intervalEl.style.height = `${gague2}px`; // 레이아웃 변경 발생
//         if(gague2 > window.innerHeight) { // 레이아웃 강제 계산 발생
//             clearInterval(id)
//             if(!istodo) {
//                 istodo = true;
//                 todoStart();
//             };
//         };
//     },1000/60);
// }

function intervalDo(){
    // 레이아웃 읽기를 한 번만 수행
    const windowHeight = window.innerHeight;
    
    const id = setInterval(()=>{
        gague2+=10;
        // transform을 사용하여 레이아웃 리플로우 방지
        intervalEl.style.transform = `scaleY(${gague2/windowHeight})`;
        intervalEl.style.transformOrigin = 'bottom';
        
        if(gague2 > windowHeight) {
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