// call, apply, bind 메서드를 사용하여 this 바인딩을 명시적으로 변경하는 예제를 작성하세요.
// 각 메서드의 차이점도 설명하세요.

const player1 = {
	name : 'Curry',
	points : 0,
	score(points) {
		this.points += points;
		console.log(`${this.name} numbers on a board! he put ${this.points} points!`);
	}
};

const player2 = {
	name : 'Tatum',
	points: 0
};

player1.score.call(player2, 2);
player1.score.apply(player2, [3]);

player1.score.bind(player2)(2);

player1.score(3);