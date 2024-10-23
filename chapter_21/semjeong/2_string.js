function removeVowel(str) {
  return str.replaceAll(/[aeiou]/gi, '');
}

function capitralize(str) {
  const arr = str.split(' ');
  return arr.reduce((p, c, i) => {
    const lower = c.toLowerCase();
    let ret = p + (i == 0 ? "" : " ");
    if (lower.search(/^[a-z]/g) == -1) {
      ret += lower.slice(0, 1);
    } else {
      ret += lower.slice(0, 1).toUpperCase();
    }
    return ret + lower.slice(1);
  }, "");
}

console.log(removeVowel("hEllO my name is semjeong"));
console.log(capitralize(removeVowel("hEllO my name is semjeong")));
console.log(capitralize("hEllO my name is semjeong"));