// 배열의 고차 함수(map, filter, reduce)를 사용하여 학생들의 성적 데이터를 처리하는 함수를 작성하세요
//  평균 점수 계산, 특정 점수 이상의 학생 필터링, 각 과목별 최고점 찾기 등의 기능을 구현하세요.

class GradeHandler {

	static getAvgScore(scores) {
		return scores.reduce((acc, cur) => acc + cur, 0) / scores.length;
	}

	static filterStudentByScore(standard, scores) {
		return scores.filter(score => score >= standard);
	}

	static getHighestScoreBySubject(scores) {
		const subjects = ["math", "eng", "science"];
		const highestScores = {};

		subjects.forEach(subject => {
			highestScores[subject] = Math.max(...scores.map(score => score[subject]));
		});

		return highestScores;
	}
}

console.log(GradeHandler.getAvgScore([90, 60, 30, 50, 10]));
console.log(GradeHandler.filterStudentByScore(60, [90, 60, 30, 50, 10]));
console.log(GradeHandler.getHighestScoreBySubject(
	[ {"math" : 30, "eng" : 40, "science" : 50},
	{"math" : 90, "eng" : 20, "science" : 10},
	{"math" : 70, "eng" : 30, "science" : 70} ]
));