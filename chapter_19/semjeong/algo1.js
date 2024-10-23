function solution(strArr) {
  return strArr.map((x, i) => 
      i % 2 ? x.toUpperCase() : x.toLowerCase()
  );
}