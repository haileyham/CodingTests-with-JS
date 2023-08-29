function solution(numbers) {
    let sumArr = numbers.reduce((a,c)=> a+c,0)
    return sumArr / numbers.length;
}