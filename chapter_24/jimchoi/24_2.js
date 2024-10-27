const personalInfo = function () {
	const name = "jimin";
	const age = "26";
  return {
	getName() {
		return name;
	},
	getAge() {
		return age;
	},
  };
}

const jimchoi = personalInfo();

console.log(jimchoi.getName()); // jimin