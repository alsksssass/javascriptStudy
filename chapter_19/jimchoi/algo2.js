/**
 * 정수 리스트 num_list와 정수 n이 주어질 때, num_list를 n 번째 원소 이후의 원소들과 n 번째까지의 원소들로 나눠
 *  n 번째 원소 이후의 원소들을 n 번째까지의 원소들 앞에 붙인 리스트를 return하도록 solution 함수를 완성해주세요.
 */

function solution(num_list, n) {
    var answer = [];
    answer = num_list.slice(n, num_list.length); // slice 메소드로 n번째 이후의 원소들을 answer에 저장
    answer = [...answer, ...num_list.slice(0, n)] // 스프레드 연산자 이용
    return answer;
}