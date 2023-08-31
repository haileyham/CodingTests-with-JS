function solution(n, k) {
    let a = Math.floor(n/10);
    let drink = (k-a) * 2000
    return (12000 * n) + drink
}