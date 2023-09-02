function solution(n) {
    let 수박수박 = []
    let 수박제조기 = 'n'.repeat(n).split('').map((a,i)=>
                           {if(a[i%2]){
        수박수박.push("수")
    }else{
        수박수박.push("박")
    }})
    return 수박수박.join('')
}