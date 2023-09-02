function solution(array) {
    return array[Math.floor(array.sort((a,b)=>a-b).length/2)]
}