function findString(str,rge){
	const getString = str.search(rge);
	
	return str.slice(0,getString) || "";
}

function masterSorter(a,b=null){
	const caseA = findString(a,(/[0-9]/));
	const caseB = findString(b,(/[0-9]/));
	// console.log('case a,b ',caseA,caseB);
	if(caseA.toLowerCase() > caseB.toLowerCase()) return 1;
	else if( caseB.toLowerCase() > caseA.toLowerCase()) return -1;
	else{
		const secondCaseA = a.replace(caseA,"").match(/\d{1,5}/) ? a.replace(caseA,"").match(/\d{1,5}/)[0]:"";
		const secondCaseB = b.replace(caseB,"").match(/\d{1,5}/) ? b.replace(caseB,"").match(/\d{1,5}/)[0]:"";
		// console.log('second case a,b',Number(secondCaseA) ,Number(secondCaseB) )
		if(Number(secondCaseA) - Number(secondCaseB) > 0) return 1;
		else if(Number(secondCaseA) - Number(secondCaseB) < 0) return -1;
		// else if(secondCaseA.length !== secondCaseB.length) return secondCaseA.length > secondCaseB.length ? 1:-1;
		else{
			return 0;
			const lastCaseA = a.replace(caseA+secondCaseA,"") || "";
			const lastCaseB = b.replace(caseB+secondCaseB,"") || "";
			// console.log('last Case a,b ',lastCaseA,lastCaseB);
			if (lastCaseA > lastCaseB) return 1;
			else if(lastCaseA < lastCaseB)return -1;
			else return 0; // 같은 경우 원래 순서 유지
		}
	}
}

function solution(files) {
    var answer = [];
	// console.log(files.sort((a,b)=>masterSorter(a,b)));
	return files.sort((a,b)=>masterSorter(a,b));
    return answer;
}

const answer1 = ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"];
const answer2 = ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"];

JSON.stringify(solution(["img12.png", "img10.png", "img02.png", "img1.png", "IMG01.GIF", "img2.JPG"])) === JSON.stringify(answer1)
    ? console.log('correct!')
    : console.log('answer1 fail!');

JSON.stringify(solution(["F-5 Freedom Fighter", "B-50 Superfortress", "A-10 Thunderbolt II", "F-14 Tomcat"])) === JSON.stringify(answer2)
    ? console.log('correct!')
    : console.log('answer2 fail!');