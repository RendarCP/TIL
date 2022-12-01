// 정답 1
function solution(my_string, n) {
  var tmp = [];
  my_string.split("").forEach((s) => {
    for (let i = 0; i < n; i++) {
      tmp.push(s);
    }
  });
  return tmp.join("");
}

// 정답 2
// repeat 활용법
function solution(my_string, n) {
  var answer = [...my_string].map((v) => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

// 정답 3
// reduce 활용법
function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}
