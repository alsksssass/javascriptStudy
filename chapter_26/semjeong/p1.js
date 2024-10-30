// this binding
console.log("===== this binding =====");
const cat = {
  sound: "meow",
  playArrow: function () {
    this.outer(() => { console.log(this.sound); });
  },
  playNormal: function () {
    this.outer(function () { console.log(this.sound); });
  },
  outer: function (f) {
    f();
  }
};

cat.playArrow(); // 자신의 this가 존재하지 않고 상위 스코프의 this를 가리킨다.
cat.playNormal();

// arguments
console.log("===== arguments =====");

function normal(a, b) {
  console.log(arguments);
}

const arrow = (a, b) => {
  console.log(arguments);
}

arrow(1, 2); // 자기 자신의 arguments를 갖지 않는다.
normal(1, 2);

// constructor
console.log("===== constructor =====");

// new arrow(); // error: arrow is not a constructor
new normal();