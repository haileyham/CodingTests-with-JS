function solution(numbers){
    let a = numbers.reduce((a,c)=>a+c,0);
   return  a !== 45 ?  (45-a) : false
}
