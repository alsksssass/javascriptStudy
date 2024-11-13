/*
Chapter 38

### 문제 3
requestAnimationFrame을 사용하여 부드러운 애니메이션을 구현하세요.

*/

// Your solution

const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let x = 0; // 원의 초기 x 위치
const y = canvas.height / 2; // 원의 y 위치 (고정)
const radius = 20; // 원의 반지름
const speed = 2; // 원이 이동하는 속도

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화

  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = 'blue';
  ctx.fill();

  x += speed; // x 좌표 업데이트

  // 캔버스를 벗어날 경우 원을 처음 위치로 되돌림
  if (x - radius > canvas.width) {
	x = -radius;
  }

  requestAnimationFrame(animate); // 다음 프레임 요청
  // setInterval(animate, 16);
}

animate(); // 애니메이션 시작

// requestAnimationFrame은 브라우저의 화면 갱신 주기에 맞춰 실행되므로
// 1. 불필요한 연산을 발생하지 않게 최적화
// 2. 성능을 최적화하여, 애니메이션이 보이지 않을 때는 자동을 멈처줌