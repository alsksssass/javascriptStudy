function solution(babbling) {
    let answer = 0;
    
    babbling.forEach(word => {
        let tword = word;
        const possible = {
            "aya": true,
            "ye": true,
            "woo": true,
            "ma": true
        };
        let isPossible = 0;
        let isValid = true;
        
			while (tword.length > 0 && isValid) {
				let found = false;
				
				for (let sound of Object.keys(possible)) { // 객체의 키들만 가져와서 돌기
					let idx = tword.indexOf(sound); // tword 안에 단어가 있다면
					if (idx === 0 && possible[sound]) {  // 단어가 발음으로 시작하면
						possible[sound] = false;  // 사용한 발음 표시
						isPossible++;
						tword = tword.substr(sound.length);
						found = true; 
						break;// 다시 처음으로 돌아가서 발음별로 찾기
					}
				}
				
			if (!found) { // 디 돌았는데 
				isValid = false;  // 매칭되는 발음을 찾지 못함
			}
			}
        


        if (tword.length === 0 && isValid) {
            answer++;
        }
    });
    
    return answer;
}