// 문제: 특별한 2차원 배열 2
// 출처: 프로그래머스 Level 0
// 유형: -
// 핵심 아이디어: 대칭 행렬(symmetric matrix) 검사
// 배운점: arr.every() 함수 활용, 대칭 행렬 -> 반만 순회해도 된다 (j = i + 1 최적화)

// O(n^2) 

function solution(arr) {
//     every() 이용한 풀이 (선언형)
    return +arr.every((ar, i) => ar.every((_, j) => arr[i][j] === arr[j][i]));
    
//     for 문 풀이 (명령형)
    for (let i = 0; i < arr.length; i++) {
//         모든 arr의 원소의 길이는 같습니다.
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] !== arr[j][i]) return 0;
        }
    }
    return 1;

    // for문 풀이 최적화 (대칭 행렬 검사이므로 반만 봐도 됨!)
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i][j] !== arr[j][i]) return 0;
        }
    }
    return 1;
}

