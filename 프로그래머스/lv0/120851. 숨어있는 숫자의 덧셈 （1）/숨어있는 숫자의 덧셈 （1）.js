function solution(my_string) {
    return my_string.split('').filter((a)=>a>=0).map((a)=> parseInt(a)).reduce((a,c)=>a+c,0)
}