// solution 1
function solution(my_string) {
    return my_string.replace(/a|e|i|o|u/g,"");
}

// solution 2
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}