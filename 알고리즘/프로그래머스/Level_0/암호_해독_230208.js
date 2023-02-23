function solution(cipher, code) {
    var answer = '';
    let temp = [];
    const arr = cipher.split('');
    arr.forEach((a,i) =>{
        if(i % code === code - 1){
            temp.push(a);
        }
    })
    answer = temp.join('');
    return answer;
}

// ------- solution 2
function solution(cipher, code) {
    return cipher.split('').filter((_, index) => (index + 1) % code === 0).join('');
}