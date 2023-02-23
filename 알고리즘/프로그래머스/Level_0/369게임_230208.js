function solution(order) {
    var answer = 0;
    const arr = String(order).split('')
    arr.map(a => {
        if(a === "3" || a === "6" || a === "9"){
            answer += 1;
        }
    })
    return answer;
}