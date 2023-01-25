// solution 1
function solution(dot) {
    var answer = 0;
    console.log('dot', dot);
    if(dot[0] > 0 && dot[1] > 0){
        answer = 1;
    }
    if(dot[0] < 0 && dot[1] > 0){
        answer = 2;
    }
    if(dot[0] < 0 && dot[1] < 0){
        answer = 3;
    }
    if(dot[0] > 0 && dot[1] < 0){
        answer = 4;
    }
    return answer;
}

// solution 2
// 구조분해 할당 
function solution(dot) {
  const [x, y] = dot;
  if (y > 0) return x > 0 ? 1 : 2;
  return x < 0 ? 3 : 4;
}