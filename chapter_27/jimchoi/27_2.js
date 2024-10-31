/**
 * 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우
 */


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 원본배열의인덱스1부터2개의요소를제거하고그자리에새로운요소2@, 3@을삽입한다 
const SpliceFunc = (arr, idx, ...rest) => {
	function add (){
		arr.Splice(idx, 0, ...rest);
	}
	function cut (num){
		arr.Splice(idx, num, ...rest);

	}
}
const sliceFunc = (arr, idx1, idx2) => {
	if (!idx2)
		return arr.slice(idx1);
	else 
		return arr.slice(idx1, idx2);
}

const concatFunc = (arr1, arr2) => {
	return arr1.concat(arr2);
}


