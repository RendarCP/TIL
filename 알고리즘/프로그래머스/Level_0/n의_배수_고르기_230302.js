// sol 
function solution(n, numlist) {
    var answer = [];
    answer = numlist.filter((num) => num % n === 0)
    return answer;
}