// 문제: 무작위로 K개의 수 뽑기
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 순회하며 중복 확인, 나머지 값 -1로 채워넣기 (인덱스 주의)
// 배운 점: 같은 문제에 대한 해답이라도 성능 면에서 다를 수 있음. 다양한 답을 찾고 비교해보기.

// 솔루션 3: 직접 순회 + 조기 종료 + 중복 체크 Set
// Time: O(n) 조기 종료
// Space: O(k) (answer + seen)
function solution(arr, k) {
    let answer = [];
    const seen = new Set();
    
    for (let a of arr) {
        if (!seen.has(a)) {
            answer.push(a);
            seen.add(a);
        } 
        
        if (answer.length === k) break;
    }
    
    while (answer.length < k) answer.push(-1);
    
    return answer;
}


// 솔루션 2: Set 활용 중복 체크, 선형 탐색 조기 종료 없음
// Time: O(n), n과 k 값이 커지면 유리 (빠른 중복 확인), 항상 arr 전체를 순회
// Space: O(n)
// 주의: JS의 Set은 삽입 순서를 유지하기 때문에 문제 조건에 맞음 다른 언어는 아닐수도
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k ? [...set, ...Array(k - set.size).fill(-1)] : [...set].slice(0, k);
}


// 솔루션 1: 선형 탐색 중복 체크, arr 순회 조기 종료
// O(nk), n과 k 값이 커지면 불리, k 작으면 유리
function solution(arr, k) {
    let answer = [];
    
    for (let i = 0; i < arr.length; i++) {
//         includes() cost : O(k) 선형 탐색
        if (!answer.includes(arr[i])) answer.push(arr[i]);
        
        if (answer.length === k) break;
    }
    
    while (answer.length < k) {
        answer.push(-1);
    }
    
    return answer;
}


// 오답
function solution(arr, k) {
    let answer = [];
    let offset = 0;
    
//     k만큼만 돌면 중복 때문에 실제로 k개를 못 채울 수 있음
    for (let i = 0; i < k+1; i ++) {
        if (i > arr.length - offset) {
            answer.push(-1);
        }
        else {
            if (!answer.includes(arr[i])) answer.push(arr[i]);
            offset++;
        }
//         answer가 이미 k개면 멈춰야 함
    }
    return answer;
}
