// 정답 1
function solution(age) {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  var answer = "";
  age = age.toString();

  for (let i = 0; i < age.length; i++) {
    answer += alphabet[age[i]];
  }
  return answer;
}

// 정답 2
function solution(age) {
  return [...("" + age)]
    .map((num) => String.fromCharCode("a".charCodeAt(0) + +num))
    .join("");
}
