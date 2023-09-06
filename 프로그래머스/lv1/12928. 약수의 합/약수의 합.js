function solution(n) {
    let a = 0;
        for(i=0;i<=n;i++){
            for(k=1;k<=n;k++){
            if(i*k===n){a+=i}
            }
        }
    return a;
}