function solution(my_string, letter) {
    return my_string.split('').filter((a)=>letter!=a).join("")
}