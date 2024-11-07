const _id = Symbol("id");

class User {
  constructor(name, id) {
    this.name = name;
    this[_id] = id;
  }

  getId() {
    return this[_id]; // Symbol을 통해 비공개 속성 접근
  }
}

const user = new User("somilee", 990202);
console.log(user.name);    // "somilee"
console.log(user.getId()); // 990202

console.log(user._id);     // undefined
console.log(user[_id]);    // 990202 
//일반적인 방법으로의 접근 어렵게 -> 완전한 비공개를 원하면 클로저