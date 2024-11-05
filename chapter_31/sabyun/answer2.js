const fs = require('fs');
const rexDate = /\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}/;
const rexIp = /(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}/
const rexType = /\[(ERROR|INFO|WARNING)\]/
function readLog(file,type){
	if(!(['ERROR','INFO','WARNING'].includes(type.toUpperCase()))) return;
	fs.readFile(file, 'utf8', (err, data) => {
		if (err) {

			console.error('Error reading file:', err);
			return;
		}
		const log_list = data.split('\n').filter(a  => RegExp('\\[' + type + '\\]', 'i').test(a));
		console.log(type,'타입의 데이터');
		log_list.forEach(d =>{
			console.log('날짜 :', d.match(rexDate)[0] || "?", '시간 :' ,d.match(rexIp)[0] || "?",'메시지 : ',d.match('\\[' + type + '\\](.*)', 'i')[0].replace('['+type+'] ',"") || "");
		})
	});
}

readLog('ex.log','WARNING');