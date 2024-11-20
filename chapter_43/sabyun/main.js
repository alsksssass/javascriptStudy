const adress = "http://localhost:3000/todos";
const db_post =(value)=>{
	fetch(adress,{
	method:'POST',
	headers: {
		"Content-Type" : "application/json"
	},
	body:JSON.stringify(value)
})
.then(res =>res.json())
.then(data =>{
	const db = JSON.stringify(data,null,2); 
	console.log(db);
	logadd(db);
})
.catch(err=> console.log(err));
}
const db_get = ()=>{
fetch(adress)
.then(response => response.json())
.then(data => {
	data.map(v =>{
		const db = JSON.stringify(v,null,2);
		console.log(db);
		logadd(db,true);
	});
})
.catch(err => console.log(err));
}

const log_box = document.createElement('div');
const db_box = document.createElement('div');

function logadd(str, db = false) {
    const log = document.createElement('li');
    log.className = 'log-item';
    log.textContent = str;
    
    // JSON 문자열을 보기 좋게 포맷팅
    try {
        const jsonObj = JSON.parse(str);
        log.textContent = JSON.stringify(jsonObj, null, 2);
    } catch(e) {
        log.textContent = str;
    }
    
    if(db) {
        db_box.append(log);
        db_box.scrollTop = db_box.scrollHeight; // 자동 스크롤
    } else {
        log_box.append(log);
        log_box.scrollTop = log_box.scrollHeight; // 자동 스크롤
    }
}
const post_box = document.createElement('div');
const post_input = document.createElement('input');
const post_btn = document.createElement('button');
const get_btn = document.createElement('button');
get_btn.textContent = 'getDB';
get_btn.addEventListener('click', db_get);
post_btn.textContent = 'post';
post_btn.addEventListener('click',e=>{
	e.preventDefault();
	const value = e.target.previousElementSibling.value;
	console.log(value);
	if(value.length  === 0 ) return;
	db_post({
		content : value,
		completed: false
	});
});
log_box.className = 'log-container';
db_box.className = 'log-container';
post_box.className = 'post-box';
get_btn.className = 'get-button';
post_box.append(post_input);
post_box.append(post_btn);
const poket = document.createDocumentFragment();
poket.append(post_box);
poket.append(log_box);
poket.append(get_btn);
poket.append(db_box);
document.body.append(poket);




