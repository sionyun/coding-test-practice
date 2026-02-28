// 문제: 특별한 2차원 배열 1
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 순회, 미리 2차원 배열 할당하기
// 배운점: 2차원 배열 만드는 방법

// 시간복잡도: O(n^2)

// n x n, i = j 임을 이용한 풀이 (함수형)
function solution(n) {
    return Array.from({length: n}, (_, i) => 
                      Array.from({length: n}, (_, j) => i === j ? 1 : 0));
}

// n x n, i = j 임을 이용한 풀이 (더 깔끔)
function solution(n) {
    // 먼저 0을 채운 어레이를 만들고 O(n^2)
    let answer = Array.from(Array(n), () => Array(n).fill(0));
    
    // [i][i] 값만 바꾸기 O(n)
    for (let i = 0; i < n; i ++) {
        answer[i][i] = 1;
    }
    return answer;
}
 
// 이중 for
function solution(n) {
    let answer = [];
    
    // O(n)
    for (let i = 0; i < n; i ++) {
        let ans = [];
        // O(n)
        for (let j = 0; j < n; j ++) {
            i === j ? ans.push(1) : ans.push(0);
        }
        answer.push(ans);
    }
    return answer;
}