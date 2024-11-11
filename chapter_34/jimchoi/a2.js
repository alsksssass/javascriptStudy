// function solution(numbers) {
//     let answer = [];
//     for(let i=0; i < numbers.length; i++){
//         for (let j=i; i < numbers.length; j++){
//             if (j !== i)
//             {

//             const num = i + j;
//             if ( !answer.includes(num))
//                 answer.push(num);
//             }
//         }
//     }

//     return answer.sort((a, b) => a - b);
// }

function solution(numbers) {
    let answer = new Set;
    for(let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++){

            const num = numbers[i] + numbers[j];
                answer.add(num);
            }
        }
    
    
    return [...answer].sort((a, b) => a - b);
}