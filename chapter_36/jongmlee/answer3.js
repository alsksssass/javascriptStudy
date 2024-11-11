/*
Chapter 36

### 문제 3
중첩된 객체에서 특정 깊이의 값만 추출하는 함수를 구현하세요.

*/

// Your solution

function extractDepth(obj, depth) {
	if (depth === 0 || typeof obj !== "object" || obj === null) {
		return obj;
	}
  
	return Object.fromEntries(
		Object.entries(obj).map(([key, value]) => [key, extractDepth(value, depth - 1)])
	);
  }
  
  // 예시
  const data = {
	name: "Whiskers",
	age: 3,
	owner: {
	  name: "Alice",
	  address: {
		city: "Wonderland",
		zipcode: "12345"
	  }
	},
	health: {
	  vaccinations: ["rabies", "feline distemper"],
	  spayed: true,
	  weight: 4.5
	}
  };
  
  console.log(extractDepth(data, 1));
  console.log(extractDepth(data, 2));
  console.log(extractDepth(data, 3));