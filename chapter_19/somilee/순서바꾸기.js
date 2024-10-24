function solution(num_list, n) {
    return num_list.slice(n, num_list.length).concat(num_list.slice(0,n));
}