function solution(arr) {
    let sumArr = arr.reduce((a,c)=>a+c,0);
    return sumArr / arr.length
}