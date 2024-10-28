function removeVowel(str) {
  return str.replaceAll(/[aeiou]/gi, '');
}

function capitralize(str) {
  const arr = str.split(' ');
  return arr.reduce((p, c, i) => {
    const lower = c.toLowerCase();
    let ret = p + (i == 0 ? "" : " ");
    return ret + lower.charAt(0).toUpperCase() + lower.slice(1);
  }, "");
}

console.log(removeVowel("hEllO my name is soljeong"));
console.log(capitralize(removeVowel("hEllO my name is semjeong")));
console.log(capitralize("hEllO my name is semjeong"));