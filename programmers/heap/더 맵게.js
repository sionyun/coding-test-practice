/*
    문제: 더 맵게
    출처: 프로그래머스 Level 2
    유형: 힙
    핵심 아이디어: Min Heap 활용하기
    배운점:
    - JS는 힙이 없다. 사실 힙을 사용하는 문제는 다른 언어로 푸는것이 코딩 테스트 준비에는 맞다고 본다.
    - JS 배열은 동적 배열/dynamic array, shift/unshift 는 사실상 금기. 전부 한 칸씩 이동하므로 O(n).
    - 비슷한 방식 (queue) 필요하면 포인터 이동.

    시간복잡도: O(n log n)
*/

function solution(scoville, K) {
    let h = new MinHeap();
    let answer = 0;
    
//     힙에 넣기
    scoville.forEach(v => h.push(v));
        
    while (h.size() > 1) {
        let a = h.pop();
        if (a >= K) return answer;

        let b = h.pop();
        h.push(a + b * 2);
        
        answer++;
    }
    return h.pop() >= K ? answer : -1;
}

// Heap
// JS는 힙이 없다...!
class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    push(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        
        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);
            
            if (this.heap[parent] <= this.heap[index]) break;
            
            [this.heap[parent], this.heap[index]] =
            [this.heap[index], this.heap[parent]];
            
            index = parent;
        }
    }
    
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        
        this.bubbleDown();
        return min;
    }
    
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        
        while (true) {
            let left = index * 2 + 1;
            let right = index * 2 + 2;
            let smallest = index;
            
            if (left < length && this.heap[left] < this.heap[smallest])
                smallest = left;
            
            if (right < length && this.heap[right] < this.heap[smallest])
                smallest = right;
            
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] =
            [this.heap[smallest], this.heap[index]];
            
            index = smallest;
        }
    }
    
    size() {
        return this.heap.length;
    }
}
