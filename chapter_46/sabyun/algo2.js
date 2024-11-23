// class customIterable{
// 	constructor(n,target){
// 		this.len = n;
// 		this.target = target;
// 	}
// 	[Symbol.iterator](){
// 		let count  = 0;
// 		const len = this.len;
// 		const target = this.target;
//         return {
//             next() {
// 				console.log(count,len);
//                 count++;
//                 let total = 0;
//                 let arr = Array.from({ length: len }, (_, i) => {total += count +i;
// 					return count+i;
// 				});
// 				console.log('arr: ', arr, target === total);
//                 if(target === total){
//                     return {value : arr, done : true};
// 				}
//                 else 
// 					return {value : null ,done : false};
//             }
//         };
//     };
// };


// function solution(num, total) {
//     const iter = new customIterable(num,total)[Symbol.iterator]();;
// 	let result;
//     while(result === iter.next()){
//         if(result.done) return result.value;
//     }
// }


function solution(num,total){
	for(let i = -num; ;i++){
		let sum = 0;
		let arr = Array.from({ length: num }, (_, idx) => {
			sum += i + idx;
			return idx + i;
		});
		if(total === sum) return arr;
	}
}

console.log(solution(5,15));