const privateInfo = (function () {
  const name = "semjeong";
  let age = 26;

  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    }
  };
}());

console.log(privateInfo.getName(), privateInfo.getAge());
// console.log(name, age); // error