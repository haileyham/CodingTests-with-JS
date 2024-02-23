class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (!this.front) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) return null;
        const temp = this.front;
        this.front = this.front.next;
        if (!this.front) this.rear = null;
        this.size--;
        return temp.data;
    }
}

function findLastCard(n) {
    const queue = new Queue();

    // 카드를 큐에 넣음
    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }

    // 카드를 반으로 나누고, 홀수 번째 카드를 버림
    while (queue.size > 1) {
        queue.dequeue(); // 맨 앞의 카드를 버림
        const frontCard = queue.dequeue(); // 그 다음 카드를 맨 뒤로 보냄
        queue.enqueue(frontCard);
    }

    // 마지막으로 남은 카드 출력
    return queue.front.data;
}

const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "../input.txt").toString().trim();
const answer = findLastCard(parseInt(input));
console.log(answer);