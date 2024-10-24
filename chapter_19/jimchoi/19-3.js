/*
1. dog 객체 자체에서 getname 검색
2. dog.__proto__ (Animal.prototype)에서 getname 검색 -> 찾음!
3. 못 찾았다면 dog.__proto__.__proto__ (Object.prototype) 검색
4. 계속 못 찾으면 null까지 가서 undefined 반환
*/