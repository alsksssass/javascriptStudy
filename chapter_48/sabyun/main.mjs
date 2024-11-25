import { checker } from './calculator.mjs';
// 계산기 버튼 배열 정의
const buttonValues = [
	'7', '8', '9', '/',
	'4', '5', '6', '*',
	'1', '2', '3', '-',
	'0', '.', '=', '+',
	'C'
];

// 입력값을 저장할 배열
let inputArray = [];

// 계산기 버튼 생성 및 이벤트 처리
function createButtons() {
	const buttonsContainer = document.getElementById('buttons');
	const display = document.getElementById('display');

	buttonValues.forEach(value => {
		const button = document.createElement('button');
		button.textContent = value;

		// 버튼 스타일 설정
		if (value === '=') {
			button.className = 'equals';
		} else if (value === 'C') {
			button.className = 'clear';
		} else if (['+', '-', '*', '/'].includes(value)) {
			button.className = 'operator';
		}

		// 버튼 클릭 이벤트 처리
		button.addEventListener('click', () => {
			handleButtonClick(value, display);
		});

		buttonsContainer.appendChild(button);
	});
}

// 버튼 클릭 처리 함수
function handleButtonClick(value, display) {
	if (value === 'C') {
		// Clear 버튼: 모든 데이터 초기화
		inputArray = [];
		display.textContent = '0';
	} else if (value === '=') {
		// Equal 버튼: 계산 실행
		try {
			const a = inputArray[0];
			const b = inputArray[2];
			const o = inputArray[1];
			const result = checker(Number(a),Number(b),o);
			display.textContent = `${result}`;
			inputArray = [result];
			console.log('계산 결과:', result);
			console.log('입력 배열:', inputArray);
		} catch (error) {
			display.textContent = `Error ${error}`;
			inputArray = [];
		}
	} else {
		// 숫자와 연산자 입력
		inputArray.push(value);
		display.textContent = inputArray.join('');
		console.log('입력 배열:', inputArray);
	}
}

// 키보드 입력 처리
document.addEventListener('keydown', (event) => {
	const key = event.key;
	const display = document.getElementById('display');

	// 유효한 키 입력 확인
	if (buttonValues.includes(key) || key === 'Enter') {
		event.preventDefault();
		// Enter 키를 '='로 매핑
		handleButtonClick(key === 'Enter' ? '=' : key, display);
	}
});

// 초기화
createButtons();
