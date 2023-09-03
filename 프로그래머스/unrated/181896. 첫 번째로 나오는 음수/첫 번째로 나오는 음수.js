function solution(num_list) {
    let a= num_list.filter((a)=>a<0)
    return num_list.indexOf(parseInt(a))
}