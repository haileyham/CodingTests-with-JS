function solution(x) {
    return x % (x.toString().split('').reduce((a,c)=> a + parseInt(c), 0)) == 0
}