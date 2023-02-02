// solution 1
function solution(my_string) {
    let result = []
    let temp = my_string.split('')
    temp.map(t => {
        if(!isNaN(t)){
            result.push(Number(t))
        }
    })
    let ret = result.reduce((a, b) => a + b, 0);
    return ret;
}

// solution 2
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, c) => a + +c, 0);
}