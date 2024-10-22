function solution(strArr) {
    return strArr.map((element, idx) => {
		return idx % 2 ? element.toUpperCase():element.toLowerCase();
	});
}