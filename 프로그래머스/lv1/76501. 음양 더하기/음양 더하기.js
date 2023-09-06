function solution(absolutes, signs) {
    let plus = 0;
    let minus = 0;
    absolutes.map((a,i)=>{
         if(signs[i]){
              plus+=a;}else{minus+=a;}
       })
    return plus-minus
}