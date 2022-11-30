// 정답 1
function solution(numbers) {
  let tmp = 0;
  for (let i = 0; i < numbers.length; i++) {
    tmp += numbers[i];
  }
  return tmp / numbers.length;
}
