function a() {
  'use strict';
  console.log(this);
}

function b() {
  console.log(this);
}

a(); // undefined
b(); // global { ... }