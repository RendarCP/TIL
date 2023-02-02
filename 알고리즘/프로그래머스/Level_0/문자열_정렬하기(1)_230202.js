// solution 1
function solution(my_string) {
    var answer = [];
    const splits = my_string.split('');
    splits.map(s => {
        if(Number(s) >= 0){
            answer.push(Number(s));
        }
    })
    answer.sort();
    return answer;
}

// solution 2
// 정규표현식 사용
function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
}

// solution 3
function solution(my_string) {
  return my_string
    .match(/[0-9]/g)
    .map(str => +str)
    .sort((a, b) => a - b);
}