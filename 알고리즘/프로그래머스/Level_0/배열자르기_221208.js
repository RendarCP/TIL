// 정답 1 slice 활용
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 정답 2 splice활용
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}
