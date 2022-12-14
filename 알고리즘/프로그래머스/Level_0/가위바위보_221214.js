// 정답 1
function solution(rsp) {
    var answer = [];
    rsp.split('').map(i=>{
        if(i === "2"){
            answer.push('0')
        }
        if(i === "0"){
           answer.push('5')
        }
        if(i === "5"){
            answer.push('2')
        }
    })
    return answer.join('');
}

//정답 2 (신기)(참고)

function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}