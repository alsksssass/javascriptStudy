// 화살표 함수와 일반 함수의 this 바인딩 차이를 보여주는 예제를 작성하고, 이러한 차이가 발생하는 이유를 설명하세요.

const nbaTeam = {
	name: 'Warriors',
	players: ['Stephen', 'Buddy', 'Draymond'],
	
	showPlayersRegular: function() {
	  this.players.forEach(function(player) {
		console.log(`${player} plays for ${this.name}`);
	  });
	},
  
	showPlayersArrow: function() {
	  this.players.forEach((player) => {
		console.log(`${player} plays for ${this.name}`);
	  });
	}
};

nbaTeam.showPlayersRegular();
nbaTeam.showPlayersArrow();