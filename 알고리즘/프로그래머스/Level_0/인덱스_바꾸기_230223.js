// sol
function solution(my_string, num1, num2) {
    const temp = my_string.split('');
    let temp1 = my_string[num1];
    let temp2 = my_string[num2];
    temp.splice(num1, 1, temp2);
    temp.splice(num2, 1, temp1);
    
    return temp.join('');
}

// sol2
function solution(my_string, num1, num2) {
    my_string = my_string.split('');
    [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
    return my_string.join('');
}