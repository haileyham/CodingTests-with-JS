function solution(arr, divisor) {
    let a= arr.filter((a)=>a%divisor==0).sort((a,b)=>a-b)
   return a.length ? a : [-1]
}