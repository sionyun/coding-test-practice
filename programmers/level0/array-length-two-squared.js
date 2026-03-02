// 문제: 배열의 길이를 2의 거듭제곱으로 만들기
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 2의 정수 거듭제곱이 되는 길이 구하기, 남은 길이 0으로 채우기
// 배운점: Math.log2() 함수를 사용해 arr 길이보다 큰 가장 작은 2의 정수 거듭제곱 찾음

// 시간복잡도: O(n), n = arr 길이

// 한번에 채우기, space O(1)
function solution(arr) {
    const target = 2 ** Math.ceil(Math.log2(arr.length));
    return [
      ...arr,
      ...Array(target - arr.length).fill(0)
    ];
}

// 재귀 사용, space O(n) (재귀 스택 오버플로우 위험 있음)
function solution(arr) {
    if (arr.length && Number.isInteger(Math.log2(arr.length))) {
        return arr;
    }
    arr.push(0);
//     Recursive: return call function(instance);
    return solution(arr);
}

// while 사용, space O(n) 안전성 업
function solution(arr) {
    let len = 1;
    while (len < arr.length) {
        len *= 2;
    }
    
    while (arr.length < len) {
        arr.push(0);
    }
    
    return arr;
}