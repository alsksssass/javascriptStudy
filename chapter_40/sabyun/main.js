const pre_mouse ={
	x:0,
	y:0,
}
const timer = document.createElement('a');
const pointer = document.createElement('div');
const poket = document.createDocumentFragment();
pointer.classList.add('mouse_pointer');
pointer.style.backgroundImage = 'url("Loading.gif")';

function timerGo (){setTimeout(()=>{
	const date = new Date();
	timer.textContent = date.toLocaleString('ko-KR', { timeZone: 'UTC' });
	timerGo();
},1000);};
timerGo();
const positionPointer = {
	x:0,
	y:0,
}
document.addEventListener('mousemove',(event)=>{
	positionPointer.x = event.clientX;
	positionPointer.y = event.clientY;

})
function chaser(){
	setTimeout(()=>{
		pointer.style.left = `${positionPointer.x}px`;
		pointer.style.top = `${positionPointer.y}px`;
		chaser();
	},10);
};
poket.appendChild(timer);
poket.appendChild(pointer);
document.body.append(poket);
chaser();
class todo_category{
	constructor(){
		this.mainBox = document.createElement('div');
		this.mainBox.classList.add('todo_box');
		document.body.append(this.mainBox);
		this.drag = false;
		this.pre_mouse ={
			x:0,
			y:0,
		};
		this.bgiList = ["url(\"cat1.png\")","url(\"cat2.png\")","url(\"cat3.png\")"];
		document.body.style.backgroundImage = this.bgiList[0];
		this.downMouse = this.downMouse.bind(this);
		this.upMouse = this.upMouse.bind(this);
		this.moveMouse = this.moveMouse.bind(this);
		document.addEventListener('mouseup',this.upMouse);
		const temp = document.createElement('input');
		temp.classList.add('txt_input');
		this.mainBox.appendChild(temp);
		const add_btn = this.buttonMader('add','add_list',this.throwttle(this.addTodo,1000));
		this.mainBox.appendChild(add_btn);
		const next_btn = this.buttonMader('next','next_btn',this.debounce(this.imageChangeBtn,1000));
		const pre_btn = this.buttonMader('pre','pre_btn', this.debounce(this.imageChangeBtn,1000));
		document.body.appendChild(pre_btn);
		document.body.appendChild(next_btn);
	}

	throwttle (callback,delay) {
		let timerId;
		return event =>{
			if(timerId) return;
			timerId = setTimeout(()=>{
				callback.call(this,event);
				timerId = null;
			},delay,event);
		}
	}
	
	debounce(callback, delay) {
		let timerId;
		return event => {
			if(timerId) clearTimeout(timerId);
			timerId = setTimeout(() => callback.call(this, event), delay);
		};
	}
	imageChangeBtn(event){
		const is_pre = event.target.classList.contains('pre_btn');
		let cruentIdx = this.bgiList.indexOf(document.body.style.backgroundImage);
		if(is_pre)
			cruentIdx = cruentIdx === 0 ? this.bgiList.length -1: cruentIdx-1;
		else
			cruentIdx = cruentIdx === this.bgiList.length-1 ? 0: cruentIdx+1; 
		event.target.style.backgroundColor = this.getRandomColor();
		const targetImage = this.bgiList[cruentIdx];
		document.body.style.backgroundImage = targetImage; 
	}
	getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
	}
	buttonMader(str,classid,fun){
		const $button = document.createElement('button');
		$button.classList.add(classid);
		$button.textContent =str;
		$button.addEventListener('click',fun);
		return $button;
	}
	addTodo(event){
		const $txt = event.target.previousElementSibling.value;
		event.target.previousElementSibling.value = "";
		const $box = document.createElement('li');
		$box.textContent = $txt+"    ";
		$box.classList.add('box');
		$box.style.left = '357px';
		$box.style.top = '417px';
		this.mainBox.append($box);
		$box.addEventListener('mousemove',this.moveMouse);
		$box.addEventListener('mousedown',this.downMouse);
	}
	downMouse(event){
		this.drag = true;
		this.pre_mouse.x = event.clientX;
		this.pre_mouse.y = event.clientY;
	}
	moveMouse(event){
		if(this.drag){
			event.target.style.left = `${(parseInt(event.target.style.left) || 0) + (event.clientX -this.pre_mouse.x)}px`;
			event.target.style.top = `${(parseInt(event.target.style.top) || 0) + (event.clientY -this.pre_mouse.y)}px`;
			this.pre_mouse.x = event.clientX;
			this.pre_mouse.y = event.clientY;
		}
	}
	upMouse(event){
		this.drag = false;
	}
}

const start = new todo_category();