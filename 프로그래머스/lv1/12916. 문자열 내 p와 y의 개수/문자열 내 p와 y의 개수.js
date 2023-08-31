function solution(s){
    let a = s.toLowerCase();
    return a.split('p').length == a.split('y').length ? true : false;
}