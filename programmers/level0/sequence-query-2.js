// 문제: 수열과 구간 쿼리 2
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 2차원 배열 순회, 최솟값 비교
// 배운점: 직접 변수에 Infinity 할당해 최솟값 비교 (최댓값이면 -1 할당), 구조분해 할당

// 시간복잡도: O(qn), q = 쿼리 길이, n = 배열 길이

function solution(arr, queries) {
    let answer = [];

    for (let q = 0; q < queries.length; q++) {
        let min = Infinity;
        let [s, e, k] = queries[q]; // 구조분해할당
        
//      s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]
        for (let i = s; i <= e; i ++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        };
        
        answer[q] = (min == Infinity) ? -1 : min;
    }
    
    return answer;
}