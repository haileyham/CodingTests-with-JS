function solution(num) {
    let count = 0;
    while(num!==1){
        if(count == 500){
         return -1   
        }if(num%2==0){
            count ++;
            num /= 2;
        }else{
            count ++;
            num = num * 3 + 1;
        }
    }
    return count;
}