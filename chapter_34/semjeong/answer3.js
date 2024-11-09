/*
Chapter 34

### 문제 3
커스텀 이터러블 객체를 만들어 for...of 문으로 순회하세요.

*/

// Your solution
class Node {
  constructor(val=0, next=null) {
    this.val = val;
    this.next = next;
  }
}

class NodeIterator {
  constructor(n=null) {
    this.cur = n;
  }

  [Symbol.iterator]() { return this; }

  next() {
    let obj;
    if (this.cur) {
      obj = { value: this.cur.val, done: false };
      this.cur = this.cur.next;
    } else {
      obj = { value: null, done: true };
    }
    return obj;
  }
}

const head = new Node(1, new Node(2, new Node(3)));
const iter = new NodeIterator(head);
for (let i of iter) {
  console.log(i);
}
