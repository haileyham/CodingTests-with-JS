function solution(num_list) {
    return [ num_list.filter((n)=> n%2 ==0).length,
    num_list.filter((n)=> n%2 !=0).length
    ]
}