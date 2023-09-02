function solution(price) {
    if (price >= 500000) {
        return ~~(price * 0.8);  // 50% 할인
    } else if (price >= 300000) {
        return ~~(price * 0.9);  // 10% 할인
    } else if (price >= 100000) {
        return ~~(price * 0.95); // 5% 할인
    } else {
        return price;  // 할인 없음
    }
}