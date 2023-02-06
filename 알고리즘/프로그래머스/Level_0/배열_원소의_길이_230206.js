// solution 1
function solution(strlist) {
  let answer = [];
  strlist.map(str => {
      answer.push(str.length)
  })
  return answer;
}

// solution 2
function solution(strlist) {
  return strlist.map((el) => el.length)
}